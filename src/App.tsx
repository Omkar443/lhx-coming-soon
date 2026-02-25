import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountdownTimer from './components/CountdownTimer';
import CursorEffect from './components/CursorEffect';
import ParticleField from './components/ParticleField';
import WarmSymbioticField from './components/WarmSymbioticField';
import Logo from './components/Logo';
import './index.css';

function App() {
  // Calculate tomorrow's date at 6:30 PM
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(18, 30, 0, 0); // 6:30 PM
  const targetDate = tomorrow.toISOString();

  const stats = [
    { value: '1,000+', label: 'Secrets Found', sub: 'In beta testing' },
    { value: '0.8%', label: 'False Positive Rate', sub: 'Industry leading' },
    { value: '5x', label: 'Scan Speed', sub: 'Vs traditional tools' },
    { value: '100+', label: 'Early Users', sub: 'Already onboarded' }
  ];

  const features = [
    {
      title: 'Smart Pattern Detection',
      description: 'Advanced regex patterns that catch more secrets with fewer false positives',
      icon: '🔍',
      glow: 'from-amber-500/20 to-orange-500/20',
      status: 'mvp'
    },
    {
      title: 'GitHub Integration',
      description: 'Seamless scanning of public and private repositories',
      icon: '🐙',
      glow: 'from-yellow-500/20 to-amber-500/20',
      status: 'mvp'
    },
    {
      title: 'Real-time Alerts',
      description: 'Instant notifications when secrets are found in your code',
      icon: '⚡',
      glow: 'from-orange-500/20 to-red-500/20',
      status: 'mvp'
    },
    {
      title: 'CI/CD Ready',
      description: 'Integrate directly into your development pipeline',
      icon: '🔄',
      glow: 'from-amber-500/20 to-yellow-500/20',
      status: 'mvp'
    },
    {
      title: 'Multiple Format Support',
      description: 'Detect secrets in code, configs, logs, and documentation',
      icon: '📄',
      glow: 'from-red-500/20 to-amber-500/20',
      status: 'mvp'
    },
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our simple CLI tool',
      icon: '🚀',
      glow: 'from-yellow-500/20 to-orange-500/20',
      status: 'mvp'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Team Collaboration',
      description: 'Share findings and manage access with your team',
      icon: '👥',
      color: 'from-amber-400 to-orange-400'
    },
    {
      title: 'Custom Rules',
      description: 'Create your own patterns for proprietary secrets',
      icon: '⚙️',
      color: 'from-yellow-400 to-amber-400'
    },
    {
      title: 'Audit Logs',
      description: 'Complete history of all scans and findings',
      icon: '📋',
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'API Access',
      description: 'Integrate with your existing security tools',
      icon: '🔌',
      color: 'from-amber-400 to-yellow-400'
    },
    {
      title: 'Priority Support',
      description: 'Direct access to our security engineering team',
      icon: '🎯',
      color: 'from-red-400 to-amber-400'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights into your security posture',
      icon: '📊',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const integrations = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'Bitbucket', icon: '🔷' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'CircleCI', icon: '⚡' },
    { name: 'GitHub Actions', icon: '🤖' },
    { name: 'Slack', icon: '💬' },
    { name: 'Discord', icon: '🎮' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/tantralogic-ai/', icon: '💼' },
    { name: 'X_Global', url: 'https://x.com/Tantralogi35239', icon: '🐦' },
    { name: 'Instagram', url: 'https://www.instagram.com/tantralogic_ai/', icon: '📷' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585960048396', icon: '👥' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <ParticleField />
      <WarmSymbioticField />
      
      {/* Animated warm gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2410_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2410_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating warm orbs */}
      <motion.div
        className="fixed top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="fixed bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/5 to-red-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Navigation - Simplified */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-amber-400 transition">Features</a>
            <a href="#roadmap" className="text-gray-300 hover:text-amber-400 transition">Roadmap</a>
            <a href="#integrations" className="text-gray-300 hover:text-amber-400 transition">Integrations</a>
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
                boxShadow: ['0 0 20px rgba(251,191,36,0.2)', '0 0 40px rgba(251,191,36,0.4)', '0 0 20px rgba(251,191,36,0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mr-2" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                🚀 MVP Launching Tomorrow • 6:30 PM
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Intelligent Secret Scanning
              </span>
              <br />
              <span className="text-white">That Actually Works</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
              Stop worrying about exposed API keys and tokens. LeakHunterX helps you find and fix secrets 
              before they become a problem. Simple, fast, and reliable.
            </p>

            {/* Countdown Timer */}
            <div className="mb-20">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </motion.div>

          {/* Stats */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 rounded-2xl blur-xl group-hover:from-amber-500/10 group-hover:via-amber-500/5 group-hover:to-orange-500/10 transition-all duration-500" />
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
              Everything You <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Need</span>
            </h2>
            <p className="text-xl text-gray-400">Simple, powerful features that work out of the box</p>
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
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-5xl mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                        🟢 Available Now
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              What's <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Next</span>
            </h2>
            <p className="text-xl text-gray-400">Our roadmap to making secret scanning even better</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Current - MVP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
              <div className="relative pt-2">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white mb-4">
                  🚀 Launching Tomorrow
                </div>
                <h3 className="text-2xl font-bold mb-2">MVP Launch</h3>
                <p className="text-amber-400/80 text-sm mb-4">Tomorrow • 6:30 PM</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                    Basic secret scanning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                    GitHub integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                    Real-time alerts
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                    CI/CD support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Next Up - Q2 2026 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="relative pt-2">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white mb-4">
                  🔮 Coming Q2 2026
                </div>
                <h3 className="text-2xl font-bold mb-2">Team Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                    Custom rules engine
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                    Advanced analytics
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Planned - H2 2026 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <div className="relative pt-2">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-bold text-white mb-4">
                  📋 Planned H2 2026
                </div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    AI validation engine
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    Historical scanning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    Enterprise features
                  </li>
                </ul>
              </div>
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
              Works With Your <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-400">Seamless integration with tools you already use</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-amber-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-lg font-semibold text-gray-400 group-hover:text-amber-400 transition">
                    {integration.name}
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your First{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Secret?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 100+ developers who are already using LeakHunterX to keep their code secure.
            </p>
            
            <motion.div
              animate={{ 
                boxShadow: ['0 0 20px rgba(251,191,36,0.2)', '0 0 40px rgba(251,191,36,0.3)', '0 0 20px rgba(251,191,36,0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mr-2" />
              <span className="text-amber-400">Launching tomorrow at 6:30 PM</span>
            </motion.div>

            {/* Email Support */}
            <div className="mt-6 text-gray-500">
              <span className="text-amber-400">📧</span> support@leakhunterx.com
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="relative border-t border-amber-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo />
              <p className="text-gray-400 text-sm mt-4">
                Find secrets before they find you.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-amber-400 transition">Features</a></li>
                <li><a href="#roadmap" className="hover:text-amber-400 transition">Roadmap</a></li>
                <li><a href="#integrations" className="hover:text-amber-400 transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@leakhunterx.com" className="hover:text-amber-400 transition">support@leakhunterx.com</a></li>
                <li className="text-gray-500">Response within 24h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:border-amber-500/50 transition-all overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-amber-400 transition">
                    {social.name}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-amber-500/20 text-sm text-gray-500">
            <div>© 2026 LeakHunterX. All rights reserved.</div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                🚀 Launching Tomorrow • 6:30 PM
              </span>
              <span className="text-amber-400/50">|</span>
              <span className="text-amber-400">support@leakhunterx.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;