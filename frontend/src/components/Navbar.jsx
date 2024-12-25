import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-blue-500 text-white flex justify-between items-center px-6 py-4 z-50 transition-shadow duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors duration-300">
        ExpTrack
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <motion.button
          onClick={() => scrollToSection("about")}
          className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About Us
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("contact")}
          className="text-lg font-medium hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
