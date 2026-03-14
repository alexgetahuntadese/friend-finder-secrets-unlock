import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wifi, Car, Coffee, Shield, Clock, Utensils, Dumbbell, Sparkles, Building2, ParkingSquare } from "lucide-react";
import CountUp from "./CountUp";

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

const stats = [
  { value: 79, suffix: "", label: "Rooms & Suites" },
  { value: 4, suffix: "★", label: "Star Rating" },
  { value: 3, suffix: ".5 km", label: "From Airport" },
  { value: 24, suffix: "/7", label: "Front Desk" },
];

const marqueeItems = [...amenities, ...amenities];

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
          className="text-center mb-16"
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

        {/* Animated stats counter row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center glass p-6 rounded-2xl border-glow"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Marquee amenities ticker */}
        <div className="relative overflow-hidden py-6 -mx-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {marqueeItems.map((amenity, i) => (
              <div
                key={`${amenity.label}-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full glass border-glow whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-4 h-4 text-gold" />
                </div>
                <span className="font-body text-sm font-medium text-foreground">
                  {amenity.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
