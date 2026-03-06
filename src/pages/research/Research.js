import React, { useState, useEffect } from "react";
import "./Research.css";
import research1 from "../../images/research1.png";
import research2 from "../../images/research2.png";
import research3 from "../../images/research3.png";
import labfacilty from "../../images/lab-facility.png";

export default function Research() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [research1, research2, research3, labfacilty];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="research-page">
      {/* OVERVIEW */}
      <section className="research-overview">
        <div className="overview-content">
          <h2>Research Overview</h2>
          <p>
            The{" "}
            <strong>
              Computing for Secure and Intelligent Networks (COSINE) Lab
            </strong>
            , led by <strong>Dr. Tamoghna Ojha</strong> at IIT (ISM) Dhanbad,
            focuses on exploiting <strong>distributed intelligence</strong> for
            next-generation IoT systems.
          </p>
          <p>
            Our research targets{" "}
            <strong>energy-efficient, secure, and scalable intelligence</strong>
            in resource-constrained and dynamically changing network
            environments.
          </p>
        </div>

        <div className="overview-image">
          <div className="slideshow-container">
            <button className="slide-button prev" onClick={prevSlide}>
              ❮
            </button>
            <img
              src={slides[currentSlide]}
              alt={`Research slide ${currentSlide + 1}`}
            />
            <button className="slide-button next" onClick={nextSlide}>
              ❯
            </button>
          </div>
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH DOMAINS */}
      <section className="research-section fade-in">
        <h2>Key Research Domains</h2>

        <div className="domain-grid">
          <div className="domain-card">
            <span>🚁</span>
            <h3>UAV-IoT Networks</h3>
            <p>Autonomous aerial networking under constraints</p>
          </div>

          <div className="domain-card">
            <span>⚡</span>
            <h3>Edge Computing</h3>
            <p>Low-latency distributed intelligence</p>
          </div>

          <div className="domain-card">
            <span>🛰️</span>
            <h3>Non-Terrestrial Networks</h3>
            <p>Satellite and hybrid communication systems</p>
          </div>

          <div className="domain-card">
            <span>🧩</span>
            <h3>Digital Twins</h3>
            <p>Virtual replicas for prediction & control</p>
          </div>

          <div className="domain-card">
            <span>🔒</span>
            <h3>Secure Networking</h3>
            <p>Trust, privacy, and resilience</p>
          </div>

          <div className="domain-card">
            <span>🌐</span>
            <h3>Edge–Cloud Continuum</h3>
            <p>Seamless compute orchestration</p>
          </div>
        </div>
      </section>
    </main>
  );
}
