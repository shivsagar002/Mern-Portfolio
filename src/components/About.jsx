import ScrollReveal from "./ScrollReveal.jsx";
import { techIcons } from "@/lib/techIcons.js";
import { FaCode, FaServer, FaRocket } from "react-icons/fa";

const About = () => {
  const marqueeItems = [...techIcons, ...techIcons];

  return (
    <section id="about" className="pb-24 md:pt-24 relative">
      <div className="container mx-auto px-6">
        <div className="absolute left-[-2%] md:top-20 text-[15vw] md:text-[10rem] font-black text-foreground/[0.03] select-none pointer-events-none uppercase leading-none w-[100vw] overflow-hidden">
          About
        </div>
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
              About Me
            </span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            Bridging <span className="gradient-text">Logic</span> with{" "}
            <span className="gradient-text">Innovation</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Main Narrative - Column 8 */}
              <div className="lg:col-span-7 space-y-6">
                <div className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
                  {/* Subtle background glow effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-500" />

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    My engineering journey is defined by a transition from
                    **structural rigidity to modern agility**. Having mastered
                    the foundational discipline of{" "}
                    <span className="text-foreground font-medium">
                      C++ and Java
                    </span>
                    , I developed a deep-seated intuition for memory management,
                    algorithmic efficiency, and Object-Oriented Design.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Today, I apply that "systems-first" mindset to the modern
                    web. I don't just ship features; I architect
                    **production-ready ecosystems**. By combining the speed of
                    high-level frameworks with the precision of low-level logic,
                    I deliver software that is as robust as it is intuitive.
                  </p>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-foreground font-semibold flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-orange-400"></span>
                      Philosophy:{" "}
                      <span className="gradient-text uppercase tracking-wider text-sm">
                        Reliability • Performance • Clarity
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights Grid - Column 5 */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="glass p-6 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all group">
                  <FaCode className="text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-foreground font-bold mb-2">
                    Algorithm Specialist
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise in DSA and OOP logic, ensuring optimized backends
                    and efficient data flow.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl border border-white/5 hover:border-orange-400/30 transition-all group">
                  <FaServer className="text-orange-400 text-2xl mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-foreground font-bold mb-2">
                    System Architect
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Designing scalable infrastructures that handle growth
                    without compromising on speed.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl border border-white/5 hover:border-green-400/30 transition-all group">
                  <FaRocket className="text-green-400 text-2xl mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-foreground font-bold mb-2">
                    Performance Driven
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizing every millisecond of the user journey, from
                    initial load to final interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full py-16 relative overflow-hidden group bg-background mt-10">
            {/* 1. Improved Section Header (Option 1) */}
            <div className="container mx-auto px-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/80">
                  Engineered With
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
              </div>
            </div>

            {/* 2. Optimized Infinite Marquee Container */}
            <div className="relative flex items-center">
              {/* Edge Overlays - Fixed z-index to allow interaction while providing the fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

              {/* The Scrolling Track */}
              <div className="flex animate-marquee whitespace-nowrap gap-6 hover:[animation-play-state:paused]">
                {/* Mapping twice for seamless loop */}
                {marqueeItems.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`${tech.label}-${i}`}
                      className="flex items-center gap-4 px-8 py-4 rounded-full glass border border-white/5 hover:border-white/20 transition-all duration-500 group/card relative flex-shrink-0 cursor-default"
                      style={{ "--icon-color": tech.color }}
                    >
                      {/* Dynamic Glow Aura */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-10 transition-opacity duration-500 blur-xl bg-[var(--icon-color)]" />

                      <div className="relative z-0 flex items-center gap-4">
                        <Icon
                          size={28}
                          style={{ color: tech.color }}
                          className="filter drop-shadow-[0_0_8px_var(--icon-color)] group-hover/card:scale-110 transition-transform duration-300"
                        />
                        <span className="text-sm font-medium tracking-wide text-muted-foreground group-hover/card:text-foreground transition-colors">
                          {tech.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
