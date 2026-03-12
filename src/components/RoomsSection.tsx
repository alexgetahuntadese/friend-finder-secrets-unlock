import { motion } from "framer-motion";
import { Users, Maximize, Check } from "lucide-react";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";

const rooms = [
  {
    name: "Classic Room",
    image: roomStandard,
    price: "From $45/night",
    guests: "1-2 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Tea & Coffee Making", "En-suite Bathroom"],
  },
  {
    name: "Standard Room",
    image: roomDeluxe,
    price: "From $69/night",
    guests: "1-2 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Electric Kettle", "Jacuzzi Bath", "Work Desk"],
  },
  {
    name: "Executive Room",
    image: roomSuite,
    price: "From $72/night",
    guests: "1-3 Guests",
    size: "Air-conditioned",
    features: ["Flat-screen Cable TV", "Free Wi-Fi", "Minibar", "Separate Sitting Area", "Jacuzzi Bath", "Room Service", "City View"],
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body font-medium tracking-widest uppercase text-sm mb-3">
            Accommodations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            79 Rooms & Suites
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            All rooms are air-conditioned and equipped with minibars, cable TV, tea- and coffee-making 
            amenities, and complimentary Wi-Fi for a comfortable stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4 bg-gradient-gold px-4 py-1.5 rounded-full">
                  <span className="font-body font-semibold text-sm text-primary">{room.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{room.name}</h3>
                <div className="flex gap-4 text-muted-foreground text-sm font-body mb-4">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {room.guests}</span>
                  <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {room.size}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+251116392239"
                  className="block w-full bg-primary text-primary-foreground font-body font-medium py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  Book Now
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
