import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const LandingPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default LandingPage;
