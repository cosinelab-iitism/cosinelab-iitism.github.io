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
              GJLT Building, 1st floor <br />
              IIT (ISM) Dhanbad, Jharkhand, India
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:tamoghnaojha@iitism.ac.in">tamoghnaojha@iitism.ac.in</a>
            </p>
          </div>

          <div className="contact-card map-card">
            <h3>Find Us</h3>
            <div className="map-container">
              <iframe
                title="IIT ISM Dhanbad Map"
                src= "https://www.google.com/maps?q=IIT%20ISM%20Dhanbad&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
