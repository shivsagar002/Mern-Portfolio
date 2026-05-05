import projectEditor from "@/assets/project-editor.jpg";
import intervuex from "@/assets/intervuex.png";
import northerntours from "@/assets/northerntours.png";
import usict from "@/assets/usict_erp.png";

export const projects = [
  {
    title: "Northern Tours",
    image: northerntours,
    description: "A custom-built travel and tourism platform developed as a freelance solution for Northern Tours. Features an intuitive booking flow, dynamic itinerary management, and a high-conversion UI designes.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/northerntours/Northerntours",
    live: "https://northerntours.in",
    badge: "Freelance",
  },
  {
    title: "IntervueX",
    image: intervuex,
    description: "A full-stack, real-time AI integrated interview platform featuring secure authentication, Dynamic Interviews using Native AI, Advanced Analytics and high-performance audio/video streaming. Engineered for low-latency communication and a seamless candidate evaluation experience.",
    tech: ["Gemini", "MongoDB", "Express", "React", "Node.js"],
    github: "",
    live: "https://intervuex.shivsagar.tech/",
    badge:"Native AI"
  },
  {
    title: "USICT ERP",
    image: usict,
    description: "A robust institutional management system featuring comprehensive Role-Based Access Control (RBAC). Designed with three distinct portals—Admin, Teacher, and Student—to streamline academic workflows while maintaining strict data isolation and secure authentication protocols.",
    tech: ["Express", "MongoDB", "Node.js","JavaScript"],
    github: "https://github.com/shivsagar002/USICT_ERP",
    live: "https://usict-erp.onrender.com/",
  },
  {
    title: "Image Editor",
    image: projectEditor,
    description: "A lightweight, responsive Easy Image Editor built entirely with Vanilla JavaScript, featuring real-time filters and image transformations for a seamless browser-based editing experience.",
    tech: ["JavaScript"],
    github: "https://github.com/shivsagar002/imgeditor",
    live: "https://imgeditor.shivsagar.tech/",
  },
];