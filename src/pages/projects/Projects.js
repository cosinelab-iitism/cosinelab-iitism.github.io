import React from "react";
import "./Projects.css";
import {
  ongoingProjects,
  completedProjects,
} from "../../data/projectsData";

/* ===== COMPONENT ===== */

export default function Projects() {
  return (
    <main className="projects-page">
      {/* ONGOING */}
      <ProjectSection title="Ongoing Projects" projects={ongoingProjects} />

      {/* COMPLETED */}
      <ProjectSection
        title="Completed Projects"
        projects={completedProjects}
        light
      />
    </main>
  );
}

/* ===== REUSABLE SECTION ===== */

function ProjectSection({ title, projects, light }) {
  return (
    <section className={`project-section ${light ? "light" : ""}`}>
      <div className="section-inner">
        <h2>{title}</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <p className="project-funding">
                  <strong>Sponsor:</strong> {project.sponsor}
                </p>

                {/* <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div> */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
