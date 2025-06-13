import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import testimonial1 from './assets/images/test1.jpg';
import testimonial2 from './assets/images/test2.jpg';
import testimonial3 from './assets/images/test3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Asiimwe Rhinah',
      role: 'Director, Karoth Kids Foundation',
      quote:
        'Akoragye Osbert is a true definition of leadership with heart. His passion for uplifting youth voices and creating spaces for students to express themselves is unmatched. Every project he touches leaves a lasting impact. I’m proud to be part of his circle!',
      image: testimonial1,
    },
    {
      name: 'Akamumpa Lehman',
      role: 'Director, Lens Crafted Images',
      quote:
        'Working with Akoragye Osbert has been one of the most inspiring experiences of my life. His creativity, ambition, and unstoppable drive to create opportunities for others make him a force to reckon with. Osbert isn’t just a leader — he’s a movement',
      image: testimonial2,
    },
    {
      name: 'Ahumuza Bells',
      role: 'Community Leader',
      quote:
        'Your work matters! I have someone eagerly awaiting your next project, and I’ve assured them you’ll deliver the best. They’re ready to offer you a major project for their company.',
      image: testimonial3, // Assumes testimonial3 is an imported image, e.g., import testimonial3 from './assets/images/testimonial3.jpg';
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-gradient-to-r from-indigo-900 to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white tracking-wide'>
          Testimonials
        </h2>
        <div className='relative overflow-hidden'>
          <motion.div
            className='flex'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={currentIndex}
              className='w-full flex-shrink-0'
              custom={currentIndex}
              variants={slideVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 0.5 }}
            >
              <div className='bg-indigo-950 p-6 rounded-lg shadow-lg flex items-center space-x-6'>
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className='w-24 h-24 rounded-full object-cover border-2 border-yellow-400'
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className='italic text-white mb-4'>
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h3 className='font-semibold text-yellow-400'>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className='text-gray-300'>
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className='flex justify-center mt-6 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
