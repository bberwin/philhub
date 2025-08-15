import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { NewsletterSignup } from './NewsletterSignup';
import { ResourceCard } from './ResourceCard';
import { Book, Headphones, Video } from 'lucide-react';

export const StorybookDemo: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isOpen={navOpen} onToggle={() => setNavOpen(!navOpen)} />
      <HeroSection variant="live" />
      <FeatureGrid />
      
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Introduction to Ethics"
              description="An introductory lecture series on the fundamentals of ethics and moral philosophy"
              icon={Book}
              type="Lecture Series"
              author="Prof. Sarah Mitchell"
              duration="12 lectures"
              isNew={true}
            />
            <ResourceCard
              title="Philosophy Podcast"
              description="Weekly discussions on major philosophical ideas and contemporary issues"
              icon={Headphones}
              type="Podcast"
              author="Dr. James Chen"
              duration="45 min"
            />
            <ResourceCard
              title="History of Philosophy"
              description="A comprehensive video series exploring philosophical thought through the ages"
              icon={Video}
              type="Video Series"
              author="Philosophy Hub Team"
              duration="20 episodes"
            />
          </div>
        </div>
      </section>
      
      <NewsletterSignup variant="inline" />
    </div>
  );
};