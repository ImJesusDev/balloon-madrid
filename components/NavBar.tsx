"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f4f3ed] shadow-md fixed top-0 left-0 z-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-pink-600">
          <Image
            src="/logo.png"
            alt="Balloon Madrid"
            width={50}
            height={50}
            className="w-full h-auto rounded-lg"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/#services" className="hover:text-pink-600">
            Servicios
          </Link>
          <Link href="/#gallery" className="hover:text-pink-600">
            Galería
          </Link>
          <Link href="/#contact" className="hover:text-pink-600">
            Contacto
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Animated with Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg absolute top-24 left-0 w-full dark:bg-gray-900 dark:text-white"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              <Link
                href="/#services"
                className="hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#gallery"
                className="hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="/#contact"
                className="hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
