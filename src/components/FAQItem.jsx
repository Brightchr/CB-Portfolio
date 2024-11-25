import React, { useState } from "react";

const FAQItem = ({ question, answer, services }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg ${
        isOpen ? "shadow-lg" : "shadow-md"
      } cursor-pointer relative z-20`} // Higher z-index
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen);
      }}
    >
      <div className="flex items-center">
        <span
          className={`text-blue-400 transform transition-transform mr-3 ${
            isOpen ? "rotate-90" : ""
          }`}
          style={{ fontSize: "1rem", lineHeight: "1rem" }}
        >
          ▶
        </span>
        <span className="text-white font-medium">{question}</span>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-300">{answer}</p>
          {services && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-semibold">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
