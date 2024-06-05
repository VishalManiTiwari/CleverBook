import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate a server request
      console.log(`Email submitted: ${email}`);
      alert('Thank you for subscribing!');
      setEmail(''); // Clear the email input
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleSocialMediaClick = (platform) => {
    const urls = {
      facebook: 'https://www.facebook.com/cleverbooks',
      twitter: 'https://www.twitter.com/cleverbooks',
      instagram: 'https://www.instagram.com/cleverbooks',
    };
    const url = urls[platform];
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log(`No URL found for platform: ${platform}`);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4">&copy; 2024 CleverBooks. All rights reserved.</p>
          <p>123 Main Street, Anytown, USA</p>
          <div className="flex justify-center mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              onClick={() => handleSocialMediaClick('facebook')}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              onClick={() => handleSocialMediaClick('twitter')}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              onClick={() => handleSocialMediaClick('instagram')}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form className="mt-6" onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 text-white w-full py-2 px-4 rounded mb-2 sm:mb-0 sm:w-auto sm:mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
