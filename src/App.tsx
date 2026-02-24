import React from 'react'
import { Rocket, Shield, Zap, Users, Sparkles, Clock, Star, ChevronRight } from 'lucide-react'
import CountdownTimer from './components/CountdownTimer'
import ParticleBackground from './components/ParticleBackground'
import WaitlistForm from './components/WaitlistForm'
import { LAUNCH_DATE } from './utils/helpers'
import logo from './assets/logos/logo2.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 animate-slide-down">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src={logo} 
                  alt="LeakHunterX" 
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl object-contain"
                />
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                MVP Launch
              </span>
              <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm font-medium text-amber-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                March 2026
              </span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-400 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Limited Spots
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Intelligent </span>
              <span className="gradient-text">Secret Scanning</span>
              <span className="block text-2xl text-gray-400 mt-4 font-normal">
                The future of security is almost here
              </span>
            </h1>

            {/* Countdown */}
            <div className="mb-12">
              <CountdownTimer targetDate={LAUNCH_DATE} />
            </div>

            {/* Waitlist */}
            <div className="mb-12 max-w-md mx-auto">
              <WaitlistForm />
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-blue-600 border-2 border-gray-900" />
                  ))}
                </div>
                <span>850+ waiting</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-4 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
            © 2026 LeakHunterX by Tantralogic AI. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App