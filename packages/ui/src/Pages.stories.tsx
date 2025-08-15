import type { Meta } from '@storybook/react';
import { StorybookDemo } from './StorybookDemo';
import { HeroSection } from './HeroSection';

const meta: Meta = {
  title: 'Pages/Complete',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LandingPage = {
  render: () => <StorybookDemo />,
};

export const ComingSoonPage = {
  render: () => (
    <div className="min-h-screen">
      <HeroSection variant="coming-soon" />
    </div>
  ),
};