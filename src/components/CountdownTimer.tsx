import React from 'react'
import { useCountdown } from '../hooks/useCountdown'
import { cn } from '../utils/helpers'

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const timeLeft = useCountdown(targetDate)

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, gradient: 'from-blue-400 to-cyan-400' },
    { label: 'Hours', value: timeLeft.hours, gradient: 'from-purple-400 to-pink-400' },
    { label: 'Minutes', value: timeLeft.minutes, gradient: 'from-green-400 to-emerald-400' },
    { label: 'Seconds', value: timeLeft.seconds, gradient: 'from-amber-400 to-orange-400' }
  ]

  return (
    <div className={cn('flex flex-wrap gap-4 md:gap-8 justify-center', className)}>
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="relative group"
          style={{ animation: `slideUp 0.6s ${index * 0.1}s forwards`, opacity: 0 }}
        >
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[140px] hover:border-primary-500/30 transition-all duration-300">
            <div className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${block.gradient} bg-clip-text text-transparent`}>
              {block.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-400 mt-2 font-medium">
              {block.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer