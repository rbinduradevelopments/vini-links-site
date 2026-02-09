import React from "react";
import { FaMapMarkerAlt, FaClock, FaTicketAlt, FaPhoneAlt } from "react-icons/fa";

export default function Gigs() {
  const upcoming = [
    {
      date: "Saturday 18 April 2026",
      venue: "The Cons Club",
      addressLines: ["Cottingham Road", "Corby", "NN17 1SZ"],
      time: "Show time: 9pm",
      admission: "Free Admission",
      phoneDisplay: "01536 203711",
      phoneTel: "01536203711",
    },
  ];

  const past = []; // later you can add past gigs here

  return (
    <div className="page">
      <h2 className="section-title center">Gigs</h2>
      <p className="muted center">
        Upcoming shows and recent performances.
      </p>

      {/* Upcoming */}
      <div className="gigs-wrap">
        <h3 className="gigs-heading">Upcoming</h3>

        {upcoming.length === 0 ? (
          <div className="gigs-empty">
            No upcoming gigs yet — check back soon.
          </div>
        ) : (
          <div className="gigs-grid">
            {upcoming.map((gig, idx) => (
              <div className="gig-card" key={idx}>
                <div className="gig-top">
                  <div>
                    <div className="gig-date">{gig.date}</div>
                    <div className="gig-venue">{gig.venue}</div>
                  </div>

                  <span className="gig-badge">Upcoming</span>
                </div>

                <div className="gig-details">
                  <div className="gig-row">
                    <FaMapMarkerAlt className="gig-icon" />
                    <div>
                      {gig.addressLines.map((line, i) => (
                        <div key={i} className="gig-line">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="gig-row">
                    <FaTicketAlt className="gig-icon" />
                    <div className="gig-line">{gig.admission}</div>
                  </div>

                  <div className="gig-row">
                    <FaClock className="gig-icon" />
                    <div className="gig-line">{gig.time}</div>
                  </div>

                  <div className="gig-row">
                    <FaPhoneAlt className="gig-icon" />
                    <a className="gig-phone" href={`tel:${gig.phoneTel}`}>
                      {gig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="gig-actions">
                  <a
                    className="gig-btn gig-btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${gig.venue}, ${gig.addressLines.join(", ")}`
                    )}`}
                  >
                    Open in Maps
                  </a>

                  <a className="gig-btn gig-btn-primary" href={`tel:${gig.phoneTel}`}>
                    Call venue
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past (optional now, ready for later) */}
        <h3 className="gigs-heading" style={{ marginTop: "1.2rem" }}>
          Past gigs
        </h3>

        {past.length === 0 ? (
          <div className="gigs-empty">
            Past gigs will be added here soon.
          </div>
        ) : (
          <div className="gigs-grid">
            {past.map((gig, idx) => (
              <div className="gig-card" key={idx}>
                {/* later */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
