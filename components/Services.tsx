"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaBaby,
  FaGift,
  FaBuilding,
  FaChurch,
  FaCross,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const services = [
  {
    title: "Fiestas de cumpleaños",
    description:
      "Decoraciones personalizadas con globos para hacer tu cumpleaños inolvidable.",
    icon: <FaBirthdayCake className="text-pink-600 text-4xl" />,
  },
  {
    title: "Baby Showers",
    description:
      "Montajes elegantes para darle la bienvenida a tu bebé con amor.",
    icon: <FaBaby className="text-blue-600 text-4xl" />,
  },
  {
    title: "Bautizos",
    description:
      "Decoración especial para bautizos con un toque angelical y elegante.",
    icon: <FaChurch className="text-cyan-600 text-4xl" />,
  },
  {
    title: "Primera Comunión",
    description:
      "Ambientes delicados y sofisticados para celebrar la Primera Comunión.",
    icon: <FaCross className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Arcos de globos",
    description:
      "Hermosos arcos de globos para entradas, fondos y decoración de eventos.",
    icon: <GiPartyPopper className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Decoraciones temáticas",
    description:
      "Montajes temáticos personalizados para cualquier tipo de evento.",
    icon: <FaGift className="text-green-500 text-4xl" />,
  },
  {
    title: "Eventos corporativos",
    description: "Decoración profesional para eventos empresariales.",
    icon: <FaBuilding className="text-gray-700 text-4xl" />,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const section = document.getElementById("services");
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
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4 text-lg dark:text-white"
        >
          Hacemos de tus celebraciones momentos inolvidables con decoraciones
          impresionantes.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition ${
                index === services.length - 1 && services.length % 3 === 1
                  ? "lg:col-start-2"
                  : ""
              }`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
