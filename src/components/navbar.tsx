"use client"; 

import React, { useState } from 'react';
import Image from 'next/image'; 
import home from '../../assets/home.png'; 
import icon from '../../assets/pawand.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: "#101637" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
      
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={icon} alt="home" width={60} height={60} />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <a href="#hero">
              <Image src={home} alt="home" width={22} height={22} />
            </a>
            <a
              href="#about"
              className="text-[#D3D8F4] hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#myskills"
              className="text-[#D3D8F4] hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              My Skills
            </a>
            <a
              href="#portfolio"
              className="text-[#D3D8F4] hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-[#D3D8F4] hover:underline px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu} 
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"} 
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out bg-[#101637] w-64 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-3 space-y-4"> 
          <a href="#hero" className="items-center text-[#D3D8F4] hover:underline block px-3 py-2 rounded-md text-base font-medium">
            <Image src={home} alt="home" width={22} height={22} className="mr-2" />
          </a>
          
          <hr className="border-[#D3D8F4] border-opacity-20 my-2" /> 
          
          <a
            href="#about"
            className="text-[#D3D8F4] hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          
          <hr className="border-[#D3D8F4] border-opacity-20 my-2" /> 
          
          <a
            href="#myskills"
            className="text-[#D3D8F4] hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            My Skills
          </a>
          
          <hr className="border-[#D3D8F4] border-opacity-20 my-2" /> 
          
          <a
            href="#portfolio"
            className="text-[#D3D8F4] hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Portfolio
          </a>
          
          <hr className="border-[#D3D8F4] border-opacity-20 my-2" /> 
          
          <a
            href="#contact"
            className="text-[#D3D8F4] hover:underline block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          
        </div>
      </div>
      
      {isOpen && (
        <div
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;
