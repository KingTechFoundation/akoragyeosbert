import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBook,
  FaUniversity,
  FaLaptopCode,
} from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const Education = () => {
  const educationData = [
    {
      year: '2024-Present',
      title: 'Diploma in Computer Science',
      place: 'Uganda Institute of Information and Technology',
      icon: <FaLaptopCode className='text-yellow-400 text-2xl mb-2' />,
    },
    {
      year: '2022-2023',
      title: 'Advanced Level',
      place: 'Plus Two High School, Bushenyi',
      icon: <FaUniversity className='text-yellow-400 text-2xl mb-2' />,
    },
    {
      year: '2017-2021',
      title: 'O-Level',
      place: 'Standard College, Ntungamo',
      icon: <FaBook className='text-yellow-400 text-2xl mb-2' />,
    },
    {
      year: '2010-2016',
      title: 'Primary Education',
      place: 'Trinity Nursery and Primary School',
      icon: <FaGraduationCap className='text-yellow-400 text-2xl mb-2' />,
    },
  ];

  const cvContent = `
DIRECTOR & PRESIDENT UGANDA UNIVERSITY STUDENTS ON X (UUSOX)
Tel: +256 781391559 / +256 741553707
Email: akoragyeosbert58@gmail.com

PERSONAL INFORMATION:
First Name: Osbert
Surname: Akoragye
Sex: Male
Marital Status: Single
Nationality: Ugandan
Date of Birth: 12th November 2003
Home Address: Village: Kabobo, Parish: Kyaruyenje, Sub-county: Buhunga, District: Rukungiri District

CAREER OBJECTIVES AND PERSONAL:
I am a self-motivated person who works hard to attain set goals. I am passionate about giving back to my community with integrity and professionalism as a problem solver and team player.
- Serving as National Coordinator at Bombi Academic Guidance and Advice Conference
- Serving as Publicity Minister for United Nations Youth Community Clubs (UNYCC)
- Trusted with various positions in youth and university associations (e.g., Rukungiri University Students Association, Western Uganda University Students Association)

EDUCATION BACKGROUND:
- Primary (2010-2016): Trinity Nursery and Primary School
- O-Level (2017-2021): Standard College Ntungamo
- Advanced Level (2022-2023): Plus Two High School Bushenyi
- Currently: Uganda Institute of Information and Technology (UICT) - Diploma in Computer Science, Year One, Semester Two

SKILLS:
- Great leadership and entrepreneurship skills
- Good communication and ethical skills
- Good computer literacy
- Teamwork
- Work accuracy

SOCIAL MEDIA MANAGEMENT:
I have effectively used my social media handles, especially X (Twitter), where I am an influencer at Obunuzi Restaurant Wadegeya, EMT Cinemas Ham Towers, and Infinite Jewellery Kampala. I started the UGANDA UNIVERSITY STUDENTS ON X (UUSOX) initiative to empower university students through networking, leadership, and career growth.

LANGUAGES:
- English
- Runyankole-Rukiga

REFEREES CONTACTS:
1. Madam Karoth Kedeth, Director Karoth Kids Foundation, 0784730743
2. Ainomugisha Davis, Director Lens Crafted Images, +256756156438

ATTESTATION:
I, Akoragye Osbert, certify that to the best of my knowledge and belief, the information here correctly describes my experience, abilities, and personality.
`;

  const handleDownloadCV = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(cvContent, 10, 10);
    doc.save('Akoragye_Osbert_CV.pdf');
  };

  return (
    <section
      id='education'
      className='py-20 bg-gradient-to-r from-gray-800 to-indigo-900'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white'>
          Education Background
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-indigo-950 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2'
            >
              {edu.icon}
              <h3 className='text-xl font-semibold text-white'>{edu.title}</h3>
              <p className='text-yellow-400'>{edu.year}</p>
              <p className='text-gray-300'>{edu.place}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.1, backgroundColor: '#facc15' }}
            whileTap={{ scale: 0.95 }}
            className='bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300'
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
