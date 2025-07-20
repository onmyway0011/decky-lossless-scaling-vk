import React from 'react';
import { ConfigurationData } from '../config/configSchema';

interface UsageInstructionsProps {
  config: ConfigurationData;
}

export const UsageInstructions: React.FC<UsageInstructionsProps> = ({ config }) => {
  const instructions = [
    "1. Install Lossless Scaling from Steam",
    "2. Install lsfg-vk using the button above",
    "3. Launch a game",
    "4. Press Ctrl+Shift+O to open Lossless Scaling",
    "5. Enable 'Frame Generation' in Lossless Scaling",
    "6. Set your desired FPS multiplier",
    "7. Enjoy higher FPS!",
  ];

  const tips = [
    "• Make sure your game supports Vulkan",
    "• Some games may not work with frame generation",
    "• You can adjust settings in the configuration section above",
    "• If you experience issues, try disabling HDR mode",
    "• Performance mode uses a lighter model for better performance",
  ];

  return (
    <div style={{ margin: '12px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
        Usage Instructions
      </div>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Steps:</div>
        {instructions.map((instruction, index) => (
          <div key={index} style={{ marginBottom: '2px', fontSize: '12px' }}>
            {instruction}
          </div>
        ))}
      </div>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Tips:</div>
        {tips.map((tip, index) => (
          <div key={index} style={{ marginBottom: '2px', fontSize: '12px', color: '#666' }}>
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}
