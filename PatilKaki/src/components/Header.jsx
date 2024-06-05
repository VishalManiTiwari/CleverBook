import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 xl:px-12">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">CleverBooks</Link>
        </motion.div>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
          </Link>
          <Link to="/register">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
