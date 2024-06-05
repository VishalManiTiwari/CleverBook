import React from 'react';
import { motion } from 'framer-motion';

const KeyProblems = () => {
  const problems = [
    { title: "Lack of Integration", description: "Lack of integration between different tools.", icon: "🔗" },
    { title: "Inefficient Workflows", description: "Inefficient workflows and processes.", icon: "⚙️" },
    { title: "Tracking Issues", description: "Difficulty in tracking project progress.", icon: "📊" },
    { title: "Communication Barriers", description: "Communication barriers among team members.", icon: "💬" },
    { title: "Limited Data Access", description: "Limited access to real-time data.", icon: "📉" }
  ];

  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Key Problems Solved
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProblems;
