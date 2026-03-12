import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-cream">
          Washington<span className="text-gold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-cream/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rooms"
            className="bg-gradient-gold px-5 py-2 rounded-lg font-body font-semibold text-sm text-primary hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-4 pb-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-cream/80 hover:text-gold transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rooms"
            onClick={() => setOpen(false)}
            className="block bg-gradient-gold px-5 py-3 rounded-lg font-body font-semibold text-center text-primary"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
