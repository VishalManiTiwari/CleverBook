import React from 'react';
import { motion } from 'framer-motion';

const ProblemTarget = () => {
  const features = [
    { title: "Feature 1", description: "Detailed description of feature 1." },
    { title: "Feature 2", description: "Detailed description of feature 2." },
    { title: "Feature 3", description: "Detailed description of feature 3." },
    { title: "Feature 4", description: "Detailed description of feature 4." },
    { title: "Feature 5", description: "Detailed description of feature 5." }
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Problem Target
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemTarget;
