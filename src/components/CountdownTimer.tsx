import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeStatus, setTimeStatus] = useState<'today' | 'tomorrow' | 'launch'>('tomorrow');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();
      
      if (difference > 0) {
        // Calculate total hours until target
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Determine status message based on time
        if (days === 0 && hours < 24) {
          if (hours < 12) {
            setTimeStatus('today');
          } else {
            setTimeStatus('tomorrow');
          }
        }
        
        setTimeLeft({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const getStatusMessage = () => {
    if (timeLeft.days === 0 && timeLeft.hours < 24) {
      if (timeLeft.hours < 12) {
        return {
          emoji: '🚀',
          text: 'Launching Today',
          subtext: `${timeLeft.hours}h ${timeLeft.minutes}m remaining`
        };
      } else {
        return {
          emoji: '⏰',
          text: 'Launching Tomorrow',
          subtext: `${timeLeft.hours}h ${timeLeft.minutes}m until midnight`
        };
      }
    }
    return {
      emoji: '⏳',
      text: 'MVP Launch Countdown',
      subtext: `${timeLeft.days}d ${timeLeft.hours}h remaining`
    };
  };

  const status = getStatusMessage();

  return (
    <div className="flex flex-col items-center gap-8">
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
                className="text-6xl md:text-8xl font-mono font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
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
          {status.emoji} {status.text} {status.emoji}
        </div>
        <div className="text-xs text-amber-500/60 font-mono">
          {status.subtext}
        </div>
        <div className="text-xs text-amber-500/40 font-mono mt-1">
          Target: Tomorrow 6:30 PM
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;