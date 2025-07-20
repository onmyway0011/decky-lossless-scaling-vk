import { PanelSectionRow, ButtonItem } from "@decky/ui";
import { FaExternalLinkAlt } from "react-icons/fa";

export const WikiButton: React.FC = () => {
  const handleWikiClick = () => {
    window.open("https://github.com/PancakeTAS/lsfg-vk/wiki", "_blank");
  };
  return (
    <div style={{ margin: '8px 0' }}>
      <button
        style={{ padding: '8px 16px', fontSize: '15px', borderRadius: '5px', background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={handleWikiClick}
      >
        <span style={{ marginRight: '8px' }}>📖</span>
        LSFG-VK Wiki
      </button>
    </div>
  );
}
