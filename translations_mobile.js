// dpaul.studio — i18n translations (mobile)
// Identical to desktop version; lives in m/ so asset paths use ../

const TRANSLATIONS = {
  en: {
    nav_design:   'design',
    nav_merch:    'merch',
    nav_music:    'music',
    nav_synths:   'synths',
    nav_tools:    'tools',
    nav_video:    'video',
    nav_devtools: 'dev tools',
    nav_about:    'about',
  },
  fr: {
    nav_design:   'design',
    nav_merch:    'merch',
    nav_music:    'musique',
    nav_synths:   'synthés',
    nav_tools:    'outils',
    nav_video:    'vidéo',
    nav_devtools: 'outils dev',
    nav_about:    'à propos',
  },
  es: {
    nav_design:   'diseño',
    nav_merch:    'merch',
    nav_music:    'música',
    nav_synths:   'sintes',
    nav_tools:    'herramientas',
    nav_video:    'vídeo',
    nav_devtools: 'herr. dev',
    nav_about:    'sobre mí',
  },
};

const I18N = (() => {
  const STORAGE_KEY = 'dpaul_lang';

  function applyLang(lang) {
    const strings = TRANSLATIONS[lang];
    if (!strings) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (strings[key] !== undefined) el.textContent = strings[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const saved   = localStorage.getItem(STORAGE_KEY);
    const browser = navigator.language?.slice(0, 2);
    const lang    = TRANSLATIONS[saved] ? saved
                  : TRANSLATIONS[browser] ? browser
                  : 'en';
    applyLang(lang);
  }

  return { applyLang, init };
})();
