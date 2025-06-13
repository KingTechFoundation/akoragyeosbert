import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'akoragyeosbert58@gmail.com',
        },
        'user_your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error);
          setError(true);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-r from-indigo-900 to-gray-800'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white tracking-wide'>
          Get in Touch
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-6'
          >
            <div className='flex items-center space-x-3'>
              <FaPhone className='text-yellow-400 text-2xl' />
              <p className='text-white'>+256 781391559 / +256 741553707</p>
            </div>
            <div className='flex items-center space-x-3'>
              <FaEnvelope className='text-yellow-400 text-2xl' />
              <p className='text-white'>akoragyeosbert58@gmail.com</p>
            </div>
            <div className='flex items-center space-x-3'>
              <FaMapMarkerAlt className='text-yellow-400 text-2xl' />
              <p className='text-white'>
                Kabobo, Kyaruyenje, Buhunga, Rukungiri District
              </p>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='w-full p-4 rounded-lg bg-indigo-950 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='w-full p-4 rounded-lg bg-indigo-950 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              className='w-full p-4 rounded-lg bg-indigo-950 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              rows='6'
              required
            ></textarea>
            <motion.button
              type='submit'
              whileHover={{ scale: 1.05, backgroundColor: '#facc15' }}
              whileTap={{ scale: 0.95 }}
              className='w-full p-4 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow-md transition duration-300'
            >
              Send Message
            </motion.button>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className='text-center bg-green-500 text-white p-3 rounded-lg mt-4'
                >
                  Message Sent Successfully!
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className='text-center bg-red-500 text-white p-3 rounded-lg mt-4'
                >
                  Failed to Send Message. Please Try Again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
