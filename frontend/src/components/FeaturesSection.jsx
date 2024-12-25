import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const features = [
  { title: "Easy to Use", description: "Simple interface for managing expenses." },
  { title: "Secure", description: "Your data is always safe with us." },
  { title: "Analytics", description: "Visualize your spending habits easily." },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="flex justify-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded shadow-lg w-60"
            initial={{ opacity: 0, y: 50 }} // Initial fade-in and slide-up state
            animate={{ opacity: 1, y: 0 }} // Final visible state
            transition={{
              type: "spring", // Spring effect for hover
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05, // Smooth hover scaling
            }}
            whileTap={{
              scale: 0.98, // Subtle shrink on tap
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
