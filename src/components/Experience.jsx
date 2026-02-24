import ScrollReveal from "./ScrollReveal.jsx";
import {
  Briefcase,
  Award,
  GraduationCap,
  Star,
  ShieldCheck,
  Zap,
  ExternalLink,
} from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { experiences } from "../lib/experiences.js";
import { achievements } from "../lib/achievements.js";

// const AchievementCard = ({ achievement, index }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });
//   const Icon = achievement.icon;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30, scale: 0.9 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
//       whileHover={{ scale: 1.05, y: -5 }}
//       className="glass rounded-xl p-6 text-center neon-border group cursor-default relative overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(circle at center, ${achievement.color}10, transparent 70%)`,
//         }}
//       />
//       <motion.div
//         whileHover={{ rotate: [0, -10, 10, -5, 0] }}
//         transition={{ duration: 0.5 }}
//       >
//         <Icon
//           size={32}
//           className="mx-auto mb-3 transition-all duration-300"
//           style={{ color: achievement.color }}
//         />
//       </motion.div>
//       <p className="text-sm font-medium relative z-10">{achievement.text}</p>
//       <div className="flex justify-center mt-2 gap-0.5">
//         {[...Array(3)].map((_, i) => (
//           <Star
//             key={i}
//             size={10}
//             className="text-primary/40 group-hover:text-primary transition-colors duration-300"
//             fill="currentColor"
//             style={{ transitionDelay: `${i * 100}ms` }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
    >
      {/* Permanent subtle glow border */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${achievement.color}, transparent, ${achievement.color}40)`,
        }}
      />

      <div className="relative h-full bg-[#0d1117]/90 backdrop-blur-md border border-white/5 rounded-xl p-5 flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div
              className="p-2.5 rounded-lg bg-white/5 border border-white/10"
              style={{ color: achievement.color }}
            >
              <Icon size={24} />
            </div>
            <ExternalLink
              size={16}
              className="text-white/20 group-hover:text-white/50 transition-colors"
            />
          </div>

          <h4 className="text-lg font-bold text-white mb-1">
            {achievement.title}
          </h4>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3 opacity-80"
            style={{ color: achievement.color }}
          >
            {achievement.subtitle}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {achievement.description}
          </p>
        </div>

        {/* Footer decoration */}
        <div className="flex items-center gap-2 mt-5">
          <div className="flex gap-0.5">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className="text-white/10 group-hover:text-yellow-500 transition-colors"
                fill="currentColor"
              />
            ))}
          </div>
          <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-white/10 transition-colors" />
        </div>

        {/* Subtle internal glow */}
        <div
          className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: achievement.color }}
        />
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const isWork = exp.type === "work";

  return (
    <div className="relative pl-8 sm:pl-12 pb-16 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent group-last:h-12" />

      {/* Node Icon */}
      <div
        className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background z-10 flex items-center justify-center transition-all duration-500 ${
          isWork
            ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            : "bg-zinc-800 border-zinc-700"
        }`}
      >
        {isWork ? (
          <Zap size={10} className="text-black" />
        ) : (
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
        )}
      </div>

      <ScrollReveal delay={index * 0.1}>
        <div
          className={`glass rounded-2xl p-6 md:p-8 border border-white/5 transition-all duration-500 hover:border-cyan-500/30 relative overflow-hidden ${
            !isWork && "opacity-70 grayscale-[0.5]"
          }`}
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all duration-700" />

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] md:text-xs mb-2 tracking-widest uppercase">
                {isWork ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                {exp.period}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                {isWork ? exp.role : exp.course}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium mt-1 italic leading-tight">
                {isWork ? exp.company : exp.college}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 mt-2">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <ShieldCheck
                    size={14}
                    className="mt-1 flex-shrink-0 text-cyan-500/60 group-hover/item:text-cyan-400 transition-colors"
                  />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover/item:text-foreground/90 transition-colors">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="absolute left-[-2%] md:top-20 text-[15vw] md:text-[10rem] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none">
          History
        </div>
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
              Career Path
            </span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-32 overflow-hidden">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Achievements */}
        {/* Updated Left-Shifted Small Heading */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Achievements</span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
      </ScrollReveal>

      {/* Grid that scales from 1 to 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <AchievementCard key={a.title} achievement={a} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;
