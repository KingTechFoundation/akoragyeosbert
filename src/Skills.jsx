import React from 'react';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaLightbulb,
  FaComment,
  FaLaptop,
  FaUsers,
  FaCheck,
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'Leadership', level: 90, icon: <FaStar /> },
    { name: 'Entrepreneurship', level: 85, icon: <FaLightbulb /> },
    { name: 'Communication', level: 95, icon: <FaComment /> },
    { name: 'Computer Literacy', level: 80, icon: <FaLaptop /> },
    { name: 'Team Work', level: 90, icon: <FaUsers /> },
    { name: 'Work Accuracy', level: 95, icon: <FaCheck /> },
  ];

  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-r from-indigo-900 to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white tracking-wide'>
          Skills
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-indigo-950 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300'
            >
              <div className='flex items-center mb-4'>
                {skill.icon}
                <h3 className='text-xl font-semibold text-white ml-2'>
                  {skill.name}
                </h3>
              </div>
              <div className='w-full bg-gray-700 rounded-full h-2.5'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className='bg-yellow-400 h-2.5 rounded-full'
                />
              </div>
              <p className='text-right text-sm text-gray-300 mt-1'>
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
