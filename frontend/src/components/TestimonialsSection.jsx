import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import narutoImage from '../assets/naruto.jpeg';
import obitoImage from '../assets/obito.jpg';
import nejiImage from '../assets/neji.jpg';

const testimonials = [
  {
    name: "Naruto Uzumaki",
    feedback: "This expense tracker completely changed the way I manage my budget. Highly recommended!",
    image: narutoImage, // Replace with user images if available
  },
  {
    name: "Tobi Uchiha",
    feedback: "I love the simplicity and design of this tool. It's perfect for tracking expenses on the go!",
    image: obitoImage,
  },
  {
    name: "Neji Hyuga",
    feedback: "The analytics feature helped me save more money by identifying unnecessary expenses.",
    image: nejiImage,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-80 text-left"
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Final animation state
            transition={{
              type: "spring", // Smooth spring-like transition
              stiffness: 200, // Controls the spring stiffness for hover
              damping: 20, // Reduces the bounce effect
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98, // Slight shrink effect on click
            }}
          >
            <img
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="rounded-full mx-auto mb-4 w-[100px] h-[100px]"
            />
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
