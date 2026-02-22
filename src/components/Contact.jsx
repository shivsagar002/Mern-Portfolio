import ScrollReveal from "./ScrollReveal.jsx";
import { Mail, Loader2 } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200";

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12">
            Interested in collaborating or discussing opportunities? Let's build something meaningful.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 mt-5">
              <a href="mailto:shivsagardev002@gmail.com" target="_blank" className="flex items-center gap-4 glass rounded-xl p-4 neon-border hover-lift group">
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">shivsagardev002@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/shivsagar002/" target="_blank" className="flex items-center gap-4 glass rounded-xl p-4 neon-border hover-lift group">
                <SiLinkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/shivsagar002</p>
                </div>
              </a>
              <a href="https://github.com/shivsagar002" target="_blank" className="flex items-center gap-4 glass rounded-xl p-4 neon-border hover-lift group">
                <SiGithub className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="font-medium">github.com/shivsagar002</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input placeholder="Your Name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
              <input placeholder="Your Email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} />
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className={inputClass} />
              <button type="submit" disabled={sending}
                className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
                {sending ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : sent ? "Sent ✓" : "Send Message"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
