import React, { useState } from "react";
import { toaster, installLsfgVk, uninstallLsfgVk } from "@decky/api";

declare module "@decky/api" {
  function installLsfgVk(
    progressCallback?: (progress: number, message: string) => void,
  ): Promise<{ success: boolean; error?: string }>;
  function uninstallLsfgVk(): Promise<{ success: boolean; error?: string; message?: string }>;
}

export function useInstallationActions() {
  const [isInstalling, setIsInstalling] = useState<boolean>(false);
  const [isUninstalling, setIsUninstalling] = useState<boolean>(false);

  const handleInstall = async (
    setIsInstalled: (value: boolean) => void,
    setInstallationStatus: (value: string) => void,
    reloadConfig?: () => Promise<void>,
    progressCallback?: (progress: number, message: string) => void,
  ) => {
    setIsInstalling(true);
    setInstallationStatus("Installing lsfg-vk...");

    try {
      const result = await installLsfgVk(progressCallback);
      if (result.success) {
        setIsInstalled(true);
        setInstallationStatus("lsfg-vk installed successfully!");
        toaster.toast({
          title: "Installation Complete",
          body: "lsfg-vk has been installed successfully",
        });

        // Reload lsfg config after installation
        if (reloadConfig) {
          await reloadConfig();
        }
      } else {
        setInstallationStatus(`Installation failed: ${result.error}`);
        toaster.toast({
          title: "Installation Failed",
          body: result.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      setInstallationStatus(`Installation failed: ${error}`);
      toaster.toast({
        title: "Installation Failed",
        body: `Error: ${error}`,
      });
    } finally {
      setIsInstalling(false);
    }
  };

  const handleUninstall = async (
    setIsInstalled: (value: boolean) => void,
    setInstallationStatus: (value: string) => void,
  ) => {
    setIsUninstalling(true);
    setInstallationStatus("Uninstalling lsfg-vk...");

    try {
      const result = await uninstallLsfgVk();
      if (result.success) {
        setIsInstalled(false);
        setInstallationStatus("lsfg-vk uninstalled successfully!");
        toaster.toast({
          title: "Uninstallation Complete",
          body: result.message || "lsfg-vk has been uninstalled successfully",
        });
      } else {
        setInstallationStatus(`Uninstallation failed: ${result.error}`);
        toaster.toast({
          title: "Uninstallation Failed",
          body: result.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      setInstallationStatus(`Uninstallation failed: ${error}`);
      toaster.toast({
        title: "Uninstallation Failed",
        body: `Error: ${error}`,
      });
    } finally {
      setIsUninstalling(false);
    }
  };

  return {
    isInstalling,
    isUninstalling,
    handleInstall,
    handleUninstall,
  };
}
