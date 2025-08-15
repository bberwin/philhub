import { Button } from '@repo/ui/Button'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

function App() {
  const handleDonate = () => {
    window.open('https://www.gofundme.com/f/launch-free-philosophy-hub-open-access-learning-for-all', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100">
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* Left side - Classical Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Greek Column */}
              <div className="absolute top-0 right-8 w-16 h-32 opacity-30">
                <svg viewBox="0 0 64 128" className="w-full h-full fill-amber-800">
                  <rect x="20" y="16" width="24" height="96" />
                  <ellipse cx="32" cy="16" rx="20" ry="8" />
                  <ellipse cx="32" cy="112" rx="20" ry="8" />
                  <path d="M12 8 Q32 0 52 8 L52 16 L12 16 Z" />
                </svg>
                {/* Owl on column */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-700">
                    <path d="M12 2C15.31 2 18 4.69 18 8C18 8.83 17.83 9.61 17.53 10.33L22 14.79L20.59 16.2L16.13 11.74C15.41 12.04 14.63 12.21 13.8 12.21H10.2C9.37 12.21 8.59 12.04 7.87 11.74L3.41 16.2L2 14.79L6.47 10.33C6.17 9.61 6 8.83 6 8C6 4.69 8.69 2 12 2M10 7C9.45 7 9 7.45 9 8S9.45 9 10 9 11 8.55 11 8 10.55 7 10 7M14 7C13.45 7 13 7.45 13 8S13.45 9 14 9 15 8.55 15 8 14.55 7 14 7Z"/>
                  </svg>
                </div>
              </div>

              {/* Stack of Books */}
              <div className="relative z-10">
                <svg viewBox="0 0 300 200" className="w-full h-auto">
                  {/* Book 1 */}
                  <g>
                    <rect x="40" y="140" width="120" height="20" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
                    <rect x="42" y="142" width="116" height="16" fill="#A0522D"/>
                    <line x1="50" y1="142" x2="50" y2="158" stroke="#654321" strokeWidth="0.5"/>
                  </g>
                  {/* Book 2 */}
                  <g>
                    <rect x="45" y="120" width="110" height="20" fill="#8B6914" stroke="#6B4423" strokeWidth="1"/>
                    <rect x="47" y="122" width="106" height="16" fill="#DAA520"/>
                    <line x1="55" y1="122" x2="55" y2="138" stroke="#6B4423" strokeWidth="0.5"/>
                  </g>
                  {/* Book 3 */}
                  <g>
                    <rect x="50" y="100" width="100" height="20" fill="#654321" stroke="#4A2C17" strokeWidth="1"/>
                    <rect x="52" y="102" width="96" height="16" fill="#8B4513"/>
                    <line x1="60" y1="102" x2="60" y2="118" stroke="#4A2C17" strokeWidth="0.5"/>
                  </g>

                  {/* Parchment */}
                  <g>
                    <path d="M20 160 Q25 155 180 155 Q185 160 180 165 L180 185 Q175 190 25 190 Q20 185 20 180 Z" 
                          fill="#F5E6D3" stroke="#D4B896" strokeWidth="1"/>
                    <line x1="30" y1="165" x2="160" y2="165" stroke="#8B7355" strokeWidth="0.5" opacity="0.6"/>
                    <line x1="30" y1="170" x2="150" y2="170" stroke="#8B7355" strokeWidth="0.5" opacity="0.6"/>
                    <line x1="30" y1="175" x2="140" y2="175" stroke="#8B7355" strokeWidth="0.5" opacity="0.6"/>
                  </g>

                  {/* Quill Pen */}
                  <g>
                    <path d="M160 170 Q170 160 175 155 Q180 150 185 155 Q180 160 170 165 L165 175" 
                          fill="#8B4513" stroke="#654321" strokeWidth="1"/>
                    <path d="M175 155 Q180 145 185 140 Q190 135 195 140 Q185 150 175 155" 
                          fill="#F4E4C1" stroke="#D4B896" strokeWidth="0.5"/>
                  </g>

                  {/* Candlestick */}
                  <g>
                    <rect x="200" y="150" width="8" height="30" fill="#B8860B" stroke="#8B6914" strokeWidth="1"/>
                    <ellipse cx="204" cy="180" rx="12" ry="4" fill="#B8860B" stroke="#8B6914" strokeWidth="1"/>
                    <ellipse cx="204" cy="150" rx="6" ry="3" fill="#B8860B" stroke="#8B6914" strokeWidth="1"/>
                    {/* Flame */}
                    <ellipse cx="204" cy="145" rx="3" ry="8" fill="#FF6B35" opacity="0.8"/>
                    <ellipse cx="204" cy="143" rx="2" ry="5" fill="#FFD700" opacity="0.9"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-wide">
                <span className="text-stone-800">FREE</span><br/>
                <span className="text-stone-800">PHILOSOPHY</span><br/>
                <span className="text-amber-700">HUB</span>
              </h1>
              
              <p className="text-2xl font-semibold text-stone-700 mt-6 tracking-widest">
                COMING SOON
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-lg text-stone-700 mb-4 font-medium">
                  Donate to support the launch
                </p>
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={handleDonate}
                  className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Donate
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-6 pt-8">
                <a href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-stone-600 pt-4">
                © 2024 Free Philosophy Hub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
