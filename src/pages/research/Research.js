import React from "react";
import "./Research.css";
import aboutImg from "../../images/about-img.jpg";
import texmin from "../../images/texmin-iitism.jpg";
import cosineBg from "../../images/cosine-bg.jpg";
import collab from "../../images/collab-institutes.jpg";

export default function Research() {
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
          <img src={aboutImg} alt="Research illustration" />
        </div>
      </section>

      {/* VISUAL PIPELINE */}
      <section className="research-section light slide-up">
        <h2>Research Pipeline</h2>

        <div className="pipeline">
          <div className="pipeline-step">
            <span>📡</span>
            <h4>Sensing & Data</h4>
            <p>UAVs, IoT devices, edge sensors</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <span>🧠</span>
            <h4>AI / ML Intelligence</h4>
            <p>Learning, prediction, optimization</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <span>☁️</span>
            <h4>Edge–Cloud Continuum</h4>
            <p>Distributed computation & control</p>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <span>🔐</span>
            <h4>Secure Decisions</h4>
            <p>Resource allocation & management</p>
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

      {/* STATS */}
      <section className="research-section light slide-up">
        <h2>Research at a Glance</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>5+</h3>
            <p>Active Research Areas</p>
          </div>
          <div className="stat-box">
            <h3>3+</h3>
            <p>Funded Projects</p>
          </div>
          <div className="stat-box">
            <h3>Multiple</h3>
            <p>National Collaborations</p>
          </div>
          <div className="stat-box">
            <h3>Ongoing</h3>
            <p>Industry-Relevant Deployments</p>
          </div>
        </div>
      </section>

      {/* GRANTS */}
      <section className="research-grants">
        <h2>Funded Projects & Grants</h2>

        <div className="grants-grid">
          <div className="grant-card">
            <img src={texmin} alt="AI Vision Mining" />
            <div className="grant-content">
              <h3>Low-resource AI Vision System for Mining</h3>
              <span>TEXMiN Foundation (DST TIH)</span>
            </div>
          </div>

          <div className="grant-card">
            <img src={cosineBg} alt="Lab Setup" />
            <div className="grant-content">
              <h3>Special Laboratory Setup Grant</h3>
              <span>IIT (ISM) Dhanbad</span>
            </div>
          </div>

          <div className="grant-card">
            <img src={collab} alt="Research Funding" />
            <div className="grant-content">
              <h3>Faculty Research Scheme Grant</h3>
              <span>IIT (ISM) Dhanbad</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
