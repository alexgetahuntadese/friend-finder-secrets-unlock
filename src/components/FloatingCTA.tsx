import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingCTA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.a
      href="tel:+251116392239"
      style={{ opacity }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold shadow-[0_4px_24px_hsl(38_70%_50%/0.4)] flex items-center justify-center group"
    >
      <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-background animate-pulse" />
    </motion.a>
  );
};

export default FloatingCTA;
