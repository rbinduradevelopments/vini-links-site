import React from "react";

export default function Contact() {
  return (
    <div className="page">
      <h2 className="section-title">Contact</h2>
      <p className="muted">
        For bookings, press enquiries, or general messages:
      </p>

      <div className="contact-box">
        <div className="contact-row">
          <span>Email:</span>
          <a href="mailto:VJREntertainment@gmail.com">VJREntertainment@gmail.com</a>
        </div>

        <p className="small">
          Tip: If you’re booking, include the venue/location, date, and set length.
        </p>
      </div>
    </div>
  );
}
