import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold">
              Washington Hotel<span className="text-gold">.</span>
            </p>
            <p className="font-body text-sm opacity-60 mt-1">
              4-Star Hotel · Cape Verde Street, Bole Atlas, Addis Ababa
            </p>
          </div>
          <a
            href="tel:+251116392239"
            className="flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            +251 11 639 2239
          </a>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-sm opacity-50">
            © {new Date().getFullYear()} Washington Hotel | Bole Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
