import { motion } from "framer-motion";
import { Users, Maximize, Check, ArrowRight } from "lucide-react";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const rooms = [
  {
    name: "Classic Room",
    image: roomStandard,
    price: "From $45",
    period: "/night",
    guests: "1-2 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Tea & Coffee Making", "En-suite Bathroom"],
    accent: "from-gold/20 to-gold/5",
  },
  {
    name: "Standard Room",
    image: roomDeluxe,
    price: "From $69",
    period: "/night",
    guests: "1-2 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Electric Kettle", "Jacuzzi Bath", "Work Desk"],
    accent: "from-gold/25 to-gold/5",
    popular: true,
  },
  {
    name: "Executive Room",
    image: roomSuite,
    price: "From $72",
    period: "/night",
    guests: "1-3 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Separate Sitting Area", "Jacuzzi Bath", "Room Service", "City View"],
    accent: "from-gold/30 to-gold/5",
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-28 px-4 bg-secondary mesh-gradient relative grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Accommodations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            79 Rooms & Suites
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            All rooms are air-conditioned and equipped with minibars, cable TV, tea- and coffee-making 
            amenities, and complimentary Wi-Fi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-background rounded-2xl overflow-hidden shadow-elevated hover:shadow-warm transition-all duration-500 group border-glow ${room.popular ? 'md:-translate-y-4' : ''}`}
            >
              {room.popular && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gradient-gold text-primary font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${room.accent} to-transparent`} />
                <div className="absolute bottom-4 right-4">
                  <div className="glass-dark rounded-full px-4 py-2">
                    <span className="font-display text-xl font-bold text-cream">{room.price}</span>
                    <span className="font-body text-cream/50 text-sm">{room.period}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{room.name}</h3>
                <div className="flex gap-4 text-muted-foreground text-sm font-body mb-5">
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-gold/60" /> {room.guests}</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-gold/60" /> {room.size}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-body text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+251116392239"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-body font-medium py-3.5 rounded-xl hover:bg-charcoal-light transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
