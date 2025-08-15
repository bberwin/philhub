import React from 'react';
import { clsx } from 'clsx';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const styles = {
    1: 'text-4xl md:text-5xl font-bold text-gray-900',
    2: 'text-3xl md:text-4xl font-bold text-gray-900',
    3: 'text-2xl md:text-3xl font-semibold text-gray-900',
    4: 'text-xl md:text-2xl font-semibold text-gray-900',
  };
  
  return (
    <Tag className={clsx(styles[level], className)}>
      {children}
    </Tag>
  );
};