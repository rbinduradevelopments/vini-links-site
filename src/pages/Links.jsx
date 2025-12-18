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

export default function Links() {
  return (
    <div className="page">
      <h2 className="section-title center">Links</h2>
      <p className="muted center">
        Choose where you’d like to listen, follow, or get in touch.
      </p>

      <div className="links-card">
        <a className="link-button link-youtube" href="https://youtube.com/@vincentjrigneymusic" target="_blank" rel="noreferrer">
          <FaYoutube className="icon" />
          <span>Listen on YouTube</span>
        </a>

        <a className="link-button link-spotify" href="https://open.spotify.com/artist/7BujO8GChxoZR1wOnHaXSc?si=pDrv0TIkTmC4PewgSPEaVg" target="_blank" rel="noreferrer">
          <FaSpotify className="icon" />
          <span>Listen on Spotify</span>
        </a>

        <a className="link-button link-apple" href="https://music.apple.com/gb/artist/vincent-j-rigney/913647868" target="_blank" rel="noreferrer">
          <FaApple className="icon" />
          <span>Listen on Apple Music</span>
        </a>

        <a className="link-button link-instagram" href="https://www.instagram.com/vincentjrigneymusic/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a>

        <a className="link-button link-facebook" href="https://www.facebook.com/profile.php?id=61551820321833" target="_blank" rel="noreferrer">
          <FaFacebook className="icon" />
          <span>Facebook</span>
        </a>

        <a className="link-button link-twitter" href="https://x.com/vinniejriggs" target="_blank" rel="noreferrer">
          <FaTwitter className="icon" />
          <span>Twitter / X</span>
        </a>

        <a className="link-button link-email" href="mailto:VJREntertainment@gmail.com">
          <FaEnvelope className="icon" />
          <span>Bookings / Press Enquiries</span>
        </a>
      </div>
    </div>
  );
}
