import React from "react";
import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaTiktok,
  FaAmazon,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Links() {
  return (
    <div className="page">
      <h2 className="section-title center">Links</h2>
      <p className="muted center">
        Choose where you’d like to listen, follow, or get in touch.
      </p>

      <div className="links-card">
        {/* 1. YouTube Music */}
        <a
          className="link-button link-youtubemusic"
          href="https://music.youtube.com/channel/UCfSHSsIIbxkSopAnrPp-R_Q"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="icon" />
          <span>Listen on YouTube Music</span>
        </a>

        {/* 2. Spotify */}
        <a
          className="link-button link-spotify"
          href="https://open.spotify.com/artist/7BujO8GChxoZR1wOnHaXSc?si=pDrv0TIkTmC4PewgSPEaVg"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify className="icon" />
          <span>Listen on Spotify</span>
        </a>

        {/* 3. Apple Music */}
        <a
          className="link-button link-apple"
          href="https://music.apple.com/gb/artist/vincent-j-rigney/913647868"
          target="_blank"
          rel="noreferrer"
        >
          <FaApple className="icon" />
          <span>Listen on Apple Music</span>
        </a>

        {/* 4. Amazon Music */}
        <a
          className="link-button link-amazon"
          href="https://music.amazon.co.uk/artists/B0C8RL76CT/vincent-j-rigney?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_56rv7KAFL7ZeA34FYSMnWI5kV"
          target="_blank"
          rel="noreferrer"
        >
          <FaAmazon className="icon" />
          <span>Listen on Amazon Music</span>
        </a>

        {/* 5. Instagram */}
        <a
          className="link-button link-instagram"
          href="https://www.instagram.com/vincentjrigneymusic/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a>

        {/* 6. Facebook */}
        <a
          className="link-button link-facebook"
          href="https://www.facebook.com/profile.php?id=61551820321833"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="icon" />
          <span>Facebook</span>
        </a>

        {/* 7. TikTok */}
        <a
          className="link-button link-tiktok"
          href="https://www.tiktok.com/@vincentjrigneymusic?_r=1&_t=ZN-92zoxjlYFvC"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok className="icon" />
          <span>TikTok</span>
        </a>

        {/* 8. Twitter / X */}
        <a
          className="link-button link-twitter"
          href="https://x.com/vinniejriggs"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="icon" />
          <span>Twitter / X</span>
        </a>
    
        {/* 9. Bookings (LAST) */}
        <a
          className="link-button link-email"
          href="mailto:VJREntertainment@gmail.com"
        >
          <FaEnvelope className="icon" />
          <span>Bookings / Press Enquiries</span>
        </a>
      </div>
    </div>
  );
}
