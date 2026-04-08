import { Eye, Target } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import visionBg from "@/assets/vision-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const About = () => (
  <main>
    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={aboutBg} alt="About Mentes Como" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">About Us</h1>
        <p className="mt-4 text-primary-foreground/70 text-lg">Discover who we are and what drives us.</p>
      </div>
    </section>

    {/* Introduction */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading label="Who We Are" title="Our Story" />
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Mentes Como Global Limited is a dynamic and forward-thinking company operating within the oil and gas sector, committed to delivering efficient, reliable, and value-driven solutions. We specialize in supply chain management, procurement, logistics, and general support services, providing tailored solutions that meet the evolving demands of our clients.
            </p>
            <p>
              At Mentes Como Global Limited, we understand the importance of precision, timeliness, and operational excellence in the energy industry. Our approach is built on professionalism, integrity, and a strong commitment to delivering results that support our clients' business objectives.
            </p>
            <p>
              With a focus on quality service delivery and strategic execution, we position ourselves as a trusted partner for organizations seeking dependable and efficient operational support.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-light-gray">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <AnimatedSection direction="left">
          <div className="bg-card rounded-lg p-10 shadow-card border border-border h-full">
            <div className="w-14 h-14 rounded-lg bg-gradient-navy flex items-center justify-center mb-6">
              <Target size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver integrated procurement, logistics, and supply chain solutions that ensure seamless operations, cost efficiency, and long-term value for our clients in the oil and gas sector.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="bg-card rounded-lg p-10 shadow-card border border-border h-full">
            <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6">
              <Eye size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading and trusted provider of integrated procurement, logistics, and supply chain solutions within the oil and gas sector, delivering efficient, reliable, and value-driven services that support seamless operations and long-term client success.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Parallax quote */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={visionBg} alt="Vision" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="font-heading text-2xl md:text-3xl italic text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            "We aim to build strong partnerships through professionalism, innovation, and a commitment to excellence, while continuously improving our processes to meet the evolving demands of the industry."
          </p>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default About;
