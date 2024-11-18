import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8">
        Your journey starts here. Let's build something amazing.
      </p>
      <button
        onClick={() => navigate("/landing")}
        className="px-6 py-3 bg-green-500 text-black rounded-lg shadow-lg hover:bg-green-400 hover:shadow-xl transition-all"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Welcome;
