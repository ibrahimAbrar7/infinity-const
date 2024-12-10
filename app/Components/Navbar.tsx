"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Define the type for props
type NavbarProps = {
  isScrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`transition-all duration-300 border-b bg-[white] shadow-md ${
        isScrolled ? "fixed top-0 left-0 w-full z-40" : "relative"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Text */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/infinity-logo.png"
              alt="Company Logo"
              width={50} // Adjust size as needed
              height={50}
              className="h-12"
            />
            <div className="flex flex-col text-center">
              <span className="text-lg font-bold text-[black]">
                Infinity Construction NYC
              </span>
              <span className="text-sm text-[black]">
                Quality is our specialty
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm text-black font-medium tracking-wide">
          <a href="/" className="text-orange-600 hover:text-orange-600 transition-colors duration-200">
            HOME
          </a>
          <a href="/services" className="hover:text-orange-600 transition-colors duration-200">
            SERVICES
          </a>
          <a href="/projects" className="hover:text-orange-600 transition-colors duration-200">
            PROJECTS
          </a>
          <a href="/blog" className="hover:text-orange-600 transition-colors duration-200">
            BLOG
          </a>
          <a href="/gallery" className="hover:text-orange-600 transition-colors duration-200">
            GALLERY
          </a>
          <a href="/more" className="hover:text-orange-600 transition-colors duration-200">
            MORE
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4 font-medium">
            <a href="/" className="hover:text-blue-600 transition-colors duration-200">
              HOME
            </a>
            <a href="/services" className="hover:text-blue-600 transition-colors duration-200">
              SERVICES
            </a>
            <a href="/projects" className="hover:text-blue-600 transition-colors duration-200">
              PROJECTS
            </a>
            <a href="/blog" className="hover:text-blue-600 transition-colors duration-200">
              BLOG
            </a>
            <a href="/gallery" className="hover:text-blue-600 transition-colors duration-200">
              GALLERY
            </a>
            <a href="/contact" className="hover:text-blue-600 transition-colors duration-200">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
