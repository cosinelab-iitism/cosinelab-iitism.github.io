import texmin from "../images/texmin-iitism.jpg";
import cosineBg from "../images/cosine-bg.jpg";
import aboutImg from "../images/about-img.jpg";
import collab from "../images/collab-institutes.jpg";

// Centralized project data with slugs for project detail routing
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const ongoingProjects = [
  {
    title: "Low-resource AI Vision System for Mining",
    description:
      "Development of a low-resource AI-based vision system for smart mining environments, focusing on safety monitoring and automation under constrained edge resources.",
    funding: "TEXMiN Foundation (DST TIH)",
    tags: ["AI/ML", "Computer Vision", "Mining", "Edge Computing"],
    image: texmin,
  },
  {
    title: "Secure Distributed Intelligence for UAV-IoT Networks",
    description:
      "Designing secure and energy-efficient distributed intelligence frameworks for UAV-assisted IoT networks in dynamic environments.",
    funding: "IIT (ISM) Dhanbad",
    tags: ["UAV-IoT", "Security", "Distributed Intelligence"],
    image: cosineBg,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export const completedProjects = [
  {
    title: "Special Laboratory Setup for Edge Intelligence",
    description:
      "Establishment of a dedicated research laboratory for edge intelligence, networking, and AI experimentation.",
    funding: "IIT (ISM) Dhanbad",
    tags: ["Lab Infrastructure", "Edge Computing"],
    image: aboutImg,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export const proposedProjects = [
  {
    title: "Digital Twin Enabled Smart Mining Networks",
    description:
      "Proposed research integrating digital twins with edge-cloud intelligence for predictive monitoring and optimization in smart mining systems.",
    funding: "Proposed / Under Review",
    tags: ["Digital Twin", "Smart Mining", "Edge–Cloud"],
    image: collab,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export function getAllProjects() {
  return [...ongoingProjects, ...completedProjects, ...proposedProjects];
}
