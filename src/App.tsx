import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountdownTimer from './components/CountdownTimer';
import CursorEffect from './components/CursorEffect';
import ParticleField from './components/ParticleField';
import WarmSymbioticField from './components/WarmSymbioticField';
import Logo from './components/Logo';
import './index.css';

function App() {
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
      glow: 'from-amber-500/20 to-orange-500/20',
      status: 'coming-soon'
    },
    {
      title: 'Time Travel Scan',
      description: 'Scan historical archives from Wayback Machine to find deleted secrets',
      icon: '⏰',
      glow: 'from-yellow-500/20 to-amber-500/20',
      status: 'coming-soon'
    },
    {
      title: 'JS Map Reconstruction',
      description: 'Reverse-engineer minified JavaScript to original source code',
      icon: '🔍',
      glow: 'from-orange-500/20 to-red-500/20',
      status: 'coming-soon'
    },
    {
      title: 'Delta Scanning',
      description: 'Compare scans to detect only new leaks for CI/CD pipeline monitoring',
      icon: '⚡',
      glow: 'from-amber-500/20 to-yellow-500/20',
      status: 'coming-soon'
    },
    {
      title: 'High-Entropy Scanner',
      description: 'Mathematical detection of random strings that look like custom tokens',
      icon: '🎲',
      glow: 'from-red-500/20 to-amber-500/20',
      status: 'coming-soon'
    },
    {
      title: 'Smart-Pathing',
      description: 'Tech stack detection automatically optimizes scan parameters',
      icon: '🛣️',
      glow: 'from-yellow-500/20 to-orange-500/20',
      status: 'mvp'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'AI-Powered Scanning',
      description: 'Advanced machine learning that continuously learns from security patterns',
      icon: '🤖',
      color: 'from-amber-400 to-orange-400'
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade encryption and zero-knowledge architecture',
      icon: '🔒',
      color: 'from-yellow-400 to-amber-400'
    },
    {
      title: 'Real-Time Detection',
      description: 'Instant vulnerability detection in under 3 seconds',
      icon: '⚡',
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'Predictive Analytics',
      description: 'Proactive threat prediction using historical data',
      icon: '📊',
      color: 'from-amber-400 to-yellow-400'
    },
    {
      title: 'Hybrid Architecture',
      description: 'Privacy-first design: scan logic runs on your machine',
      icon: '🏗️',
      color: 'from-red-400 to-amber-400'
    },
    {
      title: 'Team Collaboration',
      description: 'Role-based access control with real-time collaboration',
      icon: '👥',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const integrations = [
    { name: 'AWS', icon: '☁️' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Azure', icon: '🔷' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'GCP', icon: '🌐' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⎈' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <ParticleField />
      <WarmSymbioticField />
      
      {/* Animated warm gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2410_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2410_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating warm orbs */}
      <motion.div
        className="fixed top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="fixed bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 border-b border-amber-500/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-amber-400 transition">Features</a>
            <a href="#architecture" className="text-gray-300 hover:text-amber-400 transition">Architecture</a>
            <a href="#integrations" className="text-gray-300 hover:text-amber-400 transition">Integrations</a>
            <a href="#roadmap" className="text-gray-300 hover:text-amber-400 transition">Roadmap</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-amber-400 transition">Sign In</button>
            <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition">
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
            <motion.div
              animate={{ 
                boxShadow: ['0 0 20px rgba(251,191,36,0.3)', '0 0 40px rgba(251,191,36,0.6)', '0 0 20px rgba(251,191,36,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mr-2" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                MVP Launch • Pro Version Q2 2026
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Beyond Regex Matching
              </span>
              <br />
              <span className="text-white">Intelligent Secret Scanning</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
              The world's most intelligent secret scanning platform. Move beyond simple pattern matching 
              with AI-powered validation, historical analysis, and near-zero false positives.
            </p>

            {/* Countdown Timer - Now more prominent */}
            <div className="mb-20">
              <CountdownTimer targetDate="2026-04-01T00:00:00" />
            </div>
          </motion.div>

          {/* Stats - Enhanced with warm glow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 rounded-2xl blur-xl group-hover:from-amber-500/20 group-hover:via-amber-500/10 group-hover:to-orange-500/20 transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold mt-2">{stat.label}</div>
                  <div className="text-sm text-amber-500/60">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced with warm gradients */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Hunter's <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Edge</span>
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
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:border-amber-500/40 transition-all overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="text-5xl mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        feature.status === 'mvp' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
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

      {/* Enterprise Features - Enhanced with warm colors */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Platform</span>
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
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    animate={{ 
                      boxShadow: ['0 0 20px rgba(251,191,36,0.2)', '0 0 40px rgba(251,191,36,0.4)', '0 0 20px rgba(251,191,36,0.2)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center text-3xl border border-amber-500/30 group-hover:scale-110 transition-all duration-300`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy First Section - Enhanced */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy First <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Architecture</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: '✓', title: 'Scan Your Localhost', desc: 'Before you push to production' },
                  { icon: '🔒', title: 'Offline CLI Mode', desc: 'Open-source scanner that runs entirely on your machine' },
                  { icon: '🔄', title: 'Connected Pro Mode', desc: 'Coming soon: Sync with dashboard for AI validation' },
                  { icon: '⚡', title: 'Zero Data Exposure', desc: 'Sensitive data never leaves your infrastructure' },
                  { icon: '🔄', title: 'CI/CD Native', desc: 'Seamless integration with your development pipelines' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-1 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
              />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-black/50 border border-amber-500/20"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">MVP</div>
                    <div className="text-sm text-gray-400">Core Features</div>
                    <div className="mt-2 text-xs text-green-400">Active & Available Now</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-black/50 border border-amber-500/20"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">0.8%</div>
                    <div className="text-sm text-gray-400">False Positives</div>
                    <div className="mt-2 text-xs text-gray-500">Industry average: 15%</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-black/50 border border-amber-500/20"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">5x</div>
                    <div className="text-sm text-gray-400">Scan Speed</div>
                    <div className="mt-2 text-xs text-gray-500">Faster than competitors</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-black/50 border border-amber-500/20"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Pro</div>
                    <div className="text-sm text-gray-400">Features</div>
                    <div className="mt-2 text-xs text-amber-400">Coming Q2 2026</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap - Enhanced with warm glow */}
      <section id="roadmap" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Product <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400">What's Coming Next - Our vision for the future of secret scanning</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                period: 'Q1 2026',
                title: 'MVP Launch',
                color: 'from-amber-500 to-orange-500',
                items: ['Basic secret scanning', 'GitHub integration', 'Core detection engine'],
                status: 'Current'
              },
              {
                period: 'Q2 2026',
                title: 'Pro Version Launch',
                color: 'from-orange-500 to-red-500',
                items: ['AI-powered validation engine', 'Time travel scanning', 'Enterprise collaboration', 'Advanced integrations'],
                status: 'Next Up',
                earlyAccess: true
              },
              {
                period: 'H2 2026',
                title: 'Enterprise Edition',
                color: 'from-red-500 to-amber-500',
                items: ['SOC 2 compliance', 'Custom rule engine', 'Dedicated support'],
                status: 'Planned'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className={`absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r ${phase.color} rounded-full text-xs font-bold`}>
                  {phase.status}
                </div>
                <h3 className="text-2xl font-bold mt-4 mb-2 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                  {phase.period}
                </h3>
                <h4 className="text-xl mb-4">{phase.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center"
                    >
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${phase.color} rounded-full mr-2`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                {phase.earlyAccess && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg text-amber-400 hover:from-amber-500/30 hover:to-orange-500/30 transition"
                  >
                    Get Early Access →
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - Enhanced */}
      <section id="integrations" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Seamless <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Integrations</span>
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
                whileHover={{ scale: 1.05, rotateY: 180 }}
                className="p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-xl font-bold text-gray-400 group-hover:text-amber-400 transition">
                    {integration.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified without buttons */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Move Beyond Regex?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join the future of intelligent secret scanning. Pro version with advanced features coming in Q2 2026.
            </p>
            
            <motion.div
              animate={{ 
                boxShadow: ['0 0 30px rgba(251,191,36,0.2)', '0 0 60px rgba(251,191,36,0.4)', '0 0 30px rgba(251,191,36,0.2)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30"
            >
              <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse mr-3" />
              <span className="text-lg text-amber-400">Pro Version Launching Q2 2026</span>
            </motion.div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                No credit card required
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                Cancel anytime
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                Early access available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative border-t border-amber-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-gray-400 text-sm mt-4">
                The Intelligent Secret Scanning Platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Architecture</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Integrations</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">About</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-amber-500/20 text-sm text-gray-500">
            <div>© 2026 LeakHunterX by Tantralogic AI. All rights reserved.</div>
            <div className="mt-4 md:mt-0 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-semibold">
              Pro Version Q2 2026 • Early Access Available
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;