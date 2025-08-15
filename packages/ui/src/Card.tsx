import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hover = false, className }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md p-6',
        hover && 'transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};