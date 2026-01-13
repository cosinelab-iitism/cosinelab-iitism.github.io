import React from "react";
import { useParams, Link } from "react-router-dom";
import { getAllProjects } from "../../data/projectsData";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getAllProjects().find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="project-detail-page">
        <h2>Project not found</h2>
        <p>The requested project could not be located.</p>
        <Link to="/projects" className="btn-back">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      {/* TOP SECTION */}
      <section className="detail-grid">
        <div
          className="detail-image"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="image-overlay">
            <span className="project-badge">Research Project</span>
          </div>
        </div>

        <div className="detail-content">
          <h1>{project.title}</h1>

          <p className="detail-desc">{project.description}</p>

          <div className="detail-meta">
            <p>
              <strong>Funding Agency:</strong> {project.funding}
            </p>
            {project.duration && (
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
            )}
            {project.status && (
              <p>
                <strong>Status:</strong> {project.status}
              </p>
            )}
          </div>

          <div className="detail-tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <Link to="/projects" className="btn-back">
            ← Back to Projects
          </Link>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="detail-section">
        <h2>Project Objectives</h2>
        <p>
          This project aims to address key challenges in modern intelligent
          networking systems by focusing on scalable, secure, and energy-aware
          solutions. The primary objectives include:
        </p>

        <ul className="detail-list">
          <li>
            Designing intelligent algorithms suitable for resource-constrained
            environments.
          </li>
          <li>
            Ensuring security and trust in distributed network operations.
          </li>
          <li>
            Reducing computational and energy overhead at the network edge.
          </li>
          <li>
            Validating solutions through simulations and real-world testbeds.
          </li>
        </ul>
      </section>

      {/* METHODOLOGY */}
      <section className="detail-section light">
        <h2>Methodology & Approach</h2>
        <p>
          The project follows a layered research methodology combining
          theoretical modeling, algorithm design, simulation-based validation,
          and experimental evaluation.
        </p>
        <p>
          Machine learning models are deployed across edge and cloud layers to
          enable adaptive decision-making under dynamic network conditions,
          while lightweight security mechanisms ensure robustness and
          reliability.
        </p>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="detail-section">
        <h2>Expected Outcomes & Impact</h2>
        <p>
          The outcomes of this project are expected to contribute significantly
          to both academic research and real-world applications.
        </p>

        <div className="outcome-grid">
          <div className="outcome-card">
            <h3>📄 Publications</h3>
            <p>
              High-quality journal and conference publications in IEEE venues.
            </p>
          </div>
          <div className="outcome-card">
            <h3>🧠 Algorithms</h3>
            <p>Novel distributed intelligence and optimization algorithms.</p>
          </div>
          <div className="outcome-card">
            <h3>🧪 Prototypes</h3>
            <p>Experimental prototypes and proof-of-concept implementations.</p>
          </div>
          <div className="outcome-card">
            <h3>🌍 Impact</h3>
            <p>
              Applications in smart mining, UAV systems, and intelligent IoT.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
