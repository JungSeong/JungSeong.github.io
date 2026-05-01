(function () {
  var STORAGE_KEY = 'theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    var btn = document.getElementById('dark-mode-toggle');
    if (btn) {
      btn.textContent = theme === DARK ? '☀' : '🌙';
      btn.title = theme === DARK ? 'Switch to light mode' : 'Switch to dark mode';
      btn.setAttribute('aria-label', btn.title);
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === DARK ? LIGHT : DARK);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var stored = localStorage.getItem(STORAGE_KEY);
    var preferred = stored
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
    applyTheme(preferred);
    var btn = document.getElementById('dark-mode-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
