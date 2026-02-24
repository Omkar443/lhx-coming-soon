import React from 'react'
import { Rocket, Clock, Users, Shield, Mail, Send, CheckCircle, Calendar, Zap, AlertCircle } from 'lucide-react'
import { useCountdown } from './hooks/useCountdown'

const LAUNCH_DATE = new Date('2026-03-15T00:00:00Z')

function App() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const timeLeft = useCountdown(LAUNCH_DATE)

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days, gradient: 'from-blue-400 to-cyan-400' },
    { label: 'Hours', value: timeLeft.hours, gradient: 'from-purple-400 to-pink-400' },
    { label: 'Minutes', value: timeLeft.minutes, gradient: 'from-green-400 to-emerald-400' },
    { label: 'Seconds', value: timeLeft.seconds, gradient: 'from-amber-400 to-orange-400' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-primary-600/10 via-blue-600/10 to-purple-600/10 blur-3xl"></div>
      
      {/* Main content */}
      <div className="max-w-4xl w-full relative z-10">
        {/* MVP Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">MVP Launch</span>
            <span className="text-xs text-gray-500 ml-2">March 2026</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          <span className="text-white">Coming </span>
          <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">Soon</span>
        </h1>
        
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          The world's most intelligent secret scanning platform is launching in
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-16">
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
                <div className="text-sm text-gray-400 mt-2 font-medium text-center">
                  {block.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto mb-12">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden focus-within:border-primary-500/50 transition-all">
              <Mail className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get notified when we launch"
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-500 focus:outline-none"
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-6 py-4 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 disabled:opacity-50 transition-all"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 text-center animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Thanks! We'll notify you at launch</span>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>850+ waiting</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="w-4 h-4" />
            <span>5x faster scanning</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-4 h-4" />
            <span>0.8% false positives</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          © 2026 LeakHunterX by Tantralogic AI. All rights reserved.
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default App