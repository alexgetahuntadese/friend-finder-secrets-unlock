import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import rooftopImg from "@/assets/rooftop-terrace.jpg";
import spaImg from "@/assets/spa-wellness.jpg";
import restaurantImg from "@/assets/restaurant.jpg";

const facilities = [
  {
    title: "Restaurant & Lounge Bar",
    description: "Savor continental and local Ethiopian dishes in our elegant restaurant. Unwind at the lounge bar with a curated selection of drinks and live entertainment.",
    image: restaurantImg,
    tag: "Dining",
  },
  {
    title: "Rooftop Terrace",
    description: "Take in breathtaking panoramic views of Addis Ababa from our rooftop terrace — the perfect spot for sunset cocktails and memorable evenings.",
    image: rooftopImg,
    tag: "Experience",
  },
  {
    title: "Spa & Wellness Center",
    description: "Rejuvenate body and mind in our spa and wellness area featuring massage treatments, a jacuzzi, and a fully equipped fitness center.",
    image: spaImg,
    tag: "Wellness",
  },
];

const FacilityCard = ({ facility, i }: { facility: typeof facilities[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
    >
      <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-elevated group relative border-glow">
        <motion.div style={{ y: imgY, scale: imgScale }} className="will-change-transform">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <div className="absolute top-4 left-4 z-10">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full glass-dark text-gold">
            {facility.tag}
          </span>
        </div>
      </div>
      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: i % 2 === 1 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent mb-6" />
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-5">{facility.title}</h3>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">{facility.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-28 px-4 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Hotel Facilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Dine, Relax & Unwind
          </h2>
        </motion.div>

        <div className="space-y-24">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.title} facility={facility} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
