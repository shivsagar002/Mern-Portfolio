import ScrollReveal from "./ScrollReveal.jsx";
import { Briefcase, Award, Trophy, Code, Cloud, GitBranch, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Tech Company",
    period: "2024 – Present",
    points: [
      "Engineered scalable backend services serving 200+ users",
      "Improved performance by 30% through database optimization",
      "Designed secure authentication modules",
      "Collaborated using Agile methodology",
    ],
  },
  {
    type: "gap",
    label: "Career Transition",
    period: "Mid 2024",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 – 2024",
    points: [
      "Built production-ready web applications for clients",
      "Designed REST APIs with proper authentication flows",
      "Deployed containerized applications on AWS",
      "Maintained 100% client satisfaction rate",
    ],
  },
];

const achievements = [
  { icon: Cloud, text: "AWS Certified Cloud Practitioner", color: "hsl(var(--primary))" },
  { icon: Trophy, text: "Hackathon Winner", color: "hsl(var(--accent))" },
  { icon: Code, text: "500+ DSA Problems Solved", color: "hsl(var(--secondary))" },
  { icon: GitBranch, text: "Open-Source Contributor", color: "hsl(var(--primary))" },
];

const AchievementCard = ({ achievement, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-xl p-6 text-center neon-border group cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${achievement.color}10, transparent 70%)` }}
      />
      <motion.div whileHover={{ rotate: [0, -10, 10, -5, 0] }} transition={{ duration: 0.5 }}>
        <Icon size={32} className="mx-auto mb-3 transition-all duration-300" style={{ color: achievement.color }} />
      </motion.div>
      <p className="text-sm font-medium relative z-10">{achievement.text}</p>
      <div className="flex justify-center mt-2 gap-0.5">
        {[...Array(3)].map((_, i) => (
          <Star key={i} size={10} className="text-primary/40 group-hover:text-primary transition-colors duration-300" fill="currentColor" style={{ transitionDelay: `${i * 100}ms` }} />
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-2xl mb-20 pl-8 sm:pl-10">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => {
            if (exp.type === "gap") {
              return (
                <ScrollReveal key={`gap-${i}`} delay={i * 0.15}>
                  <div className="relative py-8">
                    <div className="absolute left-[-20px] sm:left-[-16px] top-0 bottom-0 w-px border-l border-dashed border-muted-foreground/40" />
                    <div className="absolute left-[6.5px] sm:left-[9.5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-muted-foreground/40 bg-background" />
                    <p className="text-xs font-mono text-muted-foreground/60 italic ml-4">{exp.label} · {exp.period}</p>
                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={exp.role} delay={i * 0.15}>
                <div className="relative pb-12 last:pb-0">
                  <div className="absolute left-[-20px] sm:left-[-16px] top-1.5 w-3.5 h-3.5 rounded-full gradient-bg glow-primary border-2 border-background" />
                  <div className="glass rounded-xl p-5 neon-border ml-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} className="text-primary" />
                      <span className="text-xs font-mono text-primary">{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Achievements */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-8">
            <span className="gradient-text flex items-center gap-2">
              <Award size={24} /> Achievements
            </span>
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <AchievementCard key={a.text} achievement={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
