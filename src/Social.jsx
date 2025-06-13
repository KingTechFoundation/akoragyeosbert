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

const Social = () => {
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

  return (
    <section
      id='social'
      className='py-20 bg-gradient-to-r from-indigo-900 to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white tracking-wide'>
          Connect with Me
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-indigo-950 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-yellow-400 hover:text-indigo-900 transition duration-300 transform hover:-translate-y-2'
            >
              <div className='text-3xl sm:text-4xl'>{link.icon}</div>
              <div>
                <h3 className='font-semibold text-white'>{link.name}</h3>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-indigo-900 underline transition duration-300'
                >
                  {link.name === 'Email' ? 'Send Email' : 'Visit Profile'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
