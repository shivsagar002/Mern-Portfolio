import ScrollReveal from "./ScrollReveal.jsx";
import emailjs from '@emailjs/browser';
import { Mail, Loader2, Send, ExternalLink, MessageSquare, MapPin } from "lucide-react";
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

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  
  // Template IDs
  const autoReplyTemplateId = import.meta.env.VITE_GET_IN_TOUCH_TEMPLATE_ID; // The one that goes to the user

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    to_name: 'Shiv Sagar',
    message: form.message,
  };

  try {
    
    await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
    
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  } catch (error) {
    setSending(false);
    console.error('Email failed:', error);
  }
};

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/[0.05]";

  return (
    <section id="contact" className="my-12 md:my-24 relative overflow-hidden bg-background">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Availability</span>
            <div className="h-[1px] w-12 bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            Let's Build <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg mb-16 leading-relaxed">
            Currently open to **Software Engineering** opportunities and technical collaborations. 
            Whether you have a question about my work or just want to say hi, my inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                <a href="mailto:shivsagardev002@gmail.com" className="flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Direct Email</p>
                    <p className="font-semibold text-foreground break-all">shivsagardev002@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/shivsagar002/" target="_blank" className="flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <SiLinkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Professional Network</p>
                    <p className="font-semibold text-foreground">linkedin.com/in/shivsagar002</p>
                  </div>
                </a>

                <a href="https://github.com/shivsagar002" target="_blank" className="flex items-center gap-5 glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <SiGithub size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Code Repository</p>
                    <p className="font-semibold text-foreground">github.com/shivsagar002</p>
                  </div>
                </a>
              </div>

              {/* Status Badge */}
              <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Available for new challenges and complex problem-solving.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Enhanced Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative">
                <div className="flex items-center gap-3 mb-8">
                   <MessageSquare className="text-cyan-400" size={20} />
                   <h3 className="text-xl font-bold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1" htmlFor="name">Full Name</label>
                      <input 
                        id="name"
                        name = "name"
                        placeholder="John Doe" 
                        autoComplete="name"
                        value={form.name} 
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} 
                        className={inputClass} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1" htmlFor="email">Email Address</label>
                      <input 
                        id="email"
                        name = "email"
                        placeholder="john@example.com" 
                        type="email" 
                        autoComplete="email"
                        value={form.email} 
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} 
                        className={inputClass} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1" htmlFor="message">Your Inquiry</label>
                    <textarea 
                      id="message"
                      name = "message"
                      placeholder="How can I help you today?" 
                      rows={5} 
                      value={form.message} 
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} 
                      className={inputClass} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={sending}
                    className="w-full py-4 rounded-xl gradient-bg text-black font-bold hover:bg-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3"
                  >
                    {sending ? (
                      <><Loader2 className="animate-spin" size={20} /> Dispatching Request...</>
                    ) : sent ? (
                      <>Sent Successfully ✓</>
                    ) : (
                      <>Initialize Connection <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
