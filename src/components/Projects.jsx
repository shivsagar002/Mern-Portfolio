import ScrollReveal from "./ScrollReveal.jsx";
import { techIcons } from "@/lib/techIcons.js";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import projectTaskMgmt from "@/assets/project-task-mgmt.jpg";
import projectChat from "@/assets/project-chat.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectDevops from "@/assets/project-devops.jpg";

const projects = [
  {
    title: "Task Management System",
    image: projectTaskMgmt,
    description:
      "Scalable team collaboration with RESTful APIs and secure auth.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat Platform",
    image: projectChat,
    description: "Messaging with WebSocket, real-time presence & encryption.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Dashboard",
    image: projectEcommerce,
    description: "Admin panel with analytics, inventory & payment integration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "DevOps CI/CD Pipeline",
    image: projectDevops,
    description:
      "Automated build, test & deploy with containerized microservices.",
    tech: ["Docker", "AWS", "Node.js", "Git", "GitHub"],
    github: "#",
    live: "#",
  },
];

const FlipCard = ({ project }) => {
  return (
    <div className="flip-card h-[320px] sm:h-[340px]">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front glass rounded-2xl neon-border overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-lg font-bold text-foreground">
              {project.title}
            </h3>
            <div className="flex gap-1.5 mt-2">
              {project.tech.map((t) => {
                const tech = techIcons.find(
                  (ti) => ti.label.toLowerCase() === t.toLowerCase(),
                );
                if (!tech) return null;
                const Icon = tech.icon;
                return (
                  <Icon
                    key={t}
                    size={16}
                    color={tech.color}
                    className="opacity-70"
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back glass rounded-2xl neon-border p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => {
                const tech = techIcons.find(
                  (ti) => ti.label.toLowerCase() === t.toLowerCase(),
                );
                if (!tech)
                  return (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  );
                const Icon = tech.icon;
                return (
                  <span
                    key={t}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    <Icon size={12} color={tech.color} /> {t}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4 pt-3 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiGithub size={16} /> Repo
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={16} /> Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Selected projects demonstrating scalable architecture and
            production-grade interfaces.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <FlipCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
