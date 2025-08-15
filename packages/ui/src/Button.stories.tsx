import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Heart } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Subscribe',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'View Resources',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Donate',
    icon: Heart,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Get Started',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable',
  },
};