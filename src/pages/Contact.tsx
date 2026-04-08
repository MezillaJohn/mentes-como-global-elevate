import { useState, FormEvent } from "react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contact" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-primary-foreground/70 text-lg">Get in touch — we'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection direction="left">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-gold text-primary font-semibold py-3.5 rounded-md transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "Mentescomoglobal@mail.com", href: "mailto:Mentescomoglobal@mail.com" },
                { icon: Phone, label: "Phone", value: "+234 809 694 2616", href: "tel:+2348096942616" },
                { icon: Globe, label: "Website", value: "www.mentescomo.com", href: "https://www.mentescomo.com" },
                { icon: MapPin, label: "Location", value: "Nigeria", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
