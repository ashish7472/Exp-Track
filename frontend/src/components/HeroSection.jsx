import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="absolute top-0 left-0 w-full flex justify-center py-4">
        <h1 className="text-6xl font-bold text-white">Exp Track</h1>
      </div>
      <div className="h-screen bg-blue-500 text-white flex items-center justify-between px-8 py-20">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">Track Your Expenses with Ease</h1>
          <p className="mt-4 text-lg">
            <Typewriter
              options={{
                strings: [
                  "Manage your budget like a pro with our powerful expense tracker.",
                  "Track every penny effortlessly.",
                  "Stay on top of your financial goals.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </p>
          <motion.button
            onClick={() => navigate("/signup")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200"
          >
            Get Started
          </motion.button>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5, x: "-10px" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <motion.img
              src={heroImage}
              alt="Expense Tracker"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
