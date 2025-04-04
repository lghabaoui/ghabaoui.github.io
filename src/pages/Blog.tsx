import React from 'react';
import { motion } from 'framer-motion';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Content coming soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
};