import React from 'react';

interface StatusDisplayProps {
  dllDetected: boolean;
  dllDetectionStatus: string;
  isInstalled: boolean;
  installationStatus: string;
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({
  dllDetected,
  dllDetectionStatus,
  isInstalled,
  installationStatus,
}) => {
  return (
    <div style={{ margin: '12px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
        Status
      </div>
      <div style={{ marginBottom: '4px' }}>
        <span style={{ fontWeight: 'bold' }}>Installation: </span>
        <span style={{ color: isInstalled ? '#4CAF50' : '#f44336' }}>
          {installationStatus}
        </span>
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>DLL Detection: </span>
        <span style={{ color: dllDetected ? '#4CAF50' : '#f44336' }}>
          {dllDetectionStatus}
        </span>
      </div>
    </div>
  );
}
