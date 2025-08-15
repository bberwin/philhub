import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from './Card';
import { clsx } from 'clsx';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
  author?: string;
  duration?: string;
  isNew?: boolean;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon: Icon,
  type,
  author,
  duration,
  isNew = false,
}) => {
  return (
    <Card hover className="relative">
      {isNew && (
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          NEW
        </span>
      )}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-amber-100 rounded-lg">
          <Icon className="text-amber-700" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-amber-700 font-semibold uppercase tracking-wide">
              {type}
            </span>
            {duration && (
              <span className="text-xs text-gray-500">• {duration}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          {author && (
            <p className="text-xs text-gray-500">By {author}</p>
          )}
        </div>
      </div>
    </Card>
  );
};