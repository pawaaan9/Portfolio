import React from 'react';
import { SparklesCore } from "@/components/ui/sparkles"; // Adjust the import path based on your setup

const Contact: React.FC = () => {
  return (
    <div id='contact' className="relative h-screen flex items-center justify-center bg-custom-blue text-white overflow-hidden">

      {/* SparklesCore as background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-contact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide mb-8">
          Get in <span className="text-pink-500">Touch</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Feel free to contact me regarding project collaborations, questions, or just to say Hello!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <a href="mailto:pawankanchana99@gmail.com" className="text-lg md:text-xl text-pink-500 hover:underline">
            pawankanchana99@gmail.com
          </a>
          <a href="tel:+94764707720" className="text-lg md:text-xl text-pink-500 hover:underline">
            +94764707720
          </a>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded-full text-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-full text-black"
            required
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded-lg text-black"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
