function App() {
  return (
    <div className="app">
      <div className="card">
        <img
          className="avatar"
          src="/vini-placeholder.jpg" // replace with real image file in /public
          alt="Vincent J. Rigney"
        />

        <h1 className="artist-name">Vincent J. Rigney</h1>
        <p className="tagline">Blues · Rock ’n’ Roll · Soft Rock · Indie</p>

        <div className="links">
          <a
            className="link-button link-youtube"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Listen on YouTube
          </a>

          <a
            className="link-button link-spotify"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Listen on Spotify
          </a>

          <a
            className="link-button link-ytmusic"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Listen on YouTube Music
          </a>

          <a
            className="link-button link-website"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website (Home)
          </a>

          <a
            className="link-button link-instagram"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="link-button link-facebook"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            className="link-button link-twitter"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Twitter / X
          </a>

          <a
            className="link-button link-email"
            href="mailto:VJREntertainment@gmail.com"
          >
            Email Vini
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
