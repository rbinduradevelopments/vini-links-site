import React, { useMemo, useState } from "react";

// helper for Netlify form POST
function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const isValidEmail = useMemo(() => {
    const trimmed = email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
  }, [email]);

  async function handleSubscribe(e) {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail) {
      setStatus("error");
      setMessage("That email doesn’t look right — please check it and try again.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // IMPORTANT: this is what makes Netlify capture the form submission
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "mailing-list",
          email: trimmed,
          source: "contact-page",
        }),
      });

      if (!res.ok) {
        throw new Error("Netlify form submission failed");
      }

      setStatus("success");
      setMessage("You’re subscribed! Thanks for joining the mailing list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <div className="page">
      <h2 className="section-title">Contact</h2>
      <p className="muted">For bookings, press enquiries, or general messages:</p>

      <div className="contact-box">
        <div className="contact-row">
          <span>Email:</span>
          <a href="mailto:VJREntertainment@gmail.com">VJREntertainment@gmail.com</a>
        </div>

        <p className="small">
          Tip: If you’re booking, include the venue/location, date, and set length.
        </p>

        {/* Subscribe box */}
        <div className="subscribe">
          <h3 className="subscribe-title">Join the mailing list</h3>
          <p className="subscribe-text">
            Get updates on new releases, gigs, and announcements.
          </p>

          <form
            className="subscribe-form"
            name="mailing-list"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubscribe}
            noValidate
          >
            {/* Netlify needs this hidden field */}
            <input type="hidden" name="form-name" value="mailing-list" />

            {/* optional field (nice to have later) */}
            <input type="hidden" name="source" value="contact-page" />

            {/* Honeypot anti-spam field */}
            <p className="sr-only">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <label className="sr-only" htmlFor="subscribeEmail">
              Email address
            </label>

            <input
              id="subscribeEmail"
              className="subscribe-input"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
            />

            <button
              className="subscribe-btn"
              type="submit"
              disabled={status === "loading" || !email.trim()}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* feedback */}
          {status !== "idle" && message && (
            <div
              className={
                status === "success"
                  ? "subscribe-alert success"
                  : status === "error"
                  ? "subscribe-alert error"
                  : "subscribe-alert"
              }
              role="status"
              aria-live="polite"
            >
              {message}
            </div>
          )}

        
        </div>
      </div>

      {/* SUPER IMPORTANT (Netlify detection for React sites):
          A hidden copy of the form so Netlify picks it up during build. */}
      <form
        name="mailing-list"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="mailing-list" />
        <input name="email" />
        <input name="source" />
        <input name="bot-field" />
      </form>
    </div>
  );
}
