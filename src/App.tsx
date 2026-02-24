import React, { useState, useEffect } from 'react'
import { Terminal, Shield, Zap, Users, Globe, Lock, Code, GitBranch, AlertTriangle, Cpu, Radio, Key, Fingerprint, Scan, Eye, EyeOff, Binary, Wifi, WifiOff, Skull, Bomb, Flame, Wind, Cloud, Star } from 'lucide-react'

const LAUNCH_DATE = new Date('2026-03-15T00:00:00Z')

// Matrix rain effect component
const MatrixRain: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => clearInterval(interval)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" style={{ zIndex: 0 }} />
}

// Glitch text effect component
const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(Math.random() > 0.7)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <span className="relative inline-block">
        {text}
        {glitch && (
          <>
            <span className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-red-500 opacity-70 animate-pulse" style={{ clipPath: 'inset(0 0 0 0)' }}>
              {text}
            </span>
            <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-cyan-400 opacity-70 animate-pulse" style={{ clipPath: 'inset(0 0 0 0)' }}>
              {text}
            </span>
          </>
        )}
      </span>
    </div>
  )
}

// Typing effect component
const TypingEffect: React.FC<{ texts: string[]; delay?: number }> = ({ texts, delay = 3000 }) => {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[index]
    
    const timer = setTimeout(() => {
      if (!deleting) {
        if (display.length < currentText.length) {
          setDisplay(currentText.slice(0, display.length + 1))
        } else {
          setTimeout(() => setDeleting(true), delay)
        }
      } else {
        if (display.length > 0) {
          setDisplay(currentText.slice(0, display.length - 1))
        } else {
          setDeleting(false)
          setIndex((index + 1) % texts.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [display, deleting, index, texts, delay])

  return (
    <span className="font-mono">
      {display}
      <span className="animate-pulse">_</span>
    </span>
  )
}

// Hacker stats card
const HackerCard: React.FC<{ icon: React.ElementType; label: string; value: string; color?: string }> = ({ icon: Icon, label, value, color = 'text-green-400' }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-md"></div>
          <Icon className={`w-5 h-5 ${color} relative z-10`} />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-mono">{label}</div>
          <div className={`text-lg font-bold font-mono ${color}`}>{value}</div>
        </div>
      </div>
    </div>
  </div>
)

// Countdown timer with hacker style
const HackerCountdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculate = () => {
      const diff = targetDate.getTime() - new Date().getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }
    calculate()
    const timer = setInterval(calculate, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const units = [
    { label: 'DAYS', value: timeLeft.days, color: 'from-red-500 to-orange-500' },
    { label: 'HRS', value: timeLeft.hours, color: 'from-orange-500 to-yellow-500' },
    { label: 'MIN', value: timeLeft.minutes, color: 'from-yellow-500 to-green-500' },
    { label: 'SEC', value: timeLeft.seconds, color: 'from-green-500 to-cyan-500' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className={`text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r ${unit.color} bg-clip-text text-transparent`}>
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500 mt-2 font-mono tracking-wider">{unit.label}</div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Main App
function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [accessGranted, setAccessGranted] = useState(false)
  const [showTerminal, setShowTerminal] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStatus('success')
    setAccessGranted(true)
    setEmail('')
    setTimeout(() => {
      setStatus('idle')
      setAccessGranted(false)
    }, 5000)
  }

  const stats = [
    { icon: Terminal, label: 'SECURITY_LEVEL', value: 'MAXIMUM', color: 'text-red-400' },
    { icon: Shield, label: 'FALSE_POSITIVE', value: '0.8%', color: 'text-green-400' },
    { icon: Zap, label: 'SCAN_SPEED', value: '5x', color: 'text-yellow-400' },
    { icon: Users, label: 'WARRIORS', value: '850+', color: 'text-cyan-400' }
  ]

  const features = [
    { icon: Binary, label: 'AI Neural Scan', status: 'ACTIVE' },
    { icon: Fingerprint, label: 'Deep Packet Inspection', status: 'READY' },
    { icon: Scan, label: 'Vulnerability Matrix', status: 'ONLINE' },
    { icon: Key, label: 'Encryption Bypass', status: 'STANDBY' }
  ]

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden font-mono">
      {/* Matrix background */}
      <MatrixRain />

      {/* Scan lines effect */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.03) 0px, rgba(0,0,0,0.5) 1px, transparent 2px)',
        zIndex: 1
      }}></div>

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 1
      }}></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Header with logo */}
          <div className="flex items-center justify-between mb-8 border border-green-500/30 bg-black/50 backdrop-blur-sm p-4 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/30 rounded-xl blur-xl"></div>
                <img 
                  src="/logo2.png" 
                  alt="LeakHunterX" 
                  className="relative w-12 h-12 rounded-lg border border-green-500/50"
                  onError={(e) => {
                    // Fallback if logo doesn't exist
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div>
                <GlitchText text="LEAKHUNTERX" className="text-xl font-bold text-green-400" />
                <div className="text-xs text-gray-600 flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-green-400" />
                    <span>SECURE CONNECTION</span>
                  </span>
                  <span className="w-1 h-1 bg-green-400 rounded-full animate-ping"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30">
                <Lock className="w-3 h-3" />
                <span>ENCRYPTED</span>
              </div>
              <div className="flex items-center gap-1 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>
          </div>

          {/* Terminal banner */}
          <div className="mb-8 border border-green-500/30 bg-black/70 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 border-b border-green-500/30">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500 ml-2">root@leakhunterx:~#</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <TypingEffect texts={[
                '> Initializing neural scanning engine...',
                '> Loading AI models... DONE',
                '> Connecting to secure network... ESTABLISHED',
                '> Waiting for MVP launch sequence...',
                '> System status: OPERATIONAL'
              ]} />
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column - Countdown */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Skull className="w-5 h-5 text-red-400" />
                    <GlitchText text="LAUNCH SEQUENCE" />
                  </h2>
                  <div className="flex items-center gap-2 text-xs">
                    <Cpu className="w-4 h-4 animate-spin-slow" />
                    <span className="text-gray-500">v2.0.1</span>
                  </div>
                </div>
                <HackerCountdown targetDate={LAUNCH_DATE} />
                
                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>SYSTEM READINESS</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-green-500/30">
                    <div className="h-full w-[78%] bg-gradient-to-r from-green-500 to-cyan-500 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <HackerCard key={i} {...stat} />
                ))}
              </div>

              {/* Features */}
              <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <Bomb className="w-4 h-4 text-red-400" />
                  <span>ACTIVE MODULES</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-black/50 rounded-xl border border-green-500/20 hover:border-green-400/30 transition-all group">
                      <div className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-green-400" />
                        <span className="text-xs">{feature.label}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        feature.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                        feature.status === 'READY' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Access terminal */}
            <div className="space-y-6">
              <div className="border border-green-500/30 bg-black/70 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Terminal className="w-5 h-5" />
                  <h3 className="font-bold">ACCESS TERMINAL</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/5 rounded-xl blur-md"></div>
                    <div className="relative flex items-center bg-black border border-green-500/30 rounded-xl overflow-hidden focus-within:border-green-400/50 transition-all">
                      <span className="pl-4 text-gray-500">{'>'}</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter_access_code@domain.com"
                        className="flex-1 bg-transparent px-4 py-4 text-green-400 placeholder-gray-700 focus:outline-none font-mono text-sm"
                        disabled={status === 'loading' || status === 'success'}
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="px-6 py-4 bg-green-600/20 hover:bg-green-600/30 disabled:opacity-50 transition-all border-l border-green-500/30"
                      >
                        {status === 'loading' ? (
                          <div className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                        ) : status === 'success' ? (
                          <Shield className="w-5 h-5 text-green-400" />
                        ) : (
                          <Key className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                {accessGranted && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl animate-pulse">
                    <div className="flex items-center gap-2 text-green-400">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm font-mono">ACCESS GRANTED • Welcome to the network</span>
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>STATUS:</span>
                    <span className="text-green-400 flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      ONLINE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>NODE:</span>
                    <span className="text-cyan-400">PRIMARY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ENCRYPTION:</span>
                    <span className="text-yellow-400">AES-256</span>
                  </div>
                </div>
              </div>

              {/* Live activity feed */}
              <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                <h4 className="text-xs font-bold mb-3 flex items-center gap-2">
                  <Radio className="w-3 h-3 animate-pulse" />
                  LIVE ACTIVITY
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  {[
                    '[22:47:13] ▶ System initialized',
                    '[22:47:14] ▶ Scanning network...',
                    '[22:47:15] ▶ 127.0.0.1: Secure',
                    '[22:47:16] ▶ 247 agents online',
                  ].map((log, i) => (
                    <div key={i} className="text-gray-500">
                      <span className="text-green-400">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security badge */}
              <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs">SECURITY CLEARANCE</span>
                </div>
                <div className="text-2xl font-mono text-green-400">LEVEL 5</div>
                <div className="text-xs text-gray-600 mt-2">TOP SECRET • EYES ONLY</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-green-500/30 pt-4 flex justify-between items-center text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span>© 2026 LEAPHUNTERX</span>
              <span className="w-1 h-1 bg-green-400 rounded-full"></span>
              <span>BY TANTRALOGIC AI</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                v2.0.1
              </span>
              <span className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                <span className="text-green-400">SECURE</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default App