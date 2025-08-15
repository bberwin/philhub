import type { Meta, StoryObj } from '@storybook/react';
import { ResourceCard } from './ResourceCard';
import { Book, Headphones, Video, BookOpen } from 'lucide-react';

const meta: Meta<typeof ResourceCard> = {
  title: 'Components/ResourceCard',
  component: ResourceCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LectureSeries: Story = {
  args: {
    title: 'Introduction to Ethics',
    description: 'An introductory lecture series on the fundamentals of ethics and moral philosophy',
    icon: Book,
    type: 'Lecture Series',
    author: 'Prof. Sarah Mitchell',
    duration: '12 lectures',
    isNew: true,
  },
};

export const Podcast: Story = {
  args: {
    title: 'Philosophy Podcast',
    description: 'Weekly discussions on major philosophical ideas and contemporary issues',
    icon: Headphones,
    type: 'Podcast',
    author: 'Dr. James Chen',
    duration: '45 min',
  },
};

export const VideoSeries: Story = {
  args: {
    title: 'History of Philosophy',
    description: 'A comprehensive video series exploring philosophical thought through the ages',
    icon: Video,
    type: 'Video Series',
    author: 'Philosophy Hub Team',
    duration: '20 episodes',
  },
};

export const Reading: Story = {
  args: {
    title: 'Existentialist Readings',
    description: 'Selected texts from Sartre, Camus, de Beauvoir, and other existentialist thinkers',
    icon: BookOpen,
    type: 'Reading Collection',
    author: 'Various Authors',
  },
};