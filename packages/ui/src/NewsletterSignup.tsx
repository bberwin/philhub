import React, { useState } from 'react';
import { Button } from './Button';
import { Send, X } from 'lucide-react';
import { clsx } from 'clsx';

interface NewsletterSignupProps {
  variant?: 'inline' | 'popup';
  onClose?: () => void;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = 'inline',
  onClose 
}) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
  };
  
  if (variant === 'popup') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Stay in the Loop
          </h3>
          <p className="text-gray-600 mb-6">
            Get weekly insights on philosophy, ethics, and the art of thinking well.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <Button variant="primary" fullWidth icon={Send}>
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Join Our Philosophy Community
        </h3>
        <p className="text-gray-600 mb-6">
          Get weekly insights delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <Button variant="primary" icon={Send}>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};