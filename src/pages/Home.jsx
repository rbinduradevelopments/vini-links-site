import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-left">
          <img
            className="hero-img"
            src="/vini-hero-bw.jpg"
            alt="Vincent J. Rigney"
          />
        </div>

        <div className="hero-right">
          <h1 className="hero-title">Vincent J. Rigney</h1>
          <p className="hero-subtitle">Singer • Songwriter • Guitarist • Producer</p>

          <p className="hero-text">
            Welcome — thanks for stopping by. You can listen to the latest releases,
            follow on socials, or get in touch for bookings and press.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" to="/music">
              Listen to Music
            </Link>
            <Link className="btn btn-secondary" to="/links">
              All Links
            </Link>
          </div>
        </div>
      </section>

      <section className="bio">
        <div className="bio-left">
          <h2 className="section-title">Biography</h2>

          <p>Born in the steel town of Corby, Northamptonshire, England.</p>

          <p>
            Vincent J. Rigney is a Singer Songwriter Guitarist &amp; Producer,
            blending elements of Blues Rock &amp; Indie.
          </p>

          <p>
            A musician with a lot of soul — confident, with a bold stage presence.
          </p>

          <p>
            Rigney is building a fanbase through gigs and beyond, with reviews from
            international blogs, radio stations and playlists reaching audiences far
            outside the UK.
          </p>

          <p>
            Rigney&apos;s debut EP <strong>“Songs From The Water Tower”</strong> explores
            personal journeys from years past, recorded in Saffron Walden (Lime Monkeys,
            Essex) with Producer Edd Hartwell (Robbie Williams, Amy MacDonald, Ed Sheeran).
          </p>

          <p>
            Vincent has completed his third EP <strong>“Rocky Road”</strong> and is
            currently working on his first album for <strong>2026</strong>.
          </p>
        </div>

        <div className="bio-right">
          <img
            className="bio-img"
            src="/vini-bio-colour.jpg"
            alt="Vincent J. Rigney with guitar"
          />
        </div>
      </section>
    </div>
  );
}
