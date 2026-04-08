import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ label, title, subtitle, light = false, center = true }: Props) => (
  <AnimatedSection className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
    {label && (
      <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
        {label}
      </span>
    )}
    <h2
      className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? "text-primary-foreground" : "text-primary"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-4 max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""} ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
