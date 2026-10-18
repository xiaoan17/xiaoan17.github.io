// 博客文章数据 —— 新文章加在数组最前面
// 字段: title 标题; url 文章链接(站内相对路径或外链); date 日期;
//       desc 简介; tags 标签数组(可选)
// 约定: desc 控制在两行以内(约 60-90 字),超长会被 CSS 截断为两行
window.BLOG_POSTS = [
  {
    title: "在“我能做好”之后,我愿意把人生花在哪里",
    url: "blog_where_to_spend_life.html",
    date: "2026-10-18",
    desc: "当“我能不能做好”逐渐有了答案,值得追问的是:哪些事情值得由我长期投入,而我的选择标准有多少是自己决定的?",
    tags: ["思考", "个人成长"]
  },
  {
    title: "The Bitter Lesson(苦涩的教训)原文 + 解读",
    url: "blog_bitter_lesson.html",
    date: "2026-10-12",
    desc: "Sutton 2019 年经典短文:70 年 AI 研究最大的教训是,能 scale 计算的通用方法(搜索 + 学习)最终必然胜过一切依赖人类知识的方法。附英文原文。",
    tags: ["AI", "RL", "Scaling", "经典文章"]
  },
  {
    title: "AI 领域 Top 20 经典论文清单",
    url: "blog_ai_top20_papers.html",
    date: "2026-08-04",
    desc: "整理自 Zotero 收藏：从 ImageNet、AlexNet 到 Transformer、GPT 系列与 Scaling Law，20 篇勾勒出现代 AI 发展主线的经典文章（题目、作者、年份）。",
    tags: ["AI", "论文", "书单"]
  }
];
