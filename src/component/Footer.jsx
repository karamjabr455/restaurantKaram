import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './styles/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
         {/* Contact Information Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 glowing-text">Contact Us</h2>
            <p className="mb-2">Syria Damascus, Food City, FC 12345</p>
            <p className="mb-2">Phone: 0996369002</p>
            <p>Email: abua33012@gmail.com</p>
          </div>

      {/* Social Media Links Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 glowing-text">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-yellow-400 transition duration-300 ease-in-out" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-yellow-400 transition duration-300 ease-in-out" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-yellow-400 transition duration-300 ease-in-out" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-2xl hover:text-yellow-400 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>

         {/* Copyright section */}
          <div>
            <p className="text-center md:text-right glowing-text">
              &copy; {new Date().getFullYear()} karam Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
