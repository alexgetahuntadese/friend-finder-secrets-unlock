import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Landmark, Plane, Theater, Church } from "lucide-react";

const spots = [
  {
    icon: Plane,
    title: "Bole International Airport",
    desc: "Just 3.5 km away with our complimentary airport shuttle service — a 10-minute drive.",
  },
  {
    icon: Church,
    title: "Medhane Alem Cathedral",
    desc: "One of the largest churches in Africa, just 1.2 km and within walking distance.",
  },
  {
    icon: Theater,
    title: "Matti Multiplex Theatre",
    desc: "A 12-minute walk to Addis Ababa's premier cinema and entertainment complex.",
  },
  {
    icon: ShoppingBag,
    title: "Edna Mall",
    desc: "Addis Ababa's popular shopping destination is only 1.2 km away with shops and dining.",
  },
  {
    icon: Landmark,
    title: "National Museum",
    desc: "Home to the famous Lucy fossil — a short 10-minute drive from the hotel.",
  },
  {
    icon: MapPin,
    title: "Bole District",
    desc: "Walk to vibrant cafés, restaurants, nightlife, and shops in Addis Ababa's premier neighborhood.",
  },
];

const LocalGuideSection = () => {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body font-medium tracking-widest uppercase text-sm mb-3">
            Explore Addis Ababa
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Discover Bole & Beyond
          </h2>
          <p className="font-body text-lg opacity-70 max-w-2xl mx-auto">
            Situated in Bole — one of Addis Ababa's key commercial and entertainment zones — 
            Washington Hotel puts you at the center of everything worth seeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border border-primary-foreground/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                <spot.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{spot.title}</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">{spot.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalGuideSection;
