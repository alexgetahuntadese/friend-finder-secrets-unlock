import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Landmark, Plane, Theater, Church, ArrowUpRight } from "lucide-react";

const spots = [
  {
    icon: Plane,
    title: "Bole International Airport",
    desc: "Just 3.5 km away with our complimentary airport shuttle service — a 10-minute drive.",
    distance: "3.5 km",
  },
  {
    icon: Church,
    title: "Medhane Alem Cathedral",
    desc: "One of the largest churches in Africa, just 1.2 km and within walking distance.",
    distance: "1.2 km",
  },
  {
    icon: Theater,
    title: "Matti Multiplex Theatre",
    desc: "A 12-minute walk to Addis Ababa's premier cinema and entertainment complex.",
    distance: "12 min",
  },
  {
    icon: ShoppingBag,
    title: "Edna Mall",
    desc: "Addis Ababa's popular shopping destination is only 1.2 km away with shops and dining.",
    distance: "1.2 km",
  },
  {
    icon: Landmark,
    title: "National Museum",
    desc: "Home to the famous Lucy fossil — a short 10-minute drive from the hotel.",
    distance: "10 min",
  },
  {
    icon: MapPin,
    title: "Bole District",
    desc: "Walk to vibrant cafés, restaurants, nightlife, and shops in Addis Ababa's premier neighborhood.",
    distance: "Walking",
  },
];

const LocalGuideSection = () => {
  return (
    <section className="py-28 px-4 mesh-gradient-dark relative text-primary-foreground grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Explore Addis Ababa
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Bole & Beyond
          </h2>
          <p className="font-body text-lg text-cream/60 max-w-2xl mx-auto">
            Situated in Bole — one of Addis Ababa's key commercial and entertainment zones — 
            Washington Hotel puts you at the center of everything worth seeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-dark rounded-2xl p-6 hover:border-gold/30 transition-all duration-500 group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <spot.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] text-gold/50 uppercase px-2.5 py-1 rounded-full border border-gold/10">
                  {spot.distance}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                {spot.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </h3>
              <p className="font-body text-sm text-cream/50 leading-relaxed">{spot.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalGuideSection;
