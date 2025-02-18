"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png" // Update with your actual image path
          alt="Balloon decorations for events"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white px-6 flex flex-col gap-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-gray-200">
          Celebra momentos inolvidables con nosotros
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-white dark:text-gray-300"
        >
          Decoración profesional con globos para cumpleaños, baby showers y más
          en Madrid!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/#contact">
            <button className="bg-pink-600 hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400 text-white py-3 px-6 rounded-lg">
              Solicita un presupuesto
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
