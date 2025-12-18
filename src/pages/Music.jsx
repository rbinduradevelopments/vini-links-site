import React from "react";

export default function Music() {
  return (
    <div className="page">
      <h2 className="section-title">Music</h2>
      <p className="muted">Listen here, or choose your preferred platform.</p>

      {/* Quick buttons */}
      <div className="music-grid">
        <a
          className="platform-card"
          href="https://open.spotify.com/artist/7BujO8GChxoZR1wOnHaXSc?si=pDrv0TIkTmC4PewgSPEaVg"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>

        <a
          className="platform-card"
          href="https://music.apple.com/gb/artist/vincent-j-rigney/913647868"
          target="_blank"
          rel="noreferrer"
        >
          Apple Music
        </a>

        <a
          className="platform-card"
          href="https://youtube.com/@vincentjrigneymusic"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
      </div>

      {/* Embeds */}
      <div className="embed-grid">
        <section className="embed-card">
          <h3 className="embed-title">Spotify (Top Tracks)</h3>

          <div className="embed-frame">
            <iframe
              title="Vincent J. Rigney on Spotify"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/7BujO8GChxoZR1wOnHaXSc?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        <section className="embed-card">
          <h3 className="embed-title">Featured on YouTube</h3>

          {/* Replace the VIDEO_ID below with the one you want to feature */}
          <div className="embed-frame youtube">
            <iframe
  title="Vincent J. Rigney – Featured Video"
  src="https://www.youtube.com/embed/IO_hDJYvyqQ"
  width="100%"
  height="352"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
/>

          </div>
        </section>
      </div>

    </div>
  );
}
