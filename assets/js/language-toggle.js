(function () {
  var STORAGE_KEY = 'language';
  var EN = 'en';
  var KO = 'ko';

  function normalizeLanguage(language) {
    return language === KO ? KO : EN;
  }

  function setAttributeText(element, attrName, language) {
    var value = element.getAttribute('data-' + attrName + '-' + language);
    if (value !== null) element.setAttribute(attrName, value);
  }

  function applyLanguage(language) {
    var selected = normalizeLanguage(language);
    document.documentElement.setAttribute('lang', selected);
    localStorage.setItem(STORAGE_KEY, selected);

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var value = element.getAttribute('data-' + selected);
      if (value === null) return;
      if (element.getAttribute('data-i18n-html') === 'true') {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-placeholder-en], [data-placeholder-ko]').forEach(function (element) {
      setAttributeText(element, 'placeholder', selected);
    });

    document.querySelectorAll('[data-title-en], [data-title-ko]').forEach(function (element) {
      setAttributeText(element, 'title', selected);
    });

    document.querySelectorAll('[data-aria-label-en], [data-aria-label-ko]').forEach(function (element) {
      setAttributeText(element, 'aria-label', selected);
    });

    document.querySelectorAll('[data-alt-en], [data-alt-ko]').forEach(function (element) {
      setAttributeText(element, 'alt', selected);
    });

    document.querySelectorAll('[data-lang-panel]').forEach(function (element) {
      element.hidden = element.getAttribute('data-lang-panel') !== selected;
    });

    var button = document.getElementById('language-toggle');
    if (button) {
      var next = selected === KO ? EN : KO;
      button.textContent = selected === KO ? 'EN' : '한';
      button.title = selected === KO ? 'Switch to English' : '한국어로 보기';
      button.setAttribute('aria-label', button.title);
      button.setAttribute('data-next-language', next);
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: selected } }));
  }

  function toggleLanguage() {
    var current = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    applyLanguage(current === KO ? EN : KO);
  }

  window.applyLanguagePreference = function () {
    applyLanguage(localStorage.getItem(STORAGE_KEY) || EN);
  };

  window.getCurrentLanguage = function () {
    return normalizeLanguage(localStorage.getItem(STORAGE_KEY));
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.applyLanguagePreference();
    var button = document.getElementById('language-toggle');
    if (button) button.addEventListener('click', toggleLanguage);
  });
})();
