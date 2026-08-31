// 渲染层:读取 js/data/ 下的数据文件,填充 index.html 中各页面的容器
// 依赖: js/data/blog.js / projects.js / recommend.js(需先于本文件加载)
(function () {
  'use strict';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- 通用卡片 ---------- */

  function metaHTML(items) {
    return '<div class="project-card-meta">' +
      items.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') +
      '</div>';
  }

  function projectCardHTML(item) {
    return '<a class="project-card" href="' + esc(item.url) + '" target="_blank">' +
      '<div class="project-card-name">' + esc(item.name) + '</div>' +
      '<div class="project-card-desc">' + esc(item.desc) + '</div>' +
      metaHTML(item.meta) +
      '</a>';
  }

  /* ---------- 博客 ---------- */

  function blogCardHTML(post, metaLabel, showTags) {
    var tags = (showTags && post.tags && post.tags.length)
      ? '<div class="blog-card-tags">' +
        post.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
        '</div>'
      : '';
    return '<a class="blog-card" href="' + esc(post.url) + '" target="_blank" style="display:block">' +
      '<div class="blog-card-title">' + esc(post.title) + '</div>' +
      '<div class="blog-card-meta"><span>' + esc(post.date) + '</span><span>' + esc(metaLabel) + '</span></div>' +
      '<div class="blog-card-desc">' + esc(post.desc) + '</div>' +
      tags +
      '</a>';
  }

  function renderBlog() {
    var posts = window.BLOG_POSTS || [];
    // 博客页:完整列表(插在占位卡片之前)
    var blogList = document.getElementById('blog-list');
    if (blogList) {
      blogList.insertAdjacentHTML('afterbegin',
        posts.map(function (p) { return blogCardHTML(p, '安博成', true); }).join(''));
    }
    // 首页:最新 3 篇
    var homeList = document.getElementById('home-blog-list');
    if (homeList) {
      homeList.innerHTML = posts.slice(0, 3)
        .map(function (p) { return blogCardHTML(p, (p.tags && p.tags[0]) || '博客', false); })
        .join('');
    }
  }

  /* ---------- 开源项目 ---------- */

  function renderProjects() {
    var list = document.getElementById('project-list');
    if (!list) return;
    list.innerHTML = (window.PROJECTS || []).map(function (p) {
      var meta = [];
      if (p.lang) meta.push(p.lang);
      if (p.stars !== null && p.stars !== undefined) meta.push('★ ' + p.stars);
      return projectCardHTML({ url: p.url, name: p.name, desc: p.desc, meta: meta });
    }).join('');
  }

  /* ---------- 推荐 ---------- */

  function renderRecommend() {
    var tools = document.getElementById('recommend-tools');
    if (tools) tools.innerHTML = (window.RECOMMEND_TOOLS || []).map(projectCardHTML).join('');
    var skills = document.getElementById('recommend-skills');
    if (skills) skills.innerHTML = (window.RECOMMEND_SKILLS || []).map(projectCardHTML).join('');
  }

  renderBlog();
  renderProjects();
  renderRecommend();
})();
