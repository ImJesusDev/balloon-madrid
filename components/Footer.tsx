// components/Footer.tsx
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Logo & Copyright */}
        <div>
          <h3 className="text-2xl font-bold">🎈 Balloon Madrid</h3>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* Instagram */}
          <Link
            href="https://instagram.com/_balloonmadrid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 transition dark:hover:text-pink-400" />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/34692206268"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl hover:text-green-500 transition dark:hover:text-green-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
