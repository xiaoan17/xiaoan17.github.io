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

// Research tag counts
document.querySelectorAll('.research-tag').forEach(tag => {
  const filter = tag.dataset.filter;
  const n = filter === 'all'
    ? document.querySelectorAll('.paper-card').length
    : document.querySelectorAll('.paper-card[data-tags*="' + filter + '"]').length;
  tag.insertAdjacentHTML('beforeend', '<span class="count">' + n + '</span>');
});

// Research tag filtering
document.querySelectorAll('.research-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.research-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const filter = tag.dataset.filter;
    document.querySelectorAll('.paper-card').forEach(card => {
      if (filter === 'all' || card.dataset.tags.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    // Show/hide year headers based on visible papers
    document.querySelectorAll('.year-header').forEach(header => {
      const paperList = header.nextElementSibling;
      if (paperList && paperList.classList.contains('paper-list')) {
        const visibleCards = paperList.querySelectorAll('.paper-card:not([style*="display: none"])');
        header.style.display = visibleCards.length > 0 ? '' : 'none';
      }
    });
  });
});
