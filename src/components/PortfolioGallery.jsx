import React from "react";

const PortfolioGallery = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Portfolio Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Project 1
              </h3>
              <p className="text-gray-400">
                A brief description of the project.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Project 2
              </h3>
              <p className="text-gray-400">
                A brief description of the project.
              </p>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Project 3
              </h3>
              <p className="text-gray-400">
                A brief description of the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
