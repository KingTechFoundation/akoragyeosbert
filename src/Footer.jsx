import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/akoragye-osbert-37369831a',
      name: 'LinkedIn',
    },
    { icon: <FaTwitter />, url: 'https://x.com/OsbertAkoragye', name: 'X' },
    {
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/AkoragyeOsbert',
      name: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/akoragyeosbert57',
      name: 'Instagram',
    },
    {
      icon: <FaSnapchat />,
      url: 'https://www.snapchat.com/add/akoragyeosbert',
      name: 'Snapchat',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:akoragyeosbert58@gmail.com',
      name: 'Email',
    },
  ];

  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className='py-8 bg-gradient-to-r from-indigo-950 to-blue-950 text-white'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold mb-2'>Contact Me</h3>
            <p className='mb-2'>Tel: +256 781391559 / +256 741553707</p>
            <p>
              Email:{' '}
              <a
                href='mailto:akoragyeosbert58@gmail.com'
                className='text-yellow-400 hover:underline'
              >
                akoragyeosbert58@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-2'>Follow Me</h3>
            <div className='flex justify-center space-x-4'>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='text-2xl text-gray-200 hover:text-yellow-400 transition duration-300'
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className='text-center md:text-right'>
            <p>© {currentYear} Akoragye Osbert. All Rights Reserved.</p>
          </div>
        </div>
        <div className='text-center text-sm text-gray-400'>
          <p>Designed with ❤️ by Akoragye Osbert</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
