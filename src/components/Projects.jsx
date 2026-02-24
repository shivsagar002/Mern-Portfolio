import ScrollReveal from "./ScrollReveal.jsx";
import { techIcons } from "@/lib/techIcons.js";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/projects.js";


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
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiGithub size={16} /> Repo
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
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
    <section id="projects" className="mb-16 relative">
      <div className="container mx-auto px-6">
        <div className="absolute left-[-2%] md:top-20 text-[15vw] md:text-[10rem] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none w-[100vw] overflow-hidden">
          Apps
        </div>
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Projects</span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
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
