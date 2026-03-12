import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body font-medium tracking-widest uppercase text-sm mb-3">
            Guest Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-card relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.origin}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
