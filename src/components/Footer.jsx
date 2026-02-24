import ScrollReveal from "./ScrollReveal.jsx";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <ScrollReveal>
    <footer className="container mx-auto px-6 mt-10 pb-12 border-t border-primary/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="text-cyan-400">{'<'}</span>
            <span>Shiv</span>
            <span className="text-orange-400">{' />'}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Software Engineer focused on architecting scalable systems and 
            bridging foundational logic with modern web innovation.
          </p>
        </div>

        {/* Contact/Social Section */}
        <div className="space-y-4">
          <h4 className=" md:text-right text-sm font-semibold uppercase tracking-widest text-foreground/70">
            Connect
          </h4>
          <div className="flex gap-5">
            <a href="https://github.com/shivsagar002" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-secondary hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/shivsagar002" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-secondary hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <FaLinkedinIn size={20} />
            </a>
            <a href="mailto:shivsagardev002@gmail.com" 
               className="p-2 rounded-full bg-secondary hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <FaEnvelope size={20} />
            </a>
            <a href="https://wa.me/918750771201" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-secondary hover:bg-cyan-400/10 hover:text-cyan-400 transition-all">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shiv Sagar. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          Designed with <FaCode className="text-orange-400" /> & Passion
        </p>
      </div>
    </footer>
    </ScrollReveal>
  );
};

export default Footer;