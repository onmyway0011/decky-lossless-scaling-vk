import React, { useState, ChangeEvent } from 'react';
// 移除 Decky UI 组件，全部用原生元素
import { ConfigurationData } from "../config/configSchema";

type ConfigField = keyof ConfigurationData;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'panel-section-row': {
        children?: React.ReactNode;
        style?: React.CSSProperties;
        onClick?: React.MouseEventHandler<HTMLElement>;
      };
      'button-item': React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement> & {
          disabled?: boolean;
          layout?: 'horizontal' | 'vertical';
          onClick?: React.MouseEventHandler<HTMLButtonElement>;
        },
        HTMLButtonElement
      >;
      'text-field': React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement> & {
          label?: string;
          description?: string;
          onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
        },
        HTMLInputElement
      >;
    }
  }
}

interface ConfigurationSectionProps {
  config: ConfigurationData;
  onConfigChange: (fieldName: keyof ConfigurationData, value: boolean | number) => Promise<void>;
}

export const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({
  config,
  onConfigChange
}) => {
  const [importExportVisible, setImportExportVisible] = useState(false);
  const [importData, setImportData] = useState('');

  const handleExport = () => {
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `lsfg-config-${new Date().toISOString()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  const handleImport = () => {
    // 事件参数使用_前缀避免未使用警告
    try {
      const parsed = JSON.parse(importData);
      Object.entries(parsed).forEach(([key, value]) => {
        if (Object.keys(config).includes(key)) {
          onConfigChange(
            key as ConfigField,
            typeof value === 'boolean' || typeof value === 'number' 
              ? value 
              : Number(value)
          );
        }
      });
      setImportExportVisible(false);
    } catch (e) {
      console.error('Invalid config JSON:', e);
    }
  };
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', borderBottom: '1px solid #ccc', paddingBottom: '4px' }}>
        LSFG Configuration
      </div>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setImportExportVisible(!importExportVisible)} style={{ padding: '6px 14px', borderRadius: '4px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>
          {importExportVisible ? 'Hide Import/Export' : 'Show Import/Export'}
        </button>
      </div>
      {importExportVisible && (
        <div style={{ marginBottom: '10px' }}>
          <button onClick={handleExport} style={{ marginRight: '10px', padding: '6px 14px', borderRadius: '4px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Export Configuration
          </button>
          <input
            type="text"
            placeholder="Paste JSON config"
            value={importData}
            onChange={(e) => setImportData(e.target.value)}
            style={{ width: '220px', marginRight: '10px', padding: '6px' }}
          />
          <button onClick={() => handleImport()} style={{ padding: '6px 14px', borderRadius: '4px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Import Configuration
          </button>
        </div>
      )}
      <div style={{ margin: '12px 0' }}>
        <label>
          <input type="checkbox" checked={config.enable_lsfg} onChange={e => onConfigChange('enable_lsfg', e.target.checked)} /> Enable LSFG
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>FPS Multiplier: {config.multiplier}x
          <input type="range" min={2} max={4} step={1} value={config.multiplier} onChange={e => onConfigChange('multiplier', Number(e.target.value))} />
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>Flow Scale: {Math.round(config.flow_scale * 100)}%
          <input type="range" min={0.25} max={1.0} step={0.01} value={config.flow_scale} onChange={e => onConfigChange('flow_scale', Number(e.target.value))} />
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>
          <input type="checkbox" checked={config.hdr} onChange={e => onConfigChange('hdr', e.target.checked)} /> HDR Mode
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>
          <input type="checkbox" checked={config.perf_mode} onChange={e => onConfigChange('perf_mode', e.target.checked)} /> Performance Mode
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>
          <input type="checkbox" checked={config.immediate_mode} onChange={e => onConfigChange('immediate_mode', e.target.checked)} /> Immediate Mode
        </label>
      </div>
      <div style={{ margin: '12px 0' }}>
        <label>Game Frame Cap: {config.frame_cap === 0 ? '(Disabled)' : `(${config.frame_cap} FPS)`}
          <input type="range" min={0} max={60} step={1} value={config.frame_cap} onChange={e => onConfigChange('frame_cap', Number(e.target.value))} />
        </label>
      </div>
    </div>
  );
}
