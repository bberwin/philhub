import { Button } from '@repo/ui/Button'
import { Heart } from 'lucide-react'

function App() {
  const handleDonate = () => {
    window.open('https://www.gofundme.com/f/launch-free-philosophy-hub-open-access-learning-for-all', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 rounded-full">
            <span className="text-amber-700 font-semibold">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Free Philosophy Hub
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Open access learning for all. Discover wisdom from the world's greatest thinkers and join our community of curious minds exploring life's biggest questions.
          </p>
          
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Donate to support launch
            </p>
            <Button 
              variant="primary" 
              size="large" 
              icon={Heart}
              onClick={handleDonate}
              className="shadow-lg hover:shadow-xl"
            >
              Support Our Mission
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Help us make philosophy accessible to everyone • Every contribution matters
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
