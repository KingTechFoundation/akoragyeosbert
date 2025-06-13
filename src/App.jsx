import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Education from './Education';
import Skills from './Skills';
import Social from './Social';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-900 to-gray-900 text-white min-h-screen font-sans'>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Social />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
