import { useState, FormEvent, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Eye, EyeSlash, User, Envelope, Lock, Check } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, Toaster } from 'sonner'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useKV<boolean>('remember-me', false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPuppy, setShowPuppy] = useState(false)

  useEffect(() => {
    const runPuppy = () => {
      setShowPuppy(true)
      setTimeout(() => setShowPuppy(false), 4000)
    }

    const interval = setInterval(runPuppy, 15000)
    const initialDelay = setTimeout(runPuppy, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialDelay)
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError('Password is required')
      return false
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      return false
    }
    setPasswordError('')
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (!isEmailValid || !isPasswordValid) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
      toast.success('Login successful!')
      
      setTimeout(() => {
        setShowSuccess(false)
        setEmail('')
        setPassword('')
      }, 2500)
    }, 1500)
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="cosmic-particles" />
      
      <AnimatePresence>
        {showPuppy && (
          <motion.div
            initial={{ x: -200, y: 0 }}
            animate={{ 
              x: window.innerWidth + 200,
              y: [0, -20, 0, -15, 0, -10, 0]
            }}
            exit={{ x: window.innerWidth + 200 }}
            transition={{ 
              duration: 4,
              ease: "linear",
              y: {
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1]
              }
            }}
            className="fixed bottom-8 z-[9999] pointer-events-none"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <motion.g
                animate={{
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <ellipse cx="50" cy="70" rx="28" ry="18" fill="oklch(0.65 0.15 250)" opacity="0.2" />
                
                <motion.path
                  d="M 60 45 Q 75 40 80 30 L 85 25"
                  stroke="oklch(0.65 0.15 250)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    d: [
                      "M 60 45 Q 75 40 80 30 L 85 25",
                      "M 60 45 Q 75 45 82 35 L 88 32",
                      "M 60 45 Q 75 40 80 30 L 85 25"
                    ]
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <ellipse cx="50" cy="50" rx="22" ry="25" fill="oklch(0.65 0.15 250)" />
                <ellipse cx="50" cy="48" rx="20" ry="22" fill="oklch(0.72 0.15 250)" />
                
                <circle cx="35" cy="35" r="10" fill="oklch(0.65 0.15 250)" />
                <circle cx="35" cy="33" r="8" fill="oklch(0.72 0.15 250)" />
                <ellipse cx="38" cy="32" rx="2" ry="3" fill="oklch(0.15 0.02 240)" />
                
                <circle cx="65" cy="35" r="10" fill="oklch(0.65 0.15 250)" />
                <circle cx="65" cy="33" r="8" fill="oklch(0.72 0.15 250)" />
                <ellipse cx="68" cy="32" rx="2" ry="3" fill="oklch(0.15 0.02 240)" />
                
                <ellipse cx="38" cy="45" rx="5" ry="7" fill="oklch(0.15 0.02 240)" />
                <ellipse cx="62" cy="45" rx="5" ry="7" fill="oklch(0.15 0.02 240)" />
                
                <path
                  d="M 45 52 Q 50 56 55 52"
                  stroke="oklch(0.15 0.02 240)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse cx="50" cy="50" rx="4" ry="5" fill="oklch(0.15 0.02 240)" />
                
                <motion.ellipse
                  cx="25"
                  cy="62"
                  rx="8"
                  ry="12"
                  fill="oklch(0.65 0.15 250)"
                  animate={{
                    cy: [62, 64, 62],
                    ry: [12, 10, 12]
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    ease: "easeInOut"
                  }}
                />
                <ellipse cx="25" cy="72" rx="7" ry="5" fill="oklch(0.15 0.02 240)" />
                
                <motion.ellipse
                  cx="42"
                  cy="65"
                  rx="8"
                  ry="12"
                  fill="oklch(0.65 0.15 250)"
                  animate={{
                    cy: [65, 67, 65],
                    ry: [12, 10, 12]
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <ellipse cx="42" cy="75" rx="7" ry="5" fill="oklch(0.15 0.02 240)" />
                
                <motion.ellipse
                  cx="58"
                  cy="65"
                  rx="8"
                  ry="12"
                  fill="oklch(0.65 0.15 250)"
                  animate={{
                    cy: [65, 67, 65],
                    ry: [12, 10, 12]
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                    ease: "easeInOut"
                  }}
                />
                <ellipse cx="58" cy="75" rx="7" ry="5" fill="oklch(0.15 0.02 240)" />
                
                <motion.ellipse
                  cx="75"
                  cy="62"
                  rx="8"
                  ry="12"
                  fill="oklch(0.65 0.15 250)"
                  animate={{
                    cy: [62, 64, 62],
                    ry: [12, 10, 12]
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut"
                  }}
                />
                <ellipse cx="75" cy="72" rx="7" ry="5" fill="oklch(0.15 0.02 240)" />
                
                <circle cx="42" cy="40" r="2.5" fill="oklch(0.98 0 0)" />
                <circle cx="72" cy="40" r="2.5" fill="oklch(0.98 0 0)" />
              </motion.g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="min-h-screen flex items-center justify-center p-4" style={{ perspective: '2000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="neu-card-3d p-8 md:p-10 relative overflow-hidden">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, z: -50 }}
                animate={{ opacity: 1, scale: 1, z: 0 }}
                exit={{ opacity: 0, scale: 0.9, z: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  initial={{ scale: 0, rotateY: -180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="neu-icon-success mb-4"
                >
                  <Check size={32} weight="bold" className="text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Success!</h3>
                <p className="text-muted-foreground">Redirecting to your dashboard...</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center mb-8">
            <motion.div 
              className="neu-icon mb-4"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <User size={32} weight="duotone" className="text-primary" />
            </motion.div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2 text-foreground">Welcome back</h2>
            <p className="text-sm text-muted-foreground">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-2">
              <div className="neu-input-wrapper">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                    <Envelope size={20} weight="duotone" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) validateEmail(e.target.value)
                    }}
                    onBlur={() => validateEmail(email)}
                    className="neu-input"
                    placeholder="Email address"
                    autoComplete="email"
                  />
                </div>
              </div>
              {emailError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive ml-1"
                >
                  {emailError}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <div className="neu-input-wrapper">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                    <Lock size={20} weight="duotone" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (passwordError) validatePassword(e.target.value)
                    }}
                    onBlur={() => validatePassword(password)}
                    className="neu-input pr-12"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="neu-toggle absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeSlash size={20} weight="duotone" />
                    ) : (
                      <Eye size={20} weight="duotone" />
                    )}
                  </button>
                </div>
              </div>
              {passwordError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive ml-1"
                >
                  {passwordError}
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`neu-checkbox ${rememberMe ? 'checked' : ''}`}>
                    <AnimatePresence>
                      {rememberMe && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        >
                          <Check size={14} weight="bold" className="text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  toast.info('Password reset would be initiated here')
                }}
              >
                Forgot password?
              </a>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: isLoading ? 1 : 0.98, z: isLoading ? 0 : -10 }}
              whileHover={{ scale: 1.02, z: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="neu-button w-full relative"
            >
              <span className={`btn-text ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Sign In
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="neu-spinner" />
                </div>
              )}
            </motion.button>
          </form>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a
                href="#"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  toast.info('Sign up would be initiated here')
                }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default App
