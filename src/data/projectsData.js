import texmin from "../images/texmin-iitism.jpg";
import cosineBg from "../images/cosine-bg.jpg";
import tihan from "../images/tihan-logo.png";
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
    title: "Improving The Performance of IEEE 802.11ah UAV Networks In Mission-Critical Defense Environments",
    description:
      "Building a comprehensive framework for enhancing the performance of IEEE 802.11ah UAV networks in mission-critical defense environments.",
    funding: "NMICPS TiHAN-IIT Hyderabad",
    image: tihan,
  },
  {
    title: "Revolutionizing Autonomous Navigation through Occlusion-Resilient Autonomous Driving Using Intelligent Perception Systems",
    description:
      "Developing occlusion-resilient autonomous driving algorithms using intelligent perception systems.",
    funding: "IIT (ISM) Dhanbad (Special Collaborative Grant)",
    image: cosineBg,
  },
  {
    title: "Energy-Efficient Federated Deep Reinforcement Learning for Multi-UAV Edge Intelligence Using Tiny Models",
    description:
      "Developing a FRL framework - algorithms and prototype - for multi-UAV edge intelligence.",
    funding: "IIT (ISM) Dhanbad (Seed Grant / FRS)",
    image: cosineBg,
  },
  {
    title: "AI-Powered Vision Systems for Low-light and Low-visibility Underground Mining Environments",
    description:
      "Creating a low-resource AI vision system for underground mining, designed to operate in low-light and low-visibility conditions.",
    funding: "TEXMiN Foundation (DST TIH)",
    image: texmin,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export const completedProjects = [
  {
    title: "Special Lab Establishment grant",
    description:
      "Establishment of COSINE lab, a dedicated research laboratory for edge intelligence for future and secure networking.",
    funding: "IIT (ISM) Dhanbad (Special Grant)",
    image: cosineBg,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export const proposedProjects = [
  {
    title: "Digital Twin Enabled Smart Mining Networks",
    description:
      "Proposed research integrating digital twins with edge-cloud intelligence for predictive monitoring and optimization in smart mining systems.",
    funding: "Proposed / Under Review",
    image: collab,
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export function getAllProjects() {
  return [...ongoingProjects, ...completedProjects, ...proposedProjects];
}
