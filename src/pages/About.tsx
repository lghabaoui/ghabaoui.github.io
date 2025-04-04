import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Smartphone } from 'lucide-react';

export const About: React.FC = () => {
  const technologies = [
    { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'], icon: <Globe className="w-6 h-6" /> },
    { name: 'Backend', items: ['Java', 'Python', 'Node.js'], icon: <Database className="w-6 h-6" /> },
    { name: 'Mobile', items: ['React Native', 'Flutter'], icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Other', items: ['Git', 'Docker', 'AWS', 'Firebase'], icon: <Code className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a passionate multidisciplinary creative professional with a strong foundation in both design and development. 
              My journey in the digital world has equipped me with a unique perspective that combines technical expertise with 
              creative vision. I believe in creating solutions that are not just functional but also aesthetically pleasing 
              and user-friendly.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 mr-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in the industry, I've had the opportunity to work on diverse projects
              ranging from enterprise-level applications to creative marketing campaigns. My approach combines
              technical excellence with creative problem-solving, ensuring that every project I undertake
              achieves both its functional and aesthetic goals.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm constantly learning and staying up-to-date with the latest technologies and design trends,
              allowing me to deliver cutting-edge solutions that meet modern standards and expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};