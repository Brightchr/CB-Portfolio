import React from "react";
import CoreSkills from "../components/CoreSkills";
import HeroSection from "../components/HeroSection";
import PortfolioGallery from "../components/PortfolioGallery";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <CoreSkills />
      <PortfolioGallery />
      <Footer />
    </div>
  );
};

export default Landing;
