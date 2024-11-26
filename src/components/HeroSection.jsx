import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('./HeroImg.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
      <div className="text-center relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Unleash Your Creativity
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl mb-8">
          Discover unique projects and a journey of innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            View Portfolio
          </button>
          <button className="px-6 py-3 bg-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-600 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
