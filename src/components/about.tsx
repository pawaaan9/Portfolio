// components/About.tsx
import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect"; // Import HoverEffect component

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-custom-blue text-white overflow-hidden mt-0" // Added pt-20
    >
      {/* SparklesCore as background */}

      {/* Extended Box Container with Content */}
      <div
        className="relative z-10 text-center p-8 border border-[#D3D8F4] rounded-lg bg-opacity-20 bg-[#0A3673] shadow-lg w-full max-w-6xl min-h-[300px] sm:min-h-[400px] mx-5">
        <h5 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide mb-6 fade-in">
          <span className="text-[#D3D8F4]">Who Am I ?</span>
        </h5>

        {/* Content */}
        <p className="text-base md:text-lg text-[#D3D8F4] fade-in mb-6">
          Hi, I’m Pawan Dhanapala from Sri Lanka! As a passionate Software Developer and
          third-year IT undergraduate, I thrive on transforming ideas into
          impactful digital solutions. My journey in tech has been fueled by
          curiosity, continuous learning, and hands-on experience across web and
          mobile development. I'm excited to showcase my skills, projects, and
          vision for innovation. <br />
          Let’s connect and build something great together!
        </p>
        
        <HoverEffect items={projects} className="mx-auto" />
      </div>
    </div>
  );
};

export default About;

export const projects = [
  {
    title: "Full-Stack Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    emoji: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    emoji: "🎨",
  },
  {
    title: "Mobile Development",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    emoji: "📱",
  },
  {
    title: "Graphic Design",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    emoji: "🖌️",
  }
];