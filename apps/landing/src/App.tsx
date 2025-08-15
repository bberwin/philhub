import { Button } from '@repo/ui/Button'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

function App() {
  const handleDonate = () => {
    window.open('https://www.gofundme.com/f/launch-free-philosophy-hub-open-access-learning-for-all', '_blank')
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/IMG_5104.PNG)',
        backgroundPosition: 'left center',
        backgroundSize: 'contain'
      }}
    >
      {/* Right side content area */}
      <div className="min-h-screen flex items-center justify-end">
        <div className="w-full max-w-2xl p-8 lg:p-16">
          
          {/* Main Title - Classical Serif Font */}
          <div className="mb-8">
            <h1 className="font-serif text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4 text-stone-800">
              <span className="block">FREE</span>
              <span className="block">PHILOSOPHY</span>
              <span className="block text-amber-700">HUB</span>
            </h1>
            
            {/* Subtitle - Clean Sans-serif */}
            <p className="font-sans text-xl lg:text-2xl font-semibold tracking-[0.3em] text-stone-700 mt-8">
              COMING SOON
            </p>
          </div>

          {/* Donation Section */}
          <div className="space-y-6 mb-12">
            <p className="font-sans text-lg lg:text-xl text-stone-700 font-medium">
              Donate to support the launch
            </p>
            
            <Button 
              onClick={handleDonate}
              className="bg-amber-700 hover:bg-amber-800 text-white font-sans font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-none"
            >
              Donate
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="text-stone-600 hover:text-amber-700 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="#" 
              className="text-stone-600 hover:text-amber-700 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a 
              href="#" 
              className="text-stone-600 hover:text-amber-700 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="#" 
              className="text-stone-600 hover:text-amber-700 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-sm text-stone-600">
            © 2025 Free Philosophy Hub
          </p>
        </div>
      </div>

      {/* Mobile responsive overlay for smaller screens */}
      <div className="lg:hidden absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6">
        <div className="text-center text-white max-w-md">
          <h1 className="font-serif text-5xl font-bold leading-tight mb-4">
            <span className="block">FREE</span>
            <span className="block">PHILOSOPHY</span>
            <span className="block text-amber-300">HUB</span>
          </h1>
          
          <p className="font-sans text-lg font-semibold tracking-[0.2em] text-gray-300 mb-8">
            COMING SOON
          </p>

          <div className="space-y-4 mb-8">
            <p className="font-sans text-base text-gray-300">
              Donate to support the launch
            </p>
            <Button 
              onClick={handleDonate}
              className="bg-amber-600 hover:bg-amber-700 text-white font-sans font-semibold px-6 py-3 rounded-lg"
            >
              Donate
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">
              <Youtube size={24} />
            </a>
          </div>

          <p className="font-sans text-xs text-gray-500">
            © 2025 Free Philosophy Hub
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
