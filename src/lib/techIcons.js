import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTypescript, SiPython, SiDocker, SiGit, SiGithub,
  SiAmazonwebservices, SiPostgresql, SiMysql, SiTailwindcss,
  SiNextdotjs, SiFramer,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from 'react-icons/tb';

export const techIcons = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiExpress, label: "Express", color: "#7F7F7F" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiGithub, label: "GitHub", color: "#808080" },
  { icon: TbBrandCpp, label: "Cpp", color: "#0059b8" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  // { icon: SiNextdotjs, label: "Next.js", color: "#DCDCDC" },
  // { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  // { icon: SiPython, label: "Python", color: "#3776AB" },
  // { icon: FaJava, label: "Java", color: "#ED8B00" },
  // { icon: SiDocker, label: "Docker", color: "#2496ED" },
  // { icon: SiAmazonwebservices, label: "AWS", color: "#FF9900" },
  // { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  // { icon: SiFramer, label: "Framer Motion", color: "#0055FF" },
];

export const getTechByLabel = (label) =>
  techIcons.find((t) => t.label.toLowerCase() === label.toLowerCase());
