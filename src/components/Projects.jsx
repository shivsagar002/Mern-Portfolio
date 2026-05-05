import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal.jsx";
import { techIcons } from "@/lib/techIcons.jsx";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/projects.js";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform values for 3D effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Set CSS variables for spotlight
    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered && window.innerWidth > 768 ? rotateX : 0,
        rotateY: isHovered && window.innerWidth > 768 ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col h-full w-full rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.15), transparent 40%)`,
        }}
      />

      <div className="relative flex h-full flex-col p-6 z-10">
        {/* Project Image Container */}
        <div className="relative h-56 w-full overflow-hidden rounded-xl border border-border/50 group-hover:border-primary/40 transition-all duration-500 bg-muted/20">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Subtle Gradient Overlay - Adjusted for clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
          
          {/* Quick Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
             {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <SiGithub size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 flex flex-1 flex-col">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            {project.badge && (
              <span className="relative overflow-hidden px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded-full glass border border-primary/20 text-primary bg-primary/5">
                {project.badge}
                {/* Shine Effect */}
                <span className="absolute inset-0 -translate-x-full animate-[shine_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
            )}
          </div>
          
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => {
              const tech = techIcons.find(
                (ti) => ti.label.toLowerCase() === t.toLowerCase()
              );
              if (!tech) return (
                <span key={t} className="px-2 py-1 text-[10px] font-medium rounded-md bg-muted/50 border border-border/50 text-muted-foreground">
                  {t}
                </span>
              );
              const Icon = tech.icon;
              return (
                <div
                  key={t}
                  className="group/tech relative flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <Icon size={12} color={tech.color} className="transition-transform group-hover/tech:scale-110" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground group-hover/tech:text-foreground">
                    {t}
                  </span>
                </div>
              );
            })}
            {project.tech.length > 3 && (
              <div className="flex items-center justify-center px-2.5 py-1 rounded-full bg-muted/30 border border-border/50">
                <span className="text-[10px] font-bold text-muted-foreground">
                  +{project.tech.length - 3}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-10 md:pt-24 mb-16 relative">
      <div className="container mx-auto px-6">
        <div className="absolute left-[-2%] md:top-20 text-[15vw] md:text-[10rem] font-black text-foreground/[0.03] select-none pointer-events-none uppercase leading-none w-[100vw] overflow-hidden">
          My Apps
        </div>
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
              Projects
            </span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

