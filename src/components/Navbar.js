'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 bg-white shadow-md z-50 min-h-20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ul className="flex justify-center gap-10 py-6 font-semibold text-gray-700 text-lg">
        <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
