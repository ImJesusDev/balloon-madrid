"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const section = document.getElementById("contact");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.message) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const whatsappNumber = "34692206268";
    const whatsappMessage = `${formData.message}. Mi nombre es ${formData.name}. `;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-200 text-center"
        >
          Contáctanos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4 text-lg text-center dark:text-white"
        >
          ¿Tienes preguntas? ¿Quieres reservar un evento? Rellena el formulario
          y nos pondremos en contacto contigo.
        </motion.p>

        {/* Form Animation */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-center mb-4"
            >
              {error}
            </motion.p>
          )}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center mb-4"
            >
              {success}
            </motion.p>
          )}

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-4"
          >
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">
              Nombre *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
              placeholder="Tu nombre"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-4"
          >
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">
              Mensaje *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg"
              placeholder="Ejemplo: Me gustaría un presupuesto para una cumpleaños, la temática es Bluey y Bingo, el 20 de mayo en Madrid."
              rows={5}
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-400 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2"
          >
            Enviar Mensaje
            <FaWhatsapp className="text-2xl hover:text-green-500 transition dark:hover:text-green-400" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
