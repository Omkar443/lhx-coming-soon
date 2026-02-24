import React, { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '../utils/helpers'

const WaitlistForm: React.FC<{ className?: string }> = ({ className }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className={cn('relative', className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden focus-within:border-primary-500/50 transition-all">
          <Mail className="w-5 h-5 text-gray-400 ml-4" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email for early access"
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
        <div className="absolute -bottom-12 left-0 right-0 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400">Thanks! You're on the list</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default WaitlistForm