import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/key-problems');
  };

  const handleImageHover = (e) => {
    e.target.classList.add('hovered');
  };

  const handleImageLeave = (e) => {
    e.target.classList.remove('hovered');
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Innovate with CleverBooks
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Leading the way in inventory management solutions.
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white px-8 py-3 rounded mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleGetStarted}
        >
          Get Started
        </motion.button>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-md md:text-lg mb-2">
            Join thousands of businesses improving their inventory management.
          </p>
          <div className="flex space-x-4">
            <span className="text-gray-400">Trusted by:</span>
            {['Logo 1', 'Logo 2', 'Logo 3'].map((logo, index) => (
              <motion.img
                key={index}
                src={`https://source.unsplash.com/random/100x100?sig=${index}`}
                alt={`Logo ${index + 1}`}
                className="w-16 h-16 rounded-full transition-all duration-300"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
