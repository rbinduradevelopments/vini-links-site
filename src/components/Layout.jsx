import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="brand-name">Vincent J. Rigney</span>
          <span className="brand-tag">Blues · Rock ’n’ Roll · Soft Rock · Indie</span>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
            Home
          </NavLink>
          <NavLink to="/music" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
            Music
          </NavLink>
          <NavLink to="/links" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
            Links
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
            Contact
          </NavLink>
          <NavLink to="/gigs" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
            Gigs
          </NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Vincent J. Rigney
      </footer>
    </div>
  );
}
