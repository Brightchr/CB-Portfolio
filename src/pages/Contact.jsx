import React from "react";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
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
