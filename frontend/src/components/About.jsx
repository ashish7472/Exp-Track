import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen bg-gray-200 flex items-center justify-center"
    >
      {/* Container for the section */}
      <motion.div
        className="flex items-center max-w-7xl mx-auto px-6 py-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Card with Image */}
        <motion.div
          className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{
            scale: 1.05, // Slightly enlarge on hover
            rotate: 5, // Slight rotation on hover for a more dynamic feel
            transition: { duration: 0.3 } // Smooth transition for the hover effect
          }}
        >
          <img
            src={image} // Replace with your actual image
            alt="Expense Tracker"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side with Information */}
        <div className="w-full lg:w-1/2 pl-8">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.1, // Scale up the title on hover for a more dynamic effect
              color: "#1D4ED8", // Change color on hover (blue for a sleek look)
              transition: { duration: 0.3 }
            }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              color: "#1D4ED8", // Change color to blue on hover
              scale: 1.05, // Slightly enlarge the text on hover
              transition: { duration: 0.3 }
            }}
          >
            We help you take control of your finances with a user-friendly expense tracker.
          </motion.p>
          <motion.p
            className="text-md text-gray-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              color: "#1D4ED8", // Color change on hover
              scale: 1.05, // Slight scale on hover
              transition: { duration: 0.3 }
            }}
          >
            Our platform provides a seamless way for you to track your spending, manage your budget, and make informed financial decisions. Whether you're trying to save money or just get a better understanding of your spending habits, our app has you covered with simple yet powerful tools to help you achieve your financial goals.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
