import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, MapPin, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const wordChild = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary grain">
      {/* Parallax background with Ken Burns */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Washington Hotel Bole Atlas — 4-star hotel in Addis Ababa"
          className={`w-full h-[120%] object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/20 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />

      {/* Animated mesh orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[100px]"
        />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/20 hidden md:block rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-gold/20 hidden md:block rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-gold/20 hidden md:block rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/20 hidden md:block rounded-br-lg" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Star className="w-4 h-4 fill-gold text-gold drop-shadow-[0_0_8px_hsl(38_70%_50%/0.6)]" />
              </motion.div>
            ))}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          {/* Split text reveal */}
          <motion.h1
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-cream mb-4 tracking-tight leading-[0.9]"
          >
            <motion.span variants={wordChild} className="inline-block">Washington</motion.span>
            <span className="block mt-1">
              <motion.span variants={wordChild} className="inline-block text-gradient-gold">Hotel</motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display text-lg md:text-xl text-gold-light/80 italic mb-4"
          >
            Bole Atlas, Addis Ababa
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-cream/50 text-sm mb-3"
          >
            <MapPin className="w-3.5 h-3.5 text-gold/50" />
            <span className="font-body tracking-wider text-xs">Cape Verde Street, Bole Sub City, Wereda 3</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-4 text-cream/30 text-[11px] font-mono tracking-[0.2em] uppercase mb-12"
          >
            {["79 Rooms", "Restaurant", "Rooftop", "Spa"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/30 -ml-4" />}
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#rooms"
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px hsl(38 70% 50% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-gradient-gold px-10 py-4 rounded-full font-body font-semibold text-primary tracking-wide overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10">Book Your Stay</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
          <motion.a
            href="tel:+251116392239"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="glass-dark px-10 py-4 rounded-full font-body font-medium text-cream hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_hsl(38_70%_50%/0.1)]"
          >
            Call +251 11 639 2239
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 hover:text-cream/50 transition-colors cursor-pointer group"
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
