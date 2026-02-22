import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

const HireMeModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      onClose();
    }, 2500);
  };

  const update = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-200 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
      errors[field] ? "border-destructive" : "border-border focus:border-primary"
    }`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-4 py-12">
                <CheckCircle className="text-primary" size={56} />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground text-center">Thank you! I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-1 gradient-text">Let's Work Together</h2>
                <p className="text-muted-foreground text-sm mb-6">Tell me about your project</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input placeholder="Full Name *" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass("name")} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input placeholder="Email *" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <input placeholder="Contact Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("")} />

                  <div>
                    <textarea placeholder="Message / Project Details *" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass("message")} />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-60 flex items-center justify-center gap-2">
                    {submitting ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
