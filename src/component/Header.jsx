import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // import icons and "close"
import { Link } from 'react-router-dom'; // Import Link from the router library
import logo from '../image/Black Brown Vintage Restaurant Badge Logo (1).png'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-24 flex items-center justify-between px-8 shadow-lg rounded-lg overflow-hidden relative">
      <img
        src={logo}
        alt="Restaurant Logo"
        className="h-12 w-auto rounded-full border-2 border-white shadow-lg transition-transform transform hover:scale-125"
        style={{ filter: 'drop-shadow(2px 4px 6px var(--foreground))' }}
      />
      <div className="hidden md:flex space-x-8 text-lg">
        <Link
          to="/"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Menu
        </Link>
        <Link
          to="/reservations"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Reservations
        </Link>
        <Link
          to="/kitchen"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Kitchen
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact Us
        </Link>
      </div>
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-gradient-to-r from-blue-500 to-green-500 z-50 flex flex-col items-center justify-center transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} duration-300 ease-in-out`}
          style={{ height: '30%' }}
        >
          <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={toggleMenu}>
            <FaTimes size={30} />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              to="/reservations"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              Reservations
            </Link>
            <Link
              to="/kitchen"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              Kitchen
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <button className="bg-yellow-400 text-zinc-800 hover:bg-yellow-300 px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
        <span className="font-bold">Book Now</span>
      </button>
    </div>
  );
}
