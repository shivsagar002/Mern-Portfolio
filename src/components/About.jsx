import ScrollReveal from "./ScrollReveal.jsx";
import { techIcons } from "@/lib/techIcons.js";

const About = () => {
  const marqueeItems = [...techIcons, ...techIcons];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Bridging <span className="gradient-text">Foundational Logic</span> with <span className="gradient-text">Modern Innovation</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass rounded-2xl p-6 sm:p-8 mb-16 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Software Engineer driven by the challenge of solving complex problems through clean, efficient code. My technical journey began with the rigorous architectural discipline of C++ and Java, providing me with a deep understanding of Data Structures, Algorithms, and Object-Oriented Programming.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, I leverage that foundational depth to build high-performance applications across the full stack. I don't just write code; I architect systems that are scalable by design and resilient in production. Whether I am optimizing backend efficiency or crafting intuitive user interfaces, my focus remains on delivering professional-grade software that meets the highest standards of performance.
            </p>
            <p className="text-foreground font-medium">
              My development philosophy:{" "}
              <span className="gradient-text">Build reliable systems. Optimize performance. Prioritize clarity.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl font-bold mb-8">Technical Stack</h3>
        </ScrollReveal>

        {/* Infinite Marquee - bigger cards */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="marquee-track">
            {marqueeItems.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.label}-${i}`}
                  className="flex flex-col items-center justify-center gap-3 w-[200px] h-[140px] mx-3 rounded-2xl glass neon-border hover-lift cursor-default group flex-shrink-0"
                >
                  <Icon
                    size={48}
                    color={tech.color}
                    className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_var(--tw-shadow-color)]"
                    style={{ "--tw-shadow-color": tech.color }}
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-mono whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
