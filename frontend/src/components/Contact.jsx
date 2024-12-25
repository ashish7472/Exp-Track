import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields before sending.", {
        // position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:ashishrolan292@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show success notification
    toast.success("Message sent successfully!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-blue-100 flex items-center justify-center"
    >
      <ToastContainer />
      <div className="w-full max-w-6xl p-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section (Contact Information) */}
        <div className="w-full lg:w-1/2 space-y-8 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-6 text-center lg:text-left text-blue-600">
            Contact
          </h2>
          <p className="text-2xl text-gray-600 text-center lg:text-left">
            Have questions? Reach out to us at support@exptrack.com
          </p>

          {/* Contact Information */}
          <div className="space-y-6 text-xl text-gray-600">
            <div className="flex items-center space-x-6">
              <FaPhoneAlt className="text-blue-600 text-3xl" />
              <span className="text-xl">+91 0000000000</span>
            </div>
            <div className="flex items-center space-x-6">
              <FaEnvelope className="text-blue-600 text-3xl" />
              <span className="text-xl">ashishrolan292@gmail.com</span>
            </div>
            <div className="flex items-center space-x-6">
              <FaMapMarkerAlt className="text-blue-600 text-3xl" />
              <span className="text-xl">Rajasthan, India</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 text-3xl mt-6 justify-center lg:justify-start">
            <motion.a
              href="https://www.linkedin.com/in/ashish-rolan-7088a925b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin className="text-blue-600 hover:text-blue-800 transition-all duration-200" />
            </motion.a>

            <motion.a
              href="https://github.com/ashish7472"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub className="text-gray-700 hover:text-black transition-all duration-200" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInstagram className="text-gray-700 hover:text-gray-800 transition-all duration-200" />
            </motion.a>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="w-full lg:w-1/2 bg-blue-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-center text-blue-600">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-blue-600 transition-all ease-in-out duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="text-xl" />
              <span className="text-lg">Send Message</span>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
