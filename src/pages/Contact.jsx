import React from "react";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <ContactHero />
      <main className="max-w-6xl mx-auto space-y-12 px-4">
        <FAQs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
