import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const contacts = [
  { icon: MapPin, title: "Address", content: "054 Mickyliland Street, Bole Sub City\nWereda 3, Addis Ababa, Ethiopia" },
  { icon: Phone, title: "Phone", content: "+251 11 639 2239", href: "tel:+251116392239" },
  { icon: Globe, title: "Website", content: "www.washingtonaddis.com" },
  { icon: Clock, title: "Check-in / Check-out", content: "Check-in: 2:00 PM — Check-out: 12:00 PM\n24-hour front desk available" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 bg-secondary mesh-gradient relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact & Location
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start glass p-5 rounded-2xl border-glow group hover:glow-gold transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <c.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="font-body text-sm text-muted-foreground hover:text-gold transition-colors whitespace-pre-line">
                      {c.content}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{c.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-auto border-glow"
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
