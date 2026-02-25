import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/logo2.png" 
        alt="LeakHunterX Logo" 
        className="h-10 w-auto"
        onError={(e) => {
          // Fallback if image doesn't load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        LeakHunterX
      </span>
    </motion.div>
  );
};

export default Logo;