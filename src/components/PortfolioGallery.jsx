import React from "react";

const PortfolioGallery = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Portfolio Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <PortfolioCard
            image="https://via.placeholder.com/400x300"
            title="Project 1"
            description="A brief description of the project."
          />
          <PortfolioCard
            image="https://via.placeholder.com/400x300"
            title="Project 2"
            description="A brief description of the project."
          />
          <PortfolioCard
            image="https://via.placeholder.com/400x300"
            title="Project 3"
            description="A brief description of the project."
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ image, title, description }) => (
  <div className="bg-custom-dark rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default PortfolioGallery;
