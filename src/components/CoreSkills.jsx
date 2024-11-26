import React from "react";

const CoreSkills = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          My Core Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard
            title="Web Development"
            description="Explore more →"
            background="WebDev.png"
          />
          <SkillCard
            title="Software Engineering"
            description="Explore more →"
            background="SoftwareEngineering.png"
          />
          <SkillCard
            title="UI/UX Design"
            description="Explore more →"
            background="UIDesign.png"
          />
          <SkillCard
            title="Project Management"
            description="Explore more →"
            background="ProjectManagement.png"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, description, background }) => (
  <div
    className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
    style={{
      width: "100%", // Makes the card responsive
      maxWidth: "260px",
      aspectRatio: "260 / 430", // Maintains the aspect ratio
      margin: "auto",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
    {/* Align content to the left */}
    <div className="absolute bottom-0 left-0 p-4 z-10 text-left">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <a
        href="#"
        className="text-blue-400 text-sm font-medium hover:underline flex items-center"
      >
        {description}
        <span className="ml-1"></span>
      </a>
    </div>
  </div>
);

export default CoreSkills;
