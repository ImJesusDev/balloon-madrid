// components/Gallery.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery/001.jpeg",
  "/gallery/002.jpeg",
  "/gallery/003.jpeg",
  "/gallery/004.jpeg",
  "/gallery/005.jpeg",
  "/gallery/006.jpeg",
  "/gallery/008.jpeg",
  "/gallery/009.jpeg",
  "/gallery/010.jpeg",
  "/gallery/011.jpeg",
  "/gallery/012.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const section = document.getElementById("gallery");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    checkVisibility(); // Run on mount
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-200"
        >
          Nuestro Trabajo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-white mt-4 text-lg"
        >
          Mira algunas de nuestras decoraciones más recientes.
        </motion.p>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                priority={false}
                placeholder="blur"
                blurDataURL="https://picsum/800/800"
                src={src}
                alt={`Event decoration ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-xl w-full p-4"
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={576}
              height={600}
              className="w-full rounded-lg object-contain"
            />
            <button
              className="absolute h-8 w-8 top-6 right-6 bg-white text-black p-1 rounded-full hover:bg-pink-600 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
