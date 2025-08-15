import React from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

interface NavigationProps {
  isOpen: boolean;
  onToggle?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen, onToggle }) => {
  const navItems = ['Resources', 'About', 'Community', 'Contact'];
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-700">PhilHub</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onToggle}
              className="text-gray-700 hover:text-amber-700 focus:outline-none focus:text-amber-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={clsx(
          'md:hidden transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};