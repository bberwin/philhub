import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from './FeatureGrid';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Sections/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};