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
    <section id="gallery" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-body text-gold text-sm tracking-[0.25em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mt-3 mb-4">
            Explore Our Hotel
          </h2>
          <div className="w-16 h-px bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
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
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold text-xs font-body tracking-widest uppercase">
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
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] px-12 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4">
                <span className="text-gold text-xs font-body tracking-widest uppercase">
                  {gallery[lightboxIndex].category}
                </span>
                <p className="text-cream font-display text-xl mt-1">
                  {gallery[lightboxIndex].title}
                </p>
                <p className="text-cream/40 text-sm font-body mt-1">
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
