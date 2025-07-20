import { PanelSectionRow, ButtonItem } from "@decky/ui";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ClipboardButton: React.FC = () => {
  const handleClipboardClick = () => {
    window.open("https://github.com/xXJSONDeruloXx/decky-lossless-scaling-vk/wiki/Clipboard", "_blank");
  };
  return (
    <div style={{ margin: '8px 0' }}>
      <button
        style={{ padding: '8px 16px', fontSize: '15px', borderRadius: '5px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={handleClipboardClick}
      >
        <span style={{ marginRight: '8px' }}>🔗</span>
        Launch Option Clipboard
      </button>
    </div>
  );
}
