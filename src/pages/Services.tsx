import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Video, Camera, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Website Design',
      icon: <Globe className="w-8 h-8" />,
      description: 'Custom website design with focus on user experience and modern aesthetics.',
      features: [
        'Responsive Design',
        'UI/UX Design',
        'Website Redesign',
        'Landing Pages',
      ],
    },
    {
      title: 'Web Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Full-stack web development services using modern technologies and best practices.',
      features: [
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'E-commerce Solutions',
      ],
    },
    {
      title: 'Video Production',
      icon: <Video className="w-8 h-8" />,
      description: 'Professional video production services for various purposes and platforms.',
      features: [
        'Corporate Videos',
        'Product Demonstrations',
        'Social Media Content',
        'Event Coverage',
      ],
    },
    {
      title: 'Photography',
      icon: <Camera className="w-8 h-8" />,
      description: 'High-quality photography services for commercial and personal projects.',
      features: [
        'Product Photography',
        'Event Photography',
        'Portrait Sessions',
        'Real Estate Photography',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            I offer a comprehensive range of digital services to help bring your vision to life.
            Each service is tailored to meet your specific needs and goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};