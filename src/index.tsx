// 移除 Decky UI 组件和图标，全部用原生元素
import { definePlugin } from "@decky/api";
import { Content } from "./components/Content";

export default definePlugin(() => {
  return {
    name: "Lossless Scaling VK",
    title: <div>Lossless Scaling VK</div>,
    content: <Content />,
    icon: <span>��</span>,
  };
});
