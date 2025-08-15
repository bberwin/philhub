import React from 'react';
import { Button } from './Button';
import { ArrowRight, Bell } from 'lucide-react';

interface HeroSectionProps {
  variant?: 'coming-soon' | 'live';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ variant = 'coming-soon' }) => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {variant === 'coming-soon' ? (
          <>
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-700 font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Philosophy for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover wisdom from the world's greatest thinkers. Join our community of curious minds exploring life's biggest questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" icon={Bell}>
                Get Early Access
              </Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Be the first to know when we launch • No spam, ever
            </p>
          </>
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to PhilHub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your gateway to philosophical wisdom and meaningful discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" icon={ArrowRight}>
                Explore Resources
              </Button>
              <Button variant="secondary" size="large">
                Join Community
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};