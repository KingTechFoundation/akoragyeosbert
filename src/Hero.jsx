import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
} from 'react-icons/fa';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import profileImg from './assets/images/imge4.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showBio, setShowBio] = useState(false);
  const images = [img1, img2, img3];

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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const bio = `
    My name is Akoragye Osbert, a Ugandan male born on 12th November 2003 in Kabobo Village, Rukungiri District. I am a self-motivated, passionate, and community-driven individual with strong leadership, entrepreneurship, and communication skills. Currently pursuing a Diploma in Computer Science at Uganda Institute of Information Technology (UICT), I have actively served in various leadership positions, including National Coordinator at Bombi Academic Guidance and Advice Conference and Head of Publicity for United Nations Youth Community Clubs (UNYCC). I am also the founder of UGANDA UNIVERSITY STUDENTS ON X (UUSOX), an initiative aimed at empowering university students through leadership, networking, and career growth. With a background in managing multiple social media platforms and influencing for several brands, I am dedicated to giving back to my community with integrity, teamwork, and professionalism. I am fluent in English and Runyankole-Rukiga.
  `;

  return (
    <section
      id='about'
      className='h-[70vh] flex items-center justify-between bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden px-4 sm:px-6 lg:px-8'
    >
      <div className='absolute inset-0'>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className='w-full h-full object-cover opacity-40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        className='relative z-20 text-left w-full sm:w-1/2 pr-4 bg-black bg-opacity-50 p-6 rounded-lg'
        initial='hidden'
        animate='visible'
        variants={textVariants}
      >
        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide font-inter mb-4'
          variants={textVariants}
        >
          {[
            'H',
            'e',
            'l',
            'l',
            'o',
            ' ',
            'I,',
            ' ',
            'a',
            'm',
            ' ',
            'A',
            'k',
            'o',
            'r',
            'a',
            'g',
            'y',
            'e',
            ' ',
            'O',
            's',
            'b',
            'e',
            'r',
            't',
          ].map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-200 mb-4'>
          Director & President, UUSOX | Diploma in Computer Science
        </p>
        <div className='flex space-x-4 mb-6'>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 10 }}
              className='text-xl sm:text-2xl md:text-3xl text-gray-200 hover:text-yellow-400 transition duration-300'
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <motion.button
          onClick={() => setShowBio(true)}
          className='px-6 py-3 bg-gray-200 text-indigo-900 font-semibold rounded-full hover:bg-gray-300 transition duration-300'
        >
          More About
        </motion.button>
      </motion.div>
      <motion.div
        className='relative z-20 w-full sm:w-1/2 flex justify-end'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className='flex flex-col items-end'>
          <motion.img
            src={profileImg}
            alt='Osbert'
            className='w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 shadow-lg mb-4'
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {showBio && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4'
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <motion.div className='bg-indigo-900 p-6 rounded-lg shadow-lg max-w-md w-full text-white relative'>
              <button
                onClick={() => setShowBio(false)}
                className='absolute top-4 right-4 text-white text-2xl font-bold'
              >
                ×
              </button>
              <h2 className='text-3xl font-bold mb-4'>About Me</h2>
              <p className='text-lg leading-relaxed'>{bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
