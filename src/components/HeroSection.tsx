import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, MapPin, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Washington Hotel Bole Atlas — 4-star hotel in Addis Ababa"
          className={`w-full h-[120%] object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} scale-105`}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40" />

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/30 hidden md:block" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/30 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold/30 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/30 hidden md:block" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              >
                <Star className="w-5 h-5 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-16 h-px bg-gradient-gold mx-auto mb-6"
          />

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-3 tracking-tight leading-[0.9]">
            Washington
            <span className="block text-gradient-gold">Hotel</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-lg md:text-xl text-gold-light italic mb-3"
          >
            Bole Atlas, Addis Ababa
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-cream/60 text-sm mb-2"
          >
            <MapPin className="w-4 h-4 text-gold/60" />
            <span className="font-body tracking-wide">Cape Verde Street, Bole Sub City, Wereda 3</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-cream/40 text-xs font-body tracking-widest uppercase mb-10"
          >
            <span>79 Rooms</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>Restaurant</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>Rooftop</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>Spa</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#rooms"
            className="group relative bg-gradient-gold px-10 py-4 rounded-lg font-body font-semibold text-primary tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,160,60,0.3)]"
          >
            <span className="relative z-10">Book Your Stay</span>
          </a>
          <a
            href="tel:+251116392239"
            className="border border-cream/20 px-10 py-4 rounded-lg font-body font-medium text-cream hover:bg-cream/5 hover:border-cream/40 transition-all duration-300 backdrop-blur-sm"
          >
            Call +251 11 639 2239
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-cream/60 transition-colors cursor-pointer"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
