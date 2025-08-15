import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const ColorPalette = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-700 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-gray-500">#B45309</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-600 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Primary Light</p>
            <p className="text-xs text-gray-500">#D97706</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-amber-800 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Primary Dark</p>
            <p className="text-xs text-gray-500">#92400E</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Neutral Colors</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-900 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Text Primary</p>
            <p className="text-xs text-gray-500">#111827</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-600 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Text Secondary</p>
            <p className="text-xs text-gray-500">#4B5563</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Background</p>
            <p className="text-xs text-gray-500">#F3F4F6</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Accent Colors</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-500 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Success</p>
            <p className="text-xs text-gray-500">#10B981</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-500 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Info</p>
            <p className="text-xs text-gray-500">#3B82F6</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-red-500 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Error</p>
            <p className="text-xs text-gray-500">#EF4444</p>
          </div>
        </div>
      </div>
    </div>
  ),
};