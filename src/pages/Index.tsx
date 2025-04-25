
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <ul className="flex justify-end space-x-6 py-4 text-white">
        <li><Link to="/" className="hover:text-gray-300">Sākums</Link></li>
        <li><Link to="/galerija" className="hover:text-gray-300">Galerija</Link></li>
      </ul>
    </div>
  </nav>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/lovable-uploads/01cfbe85-3a5c-4955-9768-ad03c6278525.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-4"
          >
            HOOP VISION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            "No laukuma līdz virsotnei"
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Index;
