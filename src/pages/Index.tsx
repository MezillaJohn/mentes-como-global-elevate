import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Link2, ShoppingCart, Truck, Wrench, Users,
  CheckCircle, Shield, Award, Zap, Heart, Eye, Target,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import visionBg from "@/assets/vision-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Link2, title: "Supply Chain Management", desc: "End-to-end supply chain solutions designed to optimize operations, reduce costs, and ensure seamless movement of goods." },
  { icon: ShoppingCart, title: "Procurement Services", desc: "Strategic sourcing and procurement ensuring acquisition of high-quality materials in line with industry standards." },
  { icon: Truck, title: "Logistics & Distribution", desc: "Safe, timely, and efficient transportation and delivery of goods supporting uninterrupted operations." },
  { icon: Wrench, title: "General Support Services", desc: "A range of support services tailored to meet both operational and administrative needs." },
  { icon: Users, title: "Manpower Supply & Outsourcing", desc: "Skilled personnel to support technical, operational, and administrative functions." },
];

const whyUs = [
  { icon: CheckCircle, text: "Commitment to quality and efficiency" },
  { icon: Target, text: "Industry-focused expertise" },
  { icon: Zap, text: "Reliable and timely delivery" },
  { icon: Heart, text: "Professional and client-focused approach" },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Honesty, transparency, and strong ethical standards in all our operations." },
  { icon: Award, title: "Excellence", desc: "Delivering high-quality services through continuous improvement and attention to detail." },
  { icon: CheckCircle, title: "Reliability", desc: "Consistent and dependable services our clients can trust." },
  { icon: Zap, title: "Efficiency", desc: "Optimizing processes and resources for timely, cost-effective solutions." },
  { icon: Shield, title: "Safety", desc: "Prioritizing health and safety with strict compliance to industry standards." },
  { icon: Heart, title: "Customer Focus", desc: "Placing clients at the center of everything we do." },
];

const Index = () => (
  <main>
    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Oil refinery at dusk" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/75" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-6">
            Mentes Como Global Limited
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto">
            Integrated Procurement & Logistics Solutions for the{" "}
            <span className="text-gradient-gold">Energy Industry</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Delivering efficient, reliable, and value-driven services across the supply chain.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-gold text-primary font-semibold px-8 py-3.5 rounded-md transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              Our Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="section-padding bg-light-gray">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-3 leading-tight">
            Dynamic & Forward-Thinking in Oil & Gas
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Mentes Como Global Limited is a dynamic and forward-thinking company operating within the oil and gas sector, committed to delivering efficient, reliable, and value-driven solutions. We specialize in supply chain management, procurement, logistics, and general support services.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We understand the importance of precision, timeliness, and operational excellence in the energy industry. Our approach is built on professionalism, integrity, and a strong commitment to delivering results.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 bg-gradient-gold text-primary font-semibold px-6 py-3 rounded-md transition-transform hover:scale-105"
          >
            Learn More <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <img src={aboutBg} alt="Logistics operations" className="rounded-lg shadow-card-hover w-full" loading="lazy" width={1920} height={1080} />
        </AnimatedSection>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="What We Do" title="Our Core Services" subtitle="Tailored solutions that meet the evolving demands of the energy industry." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full border border-border">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="section-padding bg-dark-section">
      <div className="container mx-auto">
        <SectionHeading label="Why Us" title="Why Choose Mentes Como" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <p className="text-dark-section-foreground font-medium leading-relaxed">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* VISION */}
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={visionBg} alt="Pipeline infrastructure" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedSection>
          <Eye size={40} className="text-secondary mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
            Our Vision
          </h2>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed italic">
            "To become a leading and trusted provider of integrated procurement, logistics, and supply chain solutions within the oil and gas sector, delivering efficient, reliable, and value-driven services that support seamless operations and long-term client success."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* CORE VALUES */}
    <section className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <SectionHeading label="What Drives Us" title="Our Core Values" subtitle="The principles that guide every decision and action we take." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div className="group bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-navy flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-navy text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
          Let's Power Your <span className="text-gradient-gold">Operations</span>
        </h2>
        <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
          Partner with us for reliable, efficient, and value-driven solutions.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-8 bg-gradient-gold text-primary font-semibold px-8 py-3.5 rounded-md transition-transform hover:scale-105"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </AnimatedSection>
    </section>
  </main>
);

export default Index;
