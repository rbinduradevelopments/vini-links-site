import React from "react";
import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <div className="card">
        <img
          className="avatar"
          src="/vini-profile.jpg" // main profile image (put this file in /public)
          alt="Vincent J. Rigney"
        />

        <h1 className="artist-name">Vincent J. Rigney</h1>
        <p className="tagline">Blues · Rock ’n’ Roll · Soft Rock · Indie</p>

        <p className="intro">
          Thanks for listening and supporting the music. Have a look through
          the links below to follow, share and keep up with new releases and
          shows — hope you enjoy what you hear.
        </p>

        <div className="links">
          <a
            className="link-button link-youtube"
            href="https://youtube.com/channel/UCz4VzDs1Kkagu0D0-yhXb8A?si=55tlbYLPZQtO-T2X"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon" />
            <span>Listen on YouTube</span>
          </a>

          <a
            className="link-button link-spotify"
            href="https://open.spotify.com/artist/7BujO8GChxoZR1wOnHaXSc?si=pDrv0TIkTmC4PewgSPEaVg"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify className="icon" />
            <span>Listen on Spotify</span>
          </a>

          <a
            className="link-button link-apple"
            href="https://music.apple.com/gb/artist/vincent-j-rigney/913647868"
            target="_blank"
            rel="noreferrer"
          >
            <FaApple className="icon" />
            <span>Listen on Apple Music</span>
          </a>

          <a
            className="link-button link-instagram"
            href="https://www.instagram.com/vincentjrigneymusic/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" />
            <span>Instagram</span>
          </a>

          <a
            className="link-button link-facebook"
            href="https://www.facebook.com/profile.php?id=61551820321833"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="icon" />
            <span>Facebook</span>
          </a>

          <a
            className="link-button link-twitter"
            href="https://x.com/vinniejriggs"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="icon" />
            <span>Twitter / X</span>
          </a>

          <a
            className="link-button link-email"
            href="mailto:VJREntertainment@gmail.com"
          >
            <FaEnvelope className="icon" />
            <span>Bookings / Press Enquiries</span>
          </a>
        </div>

        <p className="footer-note">
          © {new Date().getFullYear()} Vincent J. Rigney
        </p>
      </div>
    </div>
  );
}

export default App;
