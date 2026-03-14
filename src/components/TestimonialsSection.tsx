import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    origin: "London, UK",
    rating: 5,
    text: "Wonderful staff and great location! The breakfast was delicious and the rooms were spotlessly clean. Perfect for exploring Bole.",
  },
  {
    name: "David K.",
    origin: "Nairobi, Kenya",
    rating: 4,
    text: "Great value for money. The airport shuttle was convenient and the front desk staff went above and beyond to help with my travel plans.",
  },
  {
    name: "Amina T.",
    origin: "Dubai, UAE",
    rating: 5,
    text: "I felt truly at home here. The Ethiopian hospitality is something special. Will definitely return on my next visit to Addis.",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-28 px-4 section-divider mesh-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Guest Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Desktop: grid view / Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotateY: 3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass p-8 rounded-2xl shadow-elevated relative border-glow group"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <Quote className="w-5 h-5 text-gold/30 group-hover:text-gold/50 transition-colors" />
              </div>
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold drop-shadow-[0_0_4px_hsl(38_70%_50%/0.3)]" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-8 text-[15px]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t.origin}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass p-8 rounded-2xl shadow-elevated relative border-glow"
              >
                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonials[active].rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-8 text-[15px]">
                  "{testimonials[active].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-display font-bold text-sm">
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{testimonials[active].name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{testimonials[active].origin}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-gold w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
