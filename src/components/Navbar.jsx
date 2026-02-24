import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);

      // Detect active section
      let current = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <div
          className="scroll-progress h-full"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => handleClick("#home")} className="text-xl font-bold gradient-text font-mono">
            &lt;Shiv /&gt;
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className={`text-base font-semibold transition-all duration-200 relative pb-1 ${
                    activeSection === l.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {activeSection === l.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 gradient-bg rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden glass border-t border-border"
    >
      <ul className="flex flex-col items-center gap-4 py-6">
        {navLinks.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => {
                // 1. Close the menu first
                setMobileOpen(false);
                
                // 2. Use a tiny timeout to allow the exit animation 
                // to start/calculate before scrolling
                setTimeout(() => {
                  const element = document.querySelector(l.href);
                  if (element) {
                    const offset = 80; // Adjust this based on your navbar height
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    });
                  }
                }, 10); 
              }}
              className={`text-base font-semibold transition-colors ${
                activeSection === l.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
