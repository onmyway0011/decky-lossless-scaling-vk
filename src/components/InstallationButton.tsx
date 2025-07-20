import React from 'react';
// 移除 Decky UI 组件，全部用原生元素

interface InstallationButtonProps {
  isInstalled: boolean;
  isInstalling: boolean;
  isUninstalling: boolean;
  onInstall: () => void;
  onUninstall: () => void;
}

export const InstallationButton: React.FC<InstallationButtonProps> = ({
  isInstalled,
  isInstalling,
  isUninstalling,
  onInstall,
  onUninstall,
}) => {
  const handleClick = () => {
    if (isInstalled) {
      onUninstall();
    } else {
      onInstall();
    }
  };

  const getButtonText = () => {
    if (isInstalling) return 'Installing...';
    if (isUninstalling) return 'Uninstalling...';
    return isInstalled ? 'Uninstall lsfg-vk' : 'Install lsfg-vk';
  };

  const isDisabled = isInstalling || isUninstalling;

  return (
    <div style={{ margin: '12px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
        Installation
      </div>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          background: isInstalled ? '#f44336' : '#4CAF50',
          color: '#fff',
          border: 'none',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.6 : 1,
        }}
      >
        {getButtonText()}
      </button>
    </div>
  );
};
