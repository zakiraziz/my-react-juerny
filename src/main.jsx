import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Error Boundary for the root component
class RootErrorBoundary extends React.Component {
  state = { hasError: false }
  
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Root Error Boundary caught:', error, errorInfo)
    // You can log errors to an error reporting service here
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      )
    }
    return this.props.children
  }
}

// Performance monitoring wrapper
const PerfWrapper = ({ children }) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logPerf = () => {
        console.log('Performance metrics:', {
          memory: window.performance.memory,
          timing: window.performance.timing
        })
      }
      window.addEventListener('load', logPerf)
      return () => window.removeEventListener('load', logPerf)
    }
  }, [])
  
  return children
}

// Service Worker Registration
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('SW registered:', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed:', registrationError)
        })
    })
  }
}

// Initialize the app
const container = document.getElementById('root')
const root = createRoot(container)

try {
  // Register service worker
  registerServiceWorker()
  
  // Render the app
  root.render(
    <StrictMode>
      <PerfWrapper>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </PerfWrapper>
    </StrictMode>
  )
  
  // Web Vitals Reporting (remove in production if not needed)
  if (process.env.NODE_ENV === 'development') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
} catch (error) {
  console.error('Initialization failed:', error)
  root.render(
    <div className="critical-error">
      <h1>Failed to load application</h1>
      <p>Please try refreshing the page</p>
    </div>
  )
}
