import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            Mentes Como <span className="text-gradient-gold">Global</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Integrated Procurement & Logistics Solutions for the Energy Industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="mailto:Mentescomoglobal@mail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={16} /> Mentescomoglobal@mail.com
            </a>
            <a href="tel:+2348096942616" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={16} /> +234 809 694 2616
            </a>
            <a href="https://www.mentescomo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Globe size={16} /> www.mentescomo.com
            </a>
          </div>
          <div className="flex gap-4 mt-6">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="text-primary-foreground/50 hover:text-secondary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Mentes Como Global Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
