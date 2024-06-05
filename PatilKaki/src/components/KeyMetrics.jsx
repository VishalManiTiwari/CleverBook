import React from 'react';
import { motion } from 'framer-motion';

const KeyMetrics = () => {
  const metrics = [
    { icon: "📈", title: "Increased Efficiency", description: "Boost your productivity with streamlined processes and integrated tools." },
    { icon: "🔒", title: "Enhanced Security", description: "Keep your data safe with top-notch security measures and protocols." },
    { icon: "⚡", title: "Faster Performance", description: "Experience lightning-fast performance with our optimized solutions." },
    { icon: "🌍", title: "Global Access", description: "Access your inventory data from anywhere in the world, at any time." },
    { icon: "🤝", title: "Collaboration", description: "Facilitate better communication and collaboration among your team members." },
    { icon: "📊", title: "Real-time Data", description: "Get real-time insights into your inventory with our advanced analytics tools." }
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto text-center px-4 md:px-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Key Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
              <p>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;