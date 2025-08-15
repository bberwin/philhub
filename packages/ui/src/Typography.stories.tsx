import type { Meta } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Foundation/Typography',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

export const AllHeadings = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <p className="text-lg">Large paragraph text for important content.</p>
      <p>Regular paragraph text for body content.</p>
      <p className="text-sm text-gray-600">Small text for captions and metadata.</p>
    </div>
  ),
};