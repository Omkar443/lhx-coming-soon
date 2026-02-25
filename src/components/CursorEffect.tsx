import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-screen"
        variants={variants}
        animate="default"
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-cyan-400/30 blur-sm" />
        </div>
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl" />
      </motion.div>

      {/* Data stream effect */}
      <svg className="fixed inset-0 pointer-events-none z-30" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0">
              <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#00ffff" stopOpacity="0.5">
              <animate attributeName="offset" values="0.5;1.5;0.5" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0">
              <animate attributeName="offset" values="1;2;1" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <line
          x1={mousePosition.x - 50}
          y1={mousePosition.y - 50}
          x2={mousePosition.x + 50}
          y2={mousePosition.y + 50}
          stroke="url(#grad)"
          strokeWidth="1"
        />
        <line
          x1={mousePosition.x + 50}
          y1={mousePosition.y - 50}
          x2={mousePosition.x - 50}
          y2={mousePosition.y + 50}
          stroke="url(#grad)"
          strokeWidth="1"
        />
      </svg>
    </>
  );
};

export default CursorEffect;