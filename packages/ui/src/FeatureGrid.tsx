import React from 'react';
import { BookOpen, Users, Lightbulb, Calendar } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Curated Resources',
    description: 'Access carefully selected philosophical texts, lectures, and guides.'
  },
  {
    icon: Users,
    title: 'Community Discussions',
    description: 'Engage with fellow thinkers in meaningful conversations.'
  },
  {
    icon: Lightbulb,
    title: 'Daily Insights',
    description: 'Receive thought-provoking ideas to ponder throughout your day.'
  },
  {
    icon: Calendar,
    title: 'Live Events',
    description: 'Join virtual seminars and discussions with philosophy experts.'
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose PhilHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Icon className="text-amber-700" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};