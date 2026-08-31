// 注意:各列表内容已由 js/render.js 在本文件之前渲染完成

// Tab navigation
function switchPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) page.classList.add('active');
  const tab = document.querySelector(`.nav-tab[data-page="${pageName}"]`);
  if (tab) tab.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => switchPage(tab.dataset.page));
});

// URL hash routing
function handleHash() {
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById('page-' + hash)) {
    switchPage(hash);
  }
}
window.addEventListener('hashchange', handleHash);
handleHash();
