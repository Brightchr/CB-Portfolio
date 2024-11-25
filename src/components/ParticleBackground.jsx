import React from "react";
import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  const particlesConfig = {
    background: {
      color: { value: "#000" },
    },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      size: { value: 4 },
      move: { enable: true, speed: 2 },
    },
  };

  return <Particles options={particlesConfig} />;
};

export default ParticleBackground;
