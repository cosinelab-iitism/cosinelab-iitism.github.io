import React from "react";
import "./Contact.css";
import tamoghna from "../../images/tamoghna.jpg";

export default function Contact() {
  return (
    <main className="contact-page">
      {/* CONTACT CARDS */}
      <section className="contact-section">
        <h2>Get in Touch</h2>

        <div className="contact-card-grid">
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <h3>Address</h3>
            <p>
              COSINE Lab <br />
              Department of Mathematics and Computing <br />
              IIT (ISM) Dhanbad, Jharkhand, India
            </p>
          </div>

          <div className="contact-card">
            <span className="contact-icon">✉️</span>
            <h3>Email</h3>
            <p>
              <a href="mailto:cosinelab@iitism.ac.in">cosinelab@iitism.ac.in</a>
            </p>
          </div>

          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <h3>Phone</h3>
            <p>+91-XXX-XXX-XXXX</p>
          </div>
        </div>
      </section>

      {/* CONTACT PERSON */}
      {/* PRIMARY CONTACT */}
      <section className="contact-section light">
        <div className="primary-contact-card">
          <div className="primary-avatar">
            <img src={tamoghna} alt="Dr. Tamoghna Ojha" />
          </div>

          <div className="primary-content">
            <span className="section-label">Primary Contact</span>

            <h2>Dr. Tamoghna Ojha</h2>

            <p className="primary-role">Principal Investigator, COSINE Lab</p>

            <p className="primary-desc">
              For research collaborations, student opportunities, or academic
              inquiries, please feel free to reach out via email. We welcome
              discussions on joint research, funded projects, and graduate
              supervision.
            </p>

            <div className="primary-actions">
              <a href="mailto:cosinelab@iitism.ac.in" className="primary-btn">
                📧 Email
              </a>

              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                🎓 Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-section">
        <h2>Find Us</h2>

        <div className="map-container">
          <iframe
            title="IIT ISM Dhanbad Map"
            src="https://www.google.com/maps?q=IIT%20ISM%20Dhanbad&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
