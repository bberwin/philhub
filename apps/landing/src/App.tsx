import { Button } from '@repo/ui/Button'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

function App() {
  const handleDonate = () => {
    window.open('https://www.gofundme.com/f/launch-free-philosophy-hub-open-access-learning-for-all', '_blank')
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100"
    >
      {/* Two-column layout: Images left (desktop), Content right */}
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left: philosophy image(s) - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center p-8">
          <img
            src="/IMG_5104.PNG"
            alt="Philosophy collage"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: text and donation */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-full max-w-2xl p-8 lg:p-16">
          
          {/* Main Title - Classical Serif Font */}
          <div className="mb-8">
            <h1 className="font-serif text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4">
              <span className="block text-black">FREE</span>
              <span className="block text-black">PHILOSOPHY</span>
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
    </div>
    </div>
  )
}

export default App
