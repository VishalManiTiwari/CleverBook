import React from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    { name: "John Doe", review: "This is a fantastic product! It has significantly improved our workflow and efficiency." },
    { name: "Jane Smith", review: "I love using this for my business. It’s user-friendly and very reliable." },
    { name: "Sam Johnson", review: "Highly recommend to everyone. It’s a game-changer for inventory management." },
    { name: "Alice Brown", review: "Exceptional service and support. The team is very responsive and helpful." },
    { name: "Michael Lee", review: "A must-have tool for any business. It has made our operations much smoother." }
  ];

  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto text-center px-4 md:px-0">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="mb-4">"{review.review}"</p>
              <p className="font-bold">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
