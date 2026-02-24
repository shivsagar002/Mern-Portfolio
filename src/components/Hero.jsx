import { motion } from "framer-motion";
import { techIcons } from "@/lib/techIcons.js";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import HireMeModal from "./HireMeModal.jsx";

const floatingPositions = [
  { x: "12%", y: "15%", delay: 0.2 },
  { x: "28%", y: "8%",  delay: 1.5 },
  { x: "72%", y: "10%", delay: 0.8 },
  { x: "88%", y: "20%", delay: 0.4 },
  { x: "6%",   y: "50%", delay: 1.2 },
  { x: "92%",  y: "48%", delay: 0.6 },
  { x: "15%",  y: "80%", delay: 1.8 },
  { x: "35%",  y: "90%", delay: 0.3 },
  { x: "65%",  y: "85%", delay: 1.0 },
  { x: "82%",  y: "75%", delay: 0.7 },
];

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--page-secondary))] to-[hsl(var(--page-primary))]">
      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Floating tech icons */}
      {floatingPositions.map((pos, i) => {
        const tech = techIcons[i % techIcons.length];
        const Icon = tech.icon;
        return (
          <motion.div
            key={i}
            className="absolute md:block"
            style={{ left: pos.x, top: pos.y }}
            animate={{ y: [0, -15, 5, 0], rotate: [0, 3, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: pos.delay, ease: "easeInOut" }}

          >
            <div className="p-3 glass rounded-xl hover-glow transition-all duration-300 hover:scale-110">
              <Icon size={28} color={tech.color} />
            </div>
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
          Full-Stack Developer
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          I Build <span className="gradient-text">Scalable, Performant,</span> and Production-Ready Software.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Full-Stack Developer specializing in modern web technologies, clean architecture, and high-performance systems.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => setModalOpen(true)}
            className="px-8 py-3 rounded-lg gradient-bg text-primary-foreground font-semibold hover:scale-105 active:scale-95 transition-transform duration-200 animate-pulse-glow">
            Hire Me
          </button>
          <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg neon-border text-foreground font-semibold hover:scale-105 active:scale-95 transition-all duration-200">
            My Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="text-muted-foreground animate-scroll-indicator" size={28} />
      </motion.div>

      <HireMeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Hero;
