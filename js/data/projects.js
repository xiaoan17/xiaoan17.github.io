// 开源项目数据 —— 新项目加在数组最前面
// 字段: name 项目名; url 仓库链接; desc 简介;
//       lang 主要语言(可选); stars star 数,0 显示 "★ 0",null 则不显示(可选)
//       updated 最近更新月份,如 "2026-09"(可选)
//       featured true 时以截图大卡展示,需配 img(截图路径,放在 images/projects/)
window.PROJECTS = [
  {
    name: "Transport Journal Match",
    url: "https://github.com/xiaoan17/transport-journal-match",
    desc: "交通运输领域投稿期刊匹配桌面工具：输入论文标题和摘要，基于本地语料库的语义相似度推荐目标期刊，并给出每本期刊的证据论文。向量化与推荐完全离线运行，不依赖远程 Embedding 服务。",
    lang: "TypeScript",
    stars: 0,
    updated: "2026-09",
    featured: true,
    img: "images/projects/transport-journal-match.png"
  },
  {
    name: "Dashboard",
    url: "https://github.com/xiaoan17/dashboard",
    desc: "个人桌面工作台（Electron + React）：把书签、今日焦点、开工项目、捕获收件箱压进一个窗口。本地优先，数据全是可 git、可手改的 JSON 文件。",
    lang: "TypeScript",
    stars: 0,
    updated: "2026-09",
    featured: true,
    img: "images/projects/dashboard.png"
  },
  {
    name: "nootch",
    url: "https://github.com/xiaoan17/nootch",
    desc: "macOS 屏幕边缘常驻的 AI 编码用量圆点（DeepanshuMishraa/nootch 的二次开发版）：悬停即可查看今日 / 7 天 / 30 天的费用、tokens、sessions 与 Top 模型。内置 Swift 原生同步引擎，本地解析 Claude Code / Codex / Kimi Code 等工具日志并上报 vibecafe.ai，零钥匙串弹窗、无需 Node 环境。",
    lang: "Swift",
    stars: 0,
    updated: "2026-09"
  },
  {
    name: "G3M Sidekeys",
    url: "https://github.com/xiaoan17/g3m-sidekeys",
    desc: "极简 macOS 菜单栏工具：把 HECATE G3M PRO 等无 macOS 驱动的鼠标侧键映射为 Cmd+C / Cmd+V，HID 层实现，纯用户态无内核扩展。",
    lang: "Swift",
    stars: 0,
    updated: "2026-08"
  },
  {
    name: "dsh-lark",
    url: "https://github.com/xiaoan17/dsh-lark",
    desc: "DeepSeek Harness 的飞书插件：为模型注册联系人搜索、群聊搜索、消息发送三个工具，复用本机 lark-cli 登录态，不另管密钥。",
    lang: "JavaScript",
    stars: 0,
    updated: "2026-08"
  },
  {
    name: "AI Teams",
    url: "https://github.com/xiaoan17/AI_teams",
    desc: "多 Agent 协作平台，实现 AI 团队角色分工与自动化工作流。",
    lang: "JavaScript",
    stars: 0,
    updated: "2026-08"
  },
  {
    name: "Spark Reader",
    url: "https://github.com/xiaoan17/Spark_reader",
    desc: "AI 阅读器 macOS 版：导入图书后生成可回跳引用的 AI 解读、TLDR、对照翻译与知识体系图谱。",
    lang: "TypeScript",
    stars: 1,
    updated: "2026-08",
    featured: true,
    img: "images/projects/spark-reader.png"
  },
  {
    name: "Agent Teams Libs",
    url: "https://github.com/xiaoan17/agent-teams-libs",
    desc: "AI Agent 团队角色库 — 人机双轨工作流，Claude+Codex 双引擎。定义从 0 到 1 的 AI 软件团队。",
    lang: "TypeScript",
    stars: 0,
    updated: "2026-06"
  },
  {
    name: "WebAgent CLI",
    url: "https://github.com/xiaoan17/webagent_cli",
    desc: "Web Agent 命令行工具。",
    lang: "JavaScript",
    stars: 0,
    updated: "2026-05"
  },
  {
    name: "OSRM Route Distance",
    url: "https://github.com/xiaoan17/OSRM_route_distance",
    desc: "基于 OSRM 实现经纬度间批量 driving route distance 估算，比直接经纬度计算更准确。",
    lang: "Python",
    stars: 1,
    updated: "2024-12"
  },
  {
    name: "Tactics2D Tutorial",
    url: "https://github.com/xiaoan17/Tactics2d_Tutorial",
    desc: "基于 Tactics2D 官方教程整理的常用 Python 脚本，含注释和结果图。",
    lang: "Python",
    stars: 0,
    updated: "2025-05"
  },
  {
    name: "FAMOU for Math",
    url: "https://github.com/xiaoan17/famou_for_math",
    desc: "数学建模相关代码。",
    lang: "Python",
    stars: 1,
    updated: "2026-03"
  }
];
