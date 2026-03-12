import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wifi, Car, Coffee, Shield, Clock, Utensils, Dumbbell, Sparkles, Building2, ParkingSquare } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Airport Shuttle" },
  { icon: Utensils, label: "Restaurant & Bar" },
  { icon: Sparkles, label: "Spa & Wellness" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Clock, label: "24h Front Desk" },
  { icon: Coffee, label: "Tea & Coffee Amenities" },
  { icon: Building2, label: "Meeting Rooms" },
  { icon: ParkingSquare, label: "Valet Parking" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={ref} className="relative py-28 px-4 overflow-hidden section-divider mesh-gradient">
      {/* Parallax decorative background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/3 blur-[100px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Welcome to Washington Hotel
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Your 4-Star Home in{" "}
            <span className="text-gradient-gold">Bole Atlas</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            The Washington Hotel is a 4-star hospitality establishment located on Cape Verde Street 
            in the vibrant Bole Atlas area of Addis Ababa. With 79 beautifully appointed rooms and suites, 
            we serve both business and transit travelers seeking convenient, comfortable accommodation 
            just 3.5 km from Bole International Airport.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
        >
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl glass border-glow hover:glow-gold transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300 group-hover:scale-110 transform">
                <amenity.icon className="w-5 h-5 text-gold" />
              </div>
              <span className="font-body text-xs font-medium text-foreground text-center">
                {amenity.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
