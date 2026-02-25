import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountdownTimer from './components/CountdownTimer';
import CursorEffect from './components/CursorEffect';
import ParticleField from './components/ParticleField';
import Logo from './components/Logo';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '1.25M+', label: 'Secrets Found', sub: 'Across all scans' },
    { value: '0.8%', label: 'False Positive Rate', sub: 'Industry lowest' },
    { value: '5x', label: 'Scan Speed', sub: 'Vs traditional tools' },
    { value: '850+', label: 'Early Users', sub: 'Already onboarded' }
  ];

  const features = [
    {
      title: 'AI Validation Engine',
      description: 'Context-aware analysis eliminates false positives by understanding code semantics',
      icon: '🧠',
      status: 'coming-soon'
    },
    {
      title: 'Time Travel Scan',
      description: 'Scan historical archives from Wayback Machine to find deleted secrets',
      icon: '⏰',
      status: 'coming-soon'
    },
    {
      title: 'JS Map Reconstruction',
      description: 'Reverse-engineer minified JavaScript to original source code',
      icon: '🔍',
      status: 'coming-soon'
    },
    {
      title: 'Delta Scanning',
      description: 'Compare scans to detect only new leaks for CI/CD pipeline monitoring',
      icon: '⚡',
      status: 'coming-soon'
    },
    {
      title: 'High-Entropy Scanner',
      description: 'Mathematical detection of random strings that look like custom tokens',
      icon: '🎲',
      status: 'coming-soon'
    },
    {
      title: 'Smart-Pathing',
      description: 'Tech stack detection automatically optimizes scan parameters',
      icon: '🛣️',
      status: 'mvp'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'AI-Powered Scanning',
      description: 'Advanced machine learning that continuously learns from security patterns',
      icon: '🤖'
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade encryption and zero-knowledge architecture',
      icon: '🔒'
    },
    {
      title: 'Real-Time Detection',
      description: 'Instant vulnerability detection in under 3 seconds',
      icon: '⚡'
    },
    {
      title: 'Predictive Analytics',
      description: 'Proactive threat prediction using historical data',
      icon: '📊'
    },
    {
      title: 'Hybrid Architecture',
      description: 'Privacy-first design: scan logic runs on your machine',
      icon: '🏗️'
    },
    {
      title: 'Team Collaboration',
      description: 'Role-based access control with real-time collaboration',
      icon: '👥'
    }
  ];

  const integrations = [
    'AWS', 'GitHub', 'Azure', 'GitLab', 'GCP', 'Jenkins', 'Docker', 'Kubernetes'
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <ParticleField mousePosition={mousePosition} />
      
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff10_1px,transparent_1px),linear-gradient(to_bottom,#00ffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#00ffff20,transparent)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="fixed top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-cyan-500/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition">Features</a>
            <a href="#architecture" className="text-gray-300 hover:text-cyan-400 transition">Architecture</a>
            <a href="#integrations" className="text-gray-300 hover:text-cyan-400 transition">Integrations</a>
            <a href="#roadmap" className="text-gray-300 hover:text-cyan-400 transition">Roadmap</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition">Sign In</button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse mr-2" />
              <span className="text-cyan-400">MVP Launch Announcement • Pro Version Coming Soon</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Beyond Regex Matching
              </span>
              <br />
              <span className="text-white">Intelligent Secret Scanning</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              The world's most intelligent secret scanning platform. Move beyond simple pattern matching 
              with AI-powered validation, historical analysis, and near-zero false positives.
            </p>

            <div className="flex items-center justify-center space-x-6 mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition group">
                Start Free Trial
                <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition">
                View Roadmap
              </button>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer targetDate="2026-04-01T00:00:00" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mt-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Hunter's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Edge</span>
            </h2>
            <p className="text-xl text-gray-400">Features that separate us from generic scanners</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        feature.status === 'mvp' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}>
                        {feature.status === 'mvp' ? '🟢 MVP Available' : '🔵 Coming Soon'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Platform</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need for modern security operations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-3xl border border-cyan-500/30 group-hover:scale-110 transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy First Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy First <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Architecture</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Scan Your Localhost</h3>
                    <p className="text-gray-400">Before you push to production</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">🔒</div>
                  <div>
                    <h3 className="font-semibold mb-1">Offline CLI Mode</h3>
                    <p className="text-gray-400">Open-source scanner that runs entirely on your machine</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">🔄</div>
                  <div>
                    <h3 className="font-semibold mb-1">Connected Pro Mode</h3>
                    <p className="text-gray-400">Coming soon: Sync with dashboard for AI validation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">⚡</div>
                  <div>
                    <h3 className="font-semibold mb-1">Zero Data Exposure</h3>
                    <p className="text-gray-400">Sensitive data never leaves your infrastructure</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">🔄</div>
                  <div>
                    <h3 className="font-semibold mb-1">CI/CD Native</h3>
                    <p className="text-gray-400">Seamless integration with your development pipelines</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 border border-cyan-500/30 rounded-lg font-semibold hover:bg-cyan-500/10 transition">
                  View Roadmap
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">MVP</div>
                    <div className="text-sm text-gray-400">Core Features</div>
                    <div className="mt-2 text-xs text-green-400">Active & Available Now</div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">0.8%</div>
                    <div className="text-sm text-gray-400">False Positives</div>
                    <div className="mt-2 text-xs text-gray-500">Industry average: 15%</div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">5x</div>
                    <div className="text-sm text-gray-400">Scan Speed</div>
                    <div className="mt-2 text-xs text-gray-500">Faster than competitors</div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/50 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">Pro</div>
                    <div className="text-sm text-gray-400">Features</div>
                    <div className="mt-2 text-xs text-cyan-400">Coming Q2 2026</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Product <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400">What's Coming Next - Our vision for the future of secret scanning</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-cyan-500 rounded-full text-xs font-bold">Current</div>
              <h3 className="text-2xl font-bold mt-4 mb-2">Q1 2026</h3>
              <h4 className="text-xl mb-4">MVP Launch</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                  Basic secret scanning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                  GitHub integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                  Core detection engine
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-500 rounded-full text-xs font-bold">Next Up</div>
              <h3 className="text-2xl font-bold mt-4 mb-2">Q2 2026</h3>
              <h4 className="text-xl mb-4">Pro Version Launch</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                  AI-powered validation engine
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                  Time travel scanning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                  Enterprise collaboration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                  Advanced integrations
                </li>
              </ul>
              <button className="mt-4 w-full px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition">
                Get Early Access
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 rounded-full text-xs font-bold">Planned</div>
              <h3 className="text-2xl font-bold mt-4 mb-2">H2 2026</h3>
              <h4 className="text-xl mb-4">Enterprise Edition</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  SOC 2 compliance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Custom rule engine
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Dedicated support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-400">Works With Your Stack</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-center group cursor-pointer"
              >
                <div className="text-2xl font-bold text-gray-400 group-hover:text-cyan-400 transition">
                  {integration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Move Beyond Regex?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of intelligent secret scanning. Start with our MVP free tier today. 
              Pro version with advanced features coming in Q2 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition group w-full sm:w-auto">
                Start Free Trial
                <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition w-full sm:w-auto">
                View Roadmap
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                No credit card required
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                Cancel anytime
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                Pro version Q2 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-gray-400 text-sm mt-4">
                The Intelligent Secret Scanning Platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Architecture</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Integrations</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cyan-500/20 text-sm text-gray-500">
            <div>© 2026 LeakHunterX by Tantralogic AI. All rights reserved. • MVP Launch v1.0</div>
            <div className="mt-4 md:mt-0">Pro version coming Q2 2026 • Early access available</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;