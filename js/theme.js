// 主题切换:manual(用户手动选) > system(跟随系统)
// <html data-theme> 的写入要尽早,避免闪烁 —— index.html 头部有内联引导脚本
(function () {
  'use strict';
  var KEY = 'anbc-theme'; // 'dark' | 'light' | 不存在 = 跟随系统

  function current() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(mode) {
    var root = document.documentElement;
    if (mode === 'dark' || mode === 'light') {
      root.setAttribute('data-theme', mode);
    } else {
      root.removeAttribute('data-theme'); // 跟随系统
    }
  }

  function isDark() {
    var m = current();
    if (m) return m === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var dark = isDark();
    btn.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    btn.setAttribute('title', dark ? '切换到浅色模式' : '切换到深色模式');
    btn.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5 2 3h-4l2-3zm0 17 2 3h-4l2-3zM2 12l3-2v4l-3-2zm17 0 3-2v4l-3-2zM4.2 4.2l3 1.5-1.4 1.4-1.6-2.9zM19.8 19.8l-3-1.5 1.4-1.4 1.6 2.9zM19.8 4.2l-3 1.5 1.4 1.4 1.6-2.9zM4.2 19.8l3-1.5-1.4-1.4-1.6 2.9z"/></svg>'
      : '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  }

  apply(current());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
      updateToggle();
    });
    updateToggle();
  });

  // 系统主题变化时,未手动选择的用户跟随系统
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!current()) { apply(null); }
      updateToggle();
    });
  }
})();
