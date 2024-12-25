import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
