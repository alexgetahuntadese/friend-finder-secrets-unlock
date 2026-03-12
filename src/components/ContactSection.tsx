import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body font-medium tracking-widest uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact & Location
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Address</h3>
                <p className="font-body text-muted-foreground">054 Mickyliland Street, Bole Sub City<br />Wereda 3, Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:+251116392239" className="font-body text-muted-foreground hover:text-gold transition-colors">
                  +251 11 639 2239
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Website</h3>
                <p className="font-body text-muted-foreground">www.washingtonaddis.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Check-in / Check-out</h3>
                <p className="font-body text-muted-foreground">Check-in: 2:00 PM — Check-out: 12:00 PM<br />24-hour front desk available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-card h-80 md:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7893!3d8.9957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f1b6560001%3A0x2ef50e28e8ded395!2sWashington%20Hotel%20Addis!5e0!3m2!1sen!2set!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Washington Hotel location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
