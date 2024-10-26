"use client";

import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/Facebook.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { SparklesCore } from "@/components/ui/sparkles";
import myphoto from "../../assets/pawan dhanapala.png";
import ShinyButton from "../components/ui/shiny-button";

const words = ["FULLSTACK DEVELOPER", "UNDERGRADUATE"];

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-custom-blue text-[#D3D8F4] overflow-hidden">
      {/* SparklesCore as background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#D3D8F4"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-5 md:px-0 space-y-6 md:space-y-8">
        {/* Left: Profile Photo */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src={myphoto}
            alt="Pawan Dhanapala"
            width={400}
            height={400}
            className="transition-transform duration-300"
          />
        </div>

        {/* Right: Main Content */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-wide">
            PAWAN DHANAPALA
          </h1>

          {/* Flipping Words */}
          <span className="text-xl md:text-3xl tracking-wider mt-1 md:mt-4 ml- -m-1.5">
            <FlipWords words={words} />
          </span>

          {/* Let's Talk Button */}
          <ShinyButton className="ml-1">Let's Talk</ShinyButton>

          {/* Social Media Links Button Set */}
          <div className="flex flex-col items-center space-y-3">
            <p className="text-lg font-bold ml-1">Check Out My</p>

            <div className="flex space-x-4 bg-[#1a1a2e] px-5 py-3 rounded-full shadow-lg">
              {/* GitHub */}
              <a
                href="https://github.com/pawaaan9"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
              >
                <Image src={github} alt="GitHub" width={30} height={30} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pawan-dhanapala-977572231/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
              >
                <Image src={linkedin} alt="LinkedIn" width={30} height={30} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pawaan._/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
              >
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/profile.php?id=100007576276522"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-125"
              >
                <Image src={facebook} alt="Facebook" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
