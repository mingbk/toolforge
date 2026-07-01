# 🔧 ToolForge — 干净、快速、免费的在线开发工具

[![Website](https://img.shields.io/badge/website-toolforge.cn-blue)](https://toolforge.cn)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Tools](https://img.shields.io/badge/tools-8-orange)](https://toolforge.cn)

> 受够了广告满天飞、移动端一坨、加载慢到怀疑人生的在线工具站。自己写一个干净的。

## 🛠 工具清单

| 工具 | 说明 | 技术要点 |
|------|------|---------|
| 🕐 [时间戳转换](https://toolforge.cn/tools/timestamp.html) | Unix时间戳 ⇄ 日期时间互转 | 秒/毫秒切换、18时区、ISO 8601 |
| 📋 [JSON格式化](https://toolforge.cn/tools/json.html) | JSON格式化/压缩/校验 | 五类 token 语法高亮 |
| 🔄 [Base64/URL编解码](https://toolforge.cn/tools/base64.html) | Base64 + URL编码 + 图片互转 | 四 Tab 合一，中文友好 |
| 🆔 [UUID生成器](https://toolforge.cn/tools/uuid.html) | UUID v4 批量生成 | 去横线开关，单行复制 |
| 🎲 [随机字符串](https://toolforge.cn/tools/random.html) | 安全随机字符串生成 | `crypto.getRandomValues()` 真随机 |
| 🔒 [AES加解密](https://toolforge.cn/tools/aes.html) | AES-256-GCM 浏览器端加密 | PBKDF2 10万次迭代密钥派生 |
| 🔑 [RSA加解密](https://toolforge.cn/tools/rsa.html) | RSA-OAEP 公钥/私钥加解密 | 密钥对本地生成，支持导出 |
| 📝 [字数统计](https://toolforge.cn/tools/wordcount.html) | 中英文混合字数统计 | 中文按字、英文按词 |

## ✨ 特点

- **纯前端，零后端** — 所有计算在浏览器本地完成，加载后离线可用
- **无广告，加载快** — HTML/CSS/JS 原生实现，无框架、无追踪、无第三方依赖（统计脚本除外）
- **移动端友好** — 响应式布局，手机和桌面一样好用
- **本地加密** — AES/RSA 工具在浏览器内完成，密钥绝不离开你的设备
- **SEO 友好** — 每个工具配完整教程（`/guide/`），双向内链

## 🏗 技术栈

```
纯 HTML/CSS/JS（零框架）
托管：腾讯云 COS + 自定义域名
HTTPS：Let's Encrypt 免费 DV 证书
统计：百度统计
```

## 📂 项目结构

```
toolforge/
├── index.html                  # 中文首页
├── en/index.html               # 英文首页
├── tools/                      # 8 个工具页（中英）
├── guide/                      # 8 篇使用教程（中英）
├── css/style.css               # 全局深色主题
├── js/common.js                # 公共工具函数
├── robots.txt
└── sitemap.xml
```

## 🚀 本地运行

```bash
git clone https://github.com/yourname/toolforge.git
cd toolforge
# 直接浏览器打开 index.html，或用任意静态服务器：
python3 -m http.server 8080
```

## 📖 使用指南

每个工具都配了一篇 800-1500 字的使用指南，覆盖概念解释、跨语言示例、常见坑和 FAQ：

- 📖 [什么是时间戳？在线转换工具使用指南](https://toolforge.cn/guide/timestamp.html)
- 📖 [JSON格式化的正确姿势](https://toolforge.cn/guide/json.html)
- 📖 [Base64编码原理与实际应用](https://toolforge.cn/guide/base64.html)
- 更多 → [toolforge.cn/guide/](https://toolforge.cn/guide/)

## 🛡 安全性

- AES/RSA 加密使用 `Web Crypto API`（`crypto.subtle`），不自己造轮子
- 随机数使用 `crypto.getRandomValues()`，不用 `Math.random()`
- 所有加密运算在浏览器本地完成，密钥不经过网络
- 不收集用户数据，不存 localStorage

## 📄 License

MIT — 随便用，欢迎 PR 和 Issue。

## 🔗 链接

- 网站：[toolforge.cn](https://toolforge.cn)
- 问题反馈：[GitHub Issues](https://github.com/yourname/toolforge/issues)
