import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.jpg";

const HeroSection = () => {
  const [isSignup, setIsSignup] = useState(false); // To toggle between login and signup
  const [modalOpen, setModalOpen] = useState(false); // To manage modal visibility

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full flex justify-center py-4">
        <h1 className="text-6xl font-bold text-white">Exp Track</h1>
      </div>
      {/* Hero Section */}
      <div className="h-screen bg-blue-500 text-white flex items-center justify-between px-8 py-20">
        {/* Left Text Section */}
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
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Image Section */}
        <div className="block lg:hidden w-full lg:w-1/2">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 5,
              x: "-10px", // Shift image to the left when hovered
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <motion.img
              src={heroImage} // Replace with your image
              alt="Expense Tracker"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>

        {/* For larger screens */}
        <div className="hidden lg:block w-full lg:w-1/2">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 5,
              x: "-10px", // Shift image to the left when hovered
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <motion.img
              src={heroImage} // Replace with your image
              alt="Expense Tracker"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Modal for Login/Signup */}
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          id="modal-background"
          onClick={(e) => {
            if (e.target.id === "modal-background") {
              closeModal(); // Close modal if clicked outside the card
            }
          }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
            <form>
              {isSignup && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {isSignup ? "Sign Up" : "Login"}
              </motion.button>
            </form>
            <div className="text-center mt-4">
              <span>
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button onClick={toggleForm} className="text-blue-500 hover:underline">
                      Login here
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button onClick={toggleForm} className="text-blue-500 hover:underline">
                      Sign up here
                    </button>
                  </>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
