// 渲染层:读取 js/data/ 下的数据文件,填充 index.html 中各页面的容器
// 依赖: js/data/papers.js / blog.js / projects.js / recommend.js(需先于本文件加载)
(function () {
  'use strict';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var PAPER_TYPE_CLASS = {
    'Journal': 'type-journal',
    'Preprint': 'type-preprint',
    'Conference': 'type-conference',
    'US Patent': 'type-patent'
  };

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

  /* ---------- 论文 ---------- */

  function paperCardHTML(p) {
    var cite = p.citations
      ? '<span class="paper-cite-count">' + p.citations + ' 引用</span>'
      : '';
    var meta = '<span class="paper-type ' + (PAPER_TYPE_CLASS[p.type] || '') + '">' + esc(p.type) + '</span>' +
      '<span class="paper-venue">' + esc(p.venue) + '</span>' +
      (p.impact ? '<span class="paper-if">' + esc(p.impact) + '</span>' : '') +
      '<span>' + p.year + '</span>';
    var authors = p.authors.map(function (a) {
      return a === 'Bocheng An' ? '<strong>' + esc(a) + '</strong>' : esc(a);
    }).join(', ');
    var links = (p.links || []).map(function (l) {
      return '<a class="paper-link" href="' + esc(l.url) + '" target="_blank">' + esc(l.label) + '</a>';
    }).join('');
    var abstract = p.abstract
      ? '<span class="paper-toggle" onclick="this.parentElement.querySelector(\'.paper-abstract\').classList.toggle(\'show\')">展开摘要 ▾</span>' +
        '<div class="paper-abstract">' + esc(p.abstract) + '</div>'
      : '';
    return '<div class="paper-card" data-tags="' + esc(p.tags.join(',')) + '">' +
      '<div class="paper-card-header">' +
        '<div class="paper-title"><a href="' + esc(p.url) + '" target="_blank">' + esc(p.title) + '</a></div>' +
        cite +
      '</div>' +
      '<div class="paper-meta">' + meta + '</div>' +
      '<div class="paper-authors">' + authors + '</div>' +
      '<div class="paper-links">' + links + '</div>' +
      abstract +
      '</div>';
  }

  function renderPapers() {
    var container = document.getElementById('papers-container');
    if (!container) return;
    var papers = window.PAPERS || [];
    var years = [];
    papers.forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
    });
    years.sort(function (a, b) { return b - a; });
    container.innerHTML = years.map(function (y) {
      var cards = papers.filter(function (p) { return p.year === y; }).map(paperCardHTML).join('');
      return '<div class="year-header" data-year="' + y + '">' + y + '</div>' +
        '<div class="paper-list">' + cards + '</div>';
    }).join('');
  }

  renderBlog();
  renderProjects();
  renderRecommend();
  renderPapers();
})();
