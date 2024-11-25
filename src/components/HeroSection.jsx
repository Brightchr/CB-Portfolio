import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center text-white">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Build Your Future
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          Explore my portfolio to learn about my journey, skills, and projects.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition-all">
            View Portfolio
          </button>
          <button className="px-6 py-3 bg-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-600 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
