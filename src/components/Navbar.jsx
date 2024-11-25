import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/C.png" className="h-8 rounded-full" alt="CB Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CB Portfolio
          </span>
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="font-medium flex space-x-8">
            <li>
              <NavLink to="/landing" className="text-gray-900 dark:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-900 dark:text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="text-white text-2xl space-y-6">
            <li>
              <NavLink to="/landing" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
