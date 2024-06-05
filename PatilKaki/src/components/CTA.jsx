import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Grow faster than you think
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join CleverBooks today and transform your inventory management.
        </motion.p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-white text-gray-900 px-4 py-2 rounded-l"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded-r">
            Get Started
          </button>
        </form>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-md md:text-lg mb-2">Join thousands of businesses improving their inventory management.</p>
          <div className="flex space-x-4">
            <span className="text-gray-400">Trusted by:</span>
            <img src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180" alt="Logo 1" className="w-16 h-16 rounded-full" />
            <img src="https://petapixel.com/assets/uploads/2019/02/download-4.jpeg" alt="Logo 2" className="w-16 h-16 rounded-full" />
            <img src="https://vignette.wikia.nocookie.net/althistory/images/7/74/Recent-portraits-random-people-in-random-places_11.jpg/revision/latest?cb=20141209232111" alt="Logo 3" className="w-16 h-16 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
