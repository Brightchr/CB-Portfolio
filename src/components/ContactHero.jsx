import React from "react";

const ContactHero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('./ContactHero.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
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
