import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="p-2 rounded-lg glass neon-border hover:scale-105 transition-transform"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
    </motion.button>
  );
};

export default ThemeToggle;
