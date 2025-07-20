import React, { useEffect } from 'react';
// 移除 Decky UI 组件，全部用原生元素
import { InstallationButton } from './InstallationButton';
import { StatusDisplay } from './StatusDisplay';
import { ConfigurationSection } from './ConfigurationSection';
import { UsageInstructions } from './UsageInstructions';
import { WikiButton } from './WikiButton';
import { ClipboardButton } from './ClipboardButton';
import { PluginUpdateChecker } from './PluginUpdateChecker';
import {
  useInstallationStatus,
  useDllDetection,
  useLsfgConfig,
} from "../hooks/useLsfgHooks";
import { useInstallationActions } from "../hooks/useInstallationActions";
import { ConfigurationData } from '../config/configSchema';

export const Content: React.FC = () => {
  const {
    isInstalled,
    installationStatus,
    setIsInstalled,
    setInstallationStatus,
  } = useInstallationStatus();

  const { dllDetected, dllDetectionStatus } = useDllDetection();

  const { config, loadLsfgConfig, updateField } = useLsfgConfig();

  const { isInstalling, isUninstalling, handleInstall, handleUninstall } =
    useInstallationActions();

  // Reload config when installation status changes
  useEffect(() => {
    if (isInstalled) {
      loadLsfgConfig();
    }
  }, [isInstalled, loadLsfgConfig]);

  // Generic configuration change handler
  const handleConfigChange = async (
    fieldName: keyof ConfigurationData,
    value: boolean | number,
  ) => {
    await updateField(fieldName, value);
  };

  const onInstall = () => {
    handleInstall(setIsInstalled, setInstallationStatus, loadLsfgConfig);
  };

  const onUninstall = () => {
    handleUninstall(setIsInstalled, setInstallationStatus);
  };

  return (
    <div style={{ padding: '16px' }}>
      {/* @ts-ignore */}
      <InstallationButton
        isInstalled={isInstalled}
        isInstalling={isInstalling}
        isUninstalling={isUninstalling}
        onInstall={onInstall}
        onUninstall={onUninstall}
      /> as any

      {/* @ts-ignore */}
      <StatusDisplay
        dllDetected={dllDetected}
        dllDetectionStatus={dllDetectionStatus}
        isInstalled={isInstalled}
        installationStatus={installationStatus}
      /> as any

      {/* Configuration Section - only show if installed */}
      {isInstalled && (
        /* @ts-ignore */
        <ConfigurationSection
          config={config}
          onConfigChange={handleConfigChange}
        /> as any
      )}

      {/* @ts-ignore */}
      <UsageInstructions config={config} /> as any

      {/* @ts-ignore */}
      <WikiButton /> as any
      {/* @ts-ignore */}
      <ClipboardButton /> as any

      {/* Plugin Update Checker */}
      {/* @ts-ignore */}
      <PluginUpdateChecker /> as any
    </div>
  );
}
