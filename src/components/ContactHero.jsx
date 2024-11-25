import React from "react";
import ParticleBackground from "../components/ParticleBackground";

const ContactHero = () => {
  return (
    <div className="relative flex items-center justify-center h-[40vh] text-center bg-gradient-to-br from-gray-800 to-black text-white">
      <ParticleBackground />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-gray-400 text-lg">
          Whether you want to collaborate or just say hi, I'd love to hear from
          you.
        </p>
        <a
          href="#contact-form"
          className="mt-6 inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ContactHero;
