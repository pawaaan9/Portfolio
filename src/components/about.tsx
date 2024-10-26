// components/About.tsx
import React from 'react';
import { SparklesCore } from "@/components/ui/sparkles"; // Adjust the import path based on your setup

const About: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-custom-blue text-white overflow-hidden">
      
      {/* SparklesCore as background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-about"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Extended Box Container with Content */}
      <div className="relative z-10 text-center p-8 border border-[#D3D8F4] rounded-lg bg-opacity-20 bg-[#0A3673] shadow-lg w-full max-w-2xl min-h-[180px] sm:min-h-[220px] mx-5">
        <h5 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide mb-6 fade-in">
          <span className="text-[#D3D8F4]">Something Little About Me</span>
        </h5>

        {/* Content */}
        <p className="text-base md:text-lg text-[#D3D8F4] fade-in">
          Welcome to my portfolio! Explore my work, skills, and projects, 
          showcasing my passion and expertise in Software Development. Let's connect and create something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
