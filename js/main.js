// 注意:各列表内容已由 js/render.js 在本文件之前渲染完成

// Tab navigation —— URL hash 双向同步,刷新/分享链接可直达指定页
function switchPage(pageName, updateHash) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) page.classList.add('active');
  const tab = document.querySelector(`.nav-tab[data-page="${pageName}"]`);
  if (tab) {
    tab.classList.add('active');
    tab.setAttribute('aria-current', 'page');
    document.querySelectorAll(`.nav-tab:not([data-page="${pageName}"])`)
      .forEach(t => t.removeAttribute('aria-current'));
  }
  if (updateHash !== false) {
    const newHash = '#' + pageName;
    if (location.hash !== newHash) history.pushState(null, '', newHash);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => switchPage(tab.dataset.page));
});

// 品牌名点击回首页
const brand = document.querySelector('.nav-brand');
if (brand) {
  brand.addEventListener('click', () => switchPage(brand.dataset.page || 'home'));
}

// URL hash routing
function handleHash() {
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById('page-' + hash)) {
    switchPage(hash, false);
  }
}
window.addEventListener('hashchange', handleHash);
window.addEventListener('popstate', handleHash);
handleHash();

// 页脚年份自动更新
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
