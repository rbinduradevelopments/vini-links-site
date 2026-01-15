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
          href="https://music.youtube.com/channel/UCfSHSsIIbxkSopAnrPp-R_Q?si=jCJrD19_4_8xcUb8"
          target="_blank"
          rel="noreferrer"
        >
          YouTube Music
        </a>

        <a
          className="platform-card"
          href="https://music.amazon.co.uk/artists/B0C8RL76CT/vincent-j-rigney?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_56rv7KAFL7ZeA34FYSMnWI5kV"
          target="_blank"
          rel="noreferrer"
        >
          Amazon Music
        </a>

        <a
          className="platform-card"
          href="https://on.soundcloud.com/QtuHbT1QXuLn3z4kxN"
          target="_blank"
          rel="noreferrer"
        >
          SoundCloud
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
      </div>
    </div>
  );
}
