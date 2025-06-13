import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 w-full bg-gradient-to-r from-indigo-950 to-blue-950 bg-opacity-95 backdrop-blur-md z-50 shadow-lg transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <img
          src={logo}
          alt='Akoragye Osbert Logo'
          className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain'
        />

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8'>
          {[
            'About',
            'Education',
            'Skills',
            'Social',
            'Testimonials',
            'Contact',
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className='text-gray-200 text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-200 hover:text-yellow-400 focus:outline-none'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col items-center bg-indigo-950 bg-opacity-95 py-6 space-y-4'>
          {[
            'About',
            'Education',
            'Skills',
            'Social',
            'Testimonials',
            'Contact',
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className='text-gray-200 text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out'
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
