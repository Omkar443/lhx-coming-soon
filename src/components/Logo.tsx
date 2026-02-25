import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src="/logo2.png" 
          alt="LeakHunterX Logo" 
          className="h-10 w-auto relative z-10"
          onError={(e) => {
            console.error('Logo failed to load');
            // Fallback to text logo if image fails
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Glow effect behind logo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          LeakHunterX
        </span>
        <span className="text-xs text-amber-500/70 -mt-1">Find secrets before they find you</span>
      </div>
    </motion.div>
  );
};

export default Logo;