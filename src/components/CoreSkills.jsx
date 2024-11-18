import React from "react";

const CoreSkills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          My Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Web Development
            </h3>
            <p className="text-gray-400">
              Building responsive and modern websites using React, TailwindCSS,
              and more.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Software Engineering
            </h3>
            <p className="text-gray-400">
              Crafting efficient, scalable, and maintainable software solutions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              UI/UX Design
            </h3>
            <p className="text-gray-400">
              Designing intuitive and user-friendly interfaces with attention to
              detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;
