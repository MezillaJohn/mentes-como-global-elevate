import { Link2, ShoppingCart, Truck, Wrench, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Link2,
    title: "Supply Chain Management",
    desc: "We provide end-to-end supply chain solutions designed to optimize operations, reduce costs, and ensure seamless movement of goods and resources across the value chain.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Services",
    desc: "We offer strategic sourcing and procurement services, ensuring the acquisition of high-quality materials and equipment in line with industry standards and client specifications.",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    desc: "Our logistics services ensure the safe, timely, and efficient transportation and delivery of goods, supporting uninterrupted operations for our clients.",
  },
  {
    icon: Wrench,
    title: "General Support Services",
    desc: "We provide a range of support services tailored to meet both operational and administrative needs, ensuring smooth and efficient business processes.",
  },
  {
    icon: Users,
    title: "Manpower Supply & Outsourcing",
    desc: "We deliver skilled personnel to support technical, operational, and administrative functions, ensuring efficiency, reliability, and continuity across client operations.",
  },
];

const Services = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Services" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">Our Services</h1>
        <p className="mt-4 text-primary-foreground/70 text-lg">Comprehensive solutions for the energy industry.</p>
      </div>
    </section>

    {/* Services Detail */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading label="What We Offer" title="Tailored Solutions" subtitle="Every service is designed with precision to meet the specific needs of oil & gas operations." />
        <div className="space-y-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-card rounded-lg p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-16 h-16 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <s.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-dark-section text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          Need a Tailored Solution?
        </h2>
        <p className="mt-4 text-dark-section-foreground/70 text-lg">Let's discuss how we can support your operations.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-8 bg-gradient-gold text-primary font-semibold px-8 py-3.5 rounded-md transition-transform hover:scale-105"
        >
          Contact Us <ArrowRight size={18} />
        </Link>
      </AnimatedSection>
    </section>
  </main>
);

export default Services;
