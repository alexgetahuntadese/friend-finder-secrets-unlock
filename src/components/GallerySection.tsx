import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImg from "@/assets/hero-hotel.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import rooftopImg from "@/assets/rooftop-terrace.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import standardImg from "@/assets/room-standard.jpg";
import suiteImg from "@/assets/room-suite.jpg";
import spaImg from "@/assets/spa-wellness.jpg";

const gallery = [
  { src: heroImg, title: "Hotel Exterior", category: "Hotel" },
  { src: restaurantImg, title: "Restaurant & Lounge", category: "Dining" },
  { src: rooftopImg, title: "Rooftop Terrace", category: "Facilities" },
  { src: deluxeImg, title: "Deluxe Room", category: "Rooms" },
  { src: standardImg, title: "Standard Room", category: "Rooms" },
  { src: suiteImg, title: "Executive Suite", category: "Rooms" },
  { src: spaImg, title: "Spa & Wellness", category: "Facilities" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
    );
  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : null
    );

  return (
    <section id="gallery" className="py-24 md:py-32 mesh-gradient-dark relative grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream mt-3 mb-5">
            Explore Our Hotel
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer border-glow ${
                i === 0 || i === 5
                  ? "col-span-2 md:col-span-1 row-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-mono text-gold text-[10px] tracking-[0.25em] uppercase">
                    {item.category}
                  </span>
                  <p className="text-cream font-display text-lg">{item.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/40 hover:text-cream transition-colors z-50 w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream transition-colors z-50 w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream transition-colors z-50 w-12 h-12 rounded-full glass-dark flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl max-h-[80vh] px-12 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center mt-6">
                <span className="font-mono text-gold text-[10px] tracking-[0.25em] uppercase">
                  {gallery[lightboxIndex].category}
                </span>
                <p className="text-cream font-display text-xl mt-1">
                  {gallery[lightboxIndex].title}
                </p>
                <p className="text-cream/30 text-xs font-mono mt-2">
                  {lightboxIndex + 1} / {gallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
