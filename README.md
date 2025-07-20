# Lossless Scaling Vulkan 版 - Decky 插件

🎮 专为Steam Deck优化的无损缩放解决方案，基于Vulkan实现更高效的帧率转换。

![插件截图](./assets/qam-screenshot.jpeg)

## ✨ 功能特性

✅ **核心功能**  
🔄 Vulkan驱动帧率转换  
📈 智能分辨率适配  
⚡ 性能模式/画质模式切换

✅ **增强功能**  
🎨 HDR兼容支持  
🔧 实时配置热更新  
📊 帧率监控覆盖

## 📦 安装指南

### 通过 Decky Store 安装

1. 打开Steam Deck的开发者模式
2. 在Decky插件商店搜索"Lossless Scaling VK"
3. 点击安装后重启QAM菜单

### 手动安装

```bash
curl -L https://install.deckbrew.xyz | sh
cd ~/homebrew/plugins
git clone https://github.com/your-repo/decky-lossless-scaling-vk.git
```

## 🛠️ 配置说明

```javascript
// 示例配置
{
  "frame_multiplier": 2,    // 帧率倍增系数
  "hdr_mode": "auto",       // HDR处理模式
  "perf_profile": "balanced" // 性能方案
}
```

## 🔄 更新日志

| 版本   | 日期       | 更新内容               |
| ------ | ---------- | ---------------------- |
| v1.2.0 | 2023-11-20 | 新增性能监控面板       |
| v1.1.5 | 2023-11-15 | 修复Vulkan内存泄漏问题 |

## 🤝 参与开发

欢迎提交PR！请遵循以下流程：

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/awesome`)
3. 提交更改 (`git commit -am 'Add awesome feature'`)
4. 推送分支 (`git push origin feature/awesome`)
5. 发起Pull Request

## 📄 许可协议

本项目采用 [MIT License](LICENSE) 授权

---

🔗 [官方文档](https://docs.lossless.com) | 🐞 [问题反馈](issues) | ⭐ [Github Star]()
