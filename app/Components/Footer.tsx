"use client";

import React from "react";
import { FaFacebookF, FaYoutube, FaAngleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">About</h2>
            <p className="text-gray-600 mb-4">
            Infinity Construction NYC is a leading provider of quality restoration services in the tri-state area, and is a leading construction company.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-white bg-black p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Masonry
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Masonry
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Paving
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Stucco Work
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">Services</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Historical Landmarks Design Restoration
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Brownstone Restoration
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Brownstone Facade Restoration
                </a>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <a href="#" className="text-gray-600 hover:text-orange-600">
                Brick Pointing
                </a>
              </li>
             
            </ul>
          </div>

          {/* Call Us & Visit Us Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">Contact Us</h2>
            Call Us
            <p className="text-gray-600 mb-2">347-939-5779</p>
            Mail Us
            <p className="text-gray-600 mb-2">infinityconstructionnyc@gmail.com</p>
            Location
            <p className="text-gray-600 mb-2">1809 Albany Avenue, NY 11210</p>
          </div>
        </div>
      </div>

      {/* Full-Width Copyright Section */}
      <div className="text-center mt-10 text-white text-sm bg-black w-full py-4">
        © COPYRIGHT 2024 ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
