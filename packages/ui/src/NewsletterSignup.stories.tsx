import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterSignup } from './NewsletterSignup';

const meta: Meta<typeof NewsletterSignup> = {
  title: 'Components/NewsletterSignup',
  component: NewsletterSignup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    variant: 'inline',
  },
};

export const Popup: Story = {
  args: {
    variant: 'popup',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '500px', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};