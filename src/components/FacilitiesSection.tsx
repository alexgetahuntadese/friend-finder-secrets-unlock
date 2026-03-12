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
  },
  {
    title: "Rooftop Terrace",
    description: "Take in breathtaking panoramic views of Addis Ababa from our rooftop terrace — the perfect spot for sunset cocktails and memorable evenings.",
    image: rooftopImg,
  },
  {
    title: "Spa & Wellness Center",
    description: "Rejuvenate body and mind in our spa and wellness area featuring massage treatments, a jacuzzi, and a fully equipped fitness center.",
    image: spaImg,
  },
];

const FacilityCard = ({ facility, i }: { facility: typeof facilities[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
    >
      <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-card">
        <motion.div style={{ y: imgY }} className="will-change-transform">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-72 md:h-80 object-cover scale-110"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
      <div className="md:w-1/2">
        <h3 className="font-display text-3xl font-semibold text-foreground mb-4">{facility.title}</h3>
        <p className="font-body text-muted-foreground leading-relaxed text-lg">{facility.description}</p>
      </div>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body font-medium tracking-widest uppercase text-sm mb-3">
            Hotel Facilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dine, Relax & Unwind
          </h2>
        </motion.div>

        <div className="space-y-16">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.title} facility={facility} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
