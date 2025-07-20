import React, { useState, useEffect } from "react";
import { toaster } from "@decky/api";

interface PluginUpdateCheckerProps {
  // Add any props if needed
}

export const PluginUpdateChecker: React.FC<PluginUpdateCheckerProps> = () => {
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [currentVersion, setCurrentVersion] = useState<string>('');
  const [latestVersion, setLatestVersion] = useState<string>('');

  const checkForUpdates = async () => {
    setIsChecking(true);
    try {
      // Simulate API call to check for updates
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API call
      const mockLatestVersion: string = '0.4.1';
      const mockCurrentVersion: string = '0.4.0';
      
      setCurrentVersion(mockCurrentVersion);
      setLatestVersion(mockLatestVersion);
      setUpdateAvailable(mockLatestVersion !== mockCurrentVersion);
      
      if (mockLatestVersion !== mockCurrentVersion) {
        toaster.toast({
          title: "Update Available",
          body: `New version ${mockLatestVersion} is available!`,
        });
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
      toaster.toast({
        title: "Update Check Failed",
        body: "Failed to check for updates",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const performUpdate = async () => {
    try {
      // Simulate update process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toaster.toast({
        title: "Update Complete",
        body: "Plugin has been updated successfully!",
      });
      
      setUpdateAvailable(false);
      setCurrentVersion(latestVersion);
    } catch (error) {
      console.error('Error updating plugin:', error);
      toaster.toast({
        title: "Update Failed",
        body: "Failed to update plugin",
      });
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);

  return (
    <div style={{ margin: '12px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
        Plugin Updates
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontWeight: 'bold' }}>Current Version: </span>
        <span>{currentVersion || 'Checking...'}</span>
      </div>
      
      {latestVersion && (
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontWeight: 'bold' }}>Latest Version: </span>
          <span>{latestVersion}</span>
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={checkForUpdates}
          disabled={isChecking}
          style={{ padding: '6px 14px', borderRadius: '4px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {isChecking ? 'Checking...' : 'Check for Updates'}
        </button>
        
        {updateAvailable && (
          <button
            onClick={performUpdate}
            style={{ padding: '6px 14px', borderRadius: '4px', background: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            Update Now
          </button>
        )}
      </div>
    </div>
  );
};
