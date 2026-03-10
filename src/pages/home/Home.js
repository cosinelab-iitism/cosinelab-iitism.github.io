// Home.jsx
import React from "react";
import "./Home.css";
import Sponsors from "../../components/Sponsors";
import researchareas from "../../images/research-areas.jpg";
import NewsTicker from "../../components/NewsTicker";

export default function Home() {
  return (
    <main className="home-page">
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-layout">
            {/* Left column – text */}
            <div className="about-content">
              <h2 className="about-title">About Us</h2>

              <p className="about-text">
                We are the{" "}
                <strong>
                  Computing for Secure and Intelligent Networks (COSINE) Lab
                </strong>
                , led by <strong>Dr. Tamoghna Ojha</strong> at the Department of
                Mathematics and Computing, IIT (ISM) Dhanbad. Our work focuses
                on exploiting
                <strong>
                  {" "}
                  “distributed intelligence” in future IoT networks
                </strong>
                , especially in resource-constrained environments with
                challenging network dynamics, enabling energy-efficient and
                secure decisions for resource allocation and management.
              </p>

              <p className="about-text">
                Our current research explores the application of{" "}
                <strong>AI/ML</strong> in <strong>UAV-IoT networks</strong>,{" "}
                <strong>Edge Computing</strong>,{" "}
                <strong>Non-terrestrial Networks (NTNs)</strong>,{" "}
                <strong>Digital Twin</strong>, {" "}
                <strong>secure metaverse</strong>, and{" "}
                <strong>edge-cloud-continuum</strong>.  We are particularly interested in developing novel algorithms and 
                architectures for energy-efficient, secure, and scalable AI-driven intelligence in resource-constrained 
                and challengingsettings such as underground mining, mission-critical defense, and autonomous navigation.
              </p>

              <p className="about-text">
                We have recently secured multiple research grants — funded by <strong>JCSTI, TiHAN, TEXMiN Foundation</strong>, 
                and <strong>special grants from IIT (ISM) Dhanbad</strong> — to support our research on edge intelligence for future and secure networking.
              </p>
            </div>

            {/* Right column – image */}
            <div className="about-image-wrapper">
              <img src={researchareas} alt="COSINE Lab" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section (below About Us) */}
      <section className="recruit-section">
        <div className="recruit-container">
          <div className="recruit-tag-row">
            <span className="recruit-tag">We are recruiting</span>
          </div>

          <p className="recruit-text">
            <strong>PhD position</strong> available at our lab in the Department
            of Mathematics and Computing, IIT (ISM) Dhanbad. We are looking for
            self-motivated candidates interested working in areas such as{" "}
            <strong>AI/ML</strong>, <strong>UAV-IoT networks</strong>,{" "}
            <strong>Edge computing</strong>,{" "}
            <strong>Non-terrestrial networks</strong>,{" "}
            <strong>digital twin</strong>, {" "}
            <strong>secure metaverse</strong>, and{" "}
            <strong>edge-cloud-continuum</strong>.
          </p>

          <p className="recruit-text">
            Interested candidates need to email their latest CV to{" "}
            <a href="mailto:tamoghnaojha@iitism.ac.in">
              tamoghnaojha@iitism.ac.in
            </a>
            . Eligibility: <strong>M.Tech. in Computer Science</strong> or{" "}
            <strong>M.Tech/M.Sc. in Mathematics &amp; Computing</strong>. More
            details:{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://www.iitism.ac.in/phdadmission" target="_blank" rel="noreferrer">
              in this link
            </a>
            .
          </p>
        </div>
      </section>

      <div className="sponsors-wrapper">
        <Sponsors />
      </div>

      <div className="news-section">
        <NewsTicker />
      </div>
    </main>
  );
}
