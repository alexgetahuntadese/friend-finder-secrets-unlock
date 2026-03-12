import { motion } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4 grain">
      {/* Subtle mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-display text-3xl font-bold">
              Washington Hotel<span className="text-gradient-gold">.</span>
            </p>
            <p className="font-mono text-xs tracking-wider text-cream/40 mt-2 uppercase">
              4-Star Hotel · Cape Verde Street, Bole Atlas
            </p>
          </motion.div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+251116392239"
              className="flex items-center gap-2.5 font-body text-sm text-cream/60 hover:text-gold transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              +251 11 639 2239
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:border-gold/30 transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors" />
            </button>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-wider text-cream/30 uppercase">
            © {new Date().getFullYear()} Washington Hotel · Bole Atlas · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {["About", "Rooms", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-[11px] tracking-wider text-cream/30 hover:text-gold transition-colors uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
