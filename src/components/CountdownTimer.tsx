import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Set target to today at 6:30 PM (18:30)
      const target = new Date();
      target.setHours(18, 30, 0, 0); // 6:30 PM
      
      const diffMs = target.getTime() - now.getTime();
      
      if (diffMs > 0) {
        // Convert to seconds
        const diffSec = Math.floor(diffMs / 1000);
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor(diffSec / 3600);
        const minutes = Math.floor((diffSec % 3600) / 60);
        const seconds = diffSec % 60;
        
        setTimeLeft({
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      } else {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  // Check if launch time has passed
  const isLaunched = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(18, 30, 0, 0);
    return now > target;
  };

  // Format current time for display
  const formatCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    });
  };

  if (isLaunched()) {
    return (
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-sm text-amber-400/60 font-mono mb-2">
            Current Time: {formatCurrentTime()}
          </div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-4"
          >
            🚀
          </motion.div>
          
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            We're Live!
          </div>
          
          <div className="text-sm bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold font-mono border border-amber-500/30 px-6 py-3 rounded-full bg-amber-500/10 backdrop-blur-sm">
            🎉 MVP Launched at 6:30 PM 🎉
          </div>
          
          <div className="text-xs text-amber-500/40 font-mono mt-2">
            Target: Today 6:30 PM
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Current time indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-amber-400/60 font-mono mb-2"
      >
        Current Time: {formatCurrentTime()}
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center relative group"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl"
            />
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-7xl md:text-9xl font-mono font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs md:text-sm text-amber-500/70 mt-2 tracking-wider font-semibold uppercase">
                {unit.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="text-sm bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold font-mono border border-amber-500/30 px-6 py-3 rounded-full bg-amber-500/10 backdrop-blur-sm">
          🚀 Launching Today at 6:30 PM 🚀
        </div>
        <div className="text-xs text-amber-500/60 font-mono">
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s until launch
        </div>
        <div className="text-xs text-amber-500/40 font-mono mt-1 flex gap-2">
          <span>Now: {formatCurrentTime()}</span>
          <span>•</span>
          <span>Launch: 6:30 PM</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;