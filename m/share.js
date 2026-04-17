/* ============================================================
   dpaul.studio — Share Component
   Works with both standard desktop nav and mobile burger nav.
   Drop <script src="share.js"></script> before </body>
   ============================================================ */

(function () {

  const css = `
    /* ── DESKTOP NAV SHARE BUTTON ── */
    #dp-share-wrap {
      position: relative;
    }

    #dp-share-btn {
      background: transparent;
      border: 1px solid transparent;
      color: rgba(255,255,255,0.45);
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: lowercase;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.15s;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #dp-share-btn:hover,
    #dp-share-btn.open {
      border-color: var(--orange, #FF6600);
      color: var(--orange, #FF6600);
    }
    #dp-share-btn .dp-share-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--orange, #FF6600);
      flex-shrink: 0;
      animation: dp-share-pulse 2.5s infinite;
    }
    @keyframes dp-share-pulse { 0%,100%{opacity:1} 50%{opacity:0.25} }

    /* ── MOBILE NAV SHARE ITEM ── */
    #dp-mobile-share-btn {
      background: none;
      border: none;
      color: rgba(212,196,168,0.6);
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.4rem;
      text-transform: lowercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #dp-mobile-share-btn:hover { color: var(--orange, #FF6600); }
    #dp-mobile-share-btn .dp-share-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--orange, #FF6600);
      flex-shrink: 0;
      animation: dp-share-pulse 2.5s infinite;
    }

    /* ── DROPDOWN (shared) ── */
    #dp-share-dropdown {
      display: none;
      position: fixed;
      background: #1a1c1a;
      border: 1px solid rgba(255,102,0,0.3);
      border-radius: 4px;
      overflow: hidden;
      min-width: 210px;
      z-index: 99999;
    }
    #dp-share-dropdown.open { display: block; }

    #dp-share-header {
      padding: 10px 18px 8px;
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--orange, #FF6600);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-family: 'Courier New', Courier, monospace;
    }

    .dp-share-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 18px;
      color: #c8c8c0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: pointer;
      background: transparent;
      border: none;
      width: 100%;
      text-align: left;
      text-decoration: none;
      transition: background 0.12s, color 0.12s;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .dp-share-item:last-child { border-bottom: none; }
    .dp-share-item:hover { background: rgba(255,102,0,0.08); color: var(--orange, #FF6600); }
    .dp-share-item .dp-share-icon { width: 16px; height: 16px; flex-shrink: 0; opacity: 0.7; }
    .dp-share-item:hover .dp-share-icon { opacity: 1; }
    .dp-share-item.copied { color: #639922; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Icons ── */
  const iconTwitter = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.835L1.254 2.25H8.08l4.213 5.57 5.95-5.57Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const iconInsta   = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
  const iconLink    = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  /* ── Build dropdown (shared) ── */
  const dropdown = document.createElement('div');
  dropdown.id = 'dp-share-dropdown';
  dropdown.innerHTML = `
    <div id="dp-share-header">// share this page</div>
    <a class="dp-share-item" id="dp-share-twitter" href="#" target="_blank" rel="noopener">
      ${iconTwitter} Twitter / X
    </a>
    <button class="dp-share-item" id="dp-share-instagram">
      ${iconInsta} Instagram
    </button>
    <button class="dp-share-item" id="dp-share-copy">
      ${iconLink} Copy link
    </button>
  `;
  document.body.appendChild(dropdown);

  /* ── Position dropdown near a trigger element ── */
  function positionDropdown(triggerEl) {
    const rect = triggerEl.getBoundingClientRect();
    dropdown.style.top  = (rect.bottom + 8) + 'px';
    // align right edge to trigger right edge, but keep on screen
    let left = rect.right - 210;
    if (left < 8) left = 8;
    dropdown.style.left = left + 'px';
  }

  /* ── Toggle ── */
  function openDropdown(triggerEl) {
    positionDropdown(triggerEl);
    dropdown.classList.add('open');
  }
  function closeDropdown() {
    dropdown.classList.remove('open');
  }

  /* ── Share actions ── */
  function bindShareActions() {
    document.getElementById('dp-share-twitter').addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent(document.title + ' — dpaul.studio');
      const url  = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
      closeDropdown();
    });

    document.getElementById('dp-share-instagram').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const el = document.getElementById('dp-share-instagram');
        el.classList.add('copied');
        el.innerHTML = `${iconLink} Link copied — paste to Instagram`;
        setTimeout(() => {
          el.classList.remove('copied');
          el.innerHTML = `${iconInsta} Instagram`;
        }, 3000);
      });
      closeDropdown();
    });

    document.getElementById('dp-share-copy').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const el = document.getElementById('dp-share-copy');
        el.classList.add('copied');
        el.innerHTML = `${iconLink} Copied ✓`;
        setTimeout(() => {
          el.classList.remove('copied');
          el.innerHTML = `${iconLink} Copy link`;
        }, 2200);
      });
      closeDropdown();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) &&
          e.target.id !== 'dp-share-btn' &&
          e.target.id !== 'dp-mobile-share-btn' &&
          !e.target.closest('#dp-share-btn') &&
          !e.target.closest('#dp-mobile-share-btn')) {
        closeDropdown();
      }
    });

    // Reposition on scroll/resize
    window.addEventListener('scroll', closeDropdown, { passive: true });
    window.addEventListener('resize', closeDropdown, { passive: true });
  }

  /* ── Inject into DESKTOP nav ── */
  function injectDesktopNav(nav) {
    const wrap = document.createElement('div');
    wrap.id = 'dp-share-wrap';

    const btn = document.createElement('button');
    btn.id = 'dp-share-btn';
    btn.innerHTML = '<span class="dp-share-dot"></span> // share';
    wrap.appendChild(btn);

    const spacer = nav.querySelector('.spacer');
    if (spacer) {
      nav.insertBefore(wrap, spacer);
    } else {
      nav.appendChild(wrap);
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dropdown.classList.contains('open')) {
        closeDropdown();
      } else {
        openDropdown(btn);
        btn.classList.add('open');
        dropdown.addEventListener('transitionend', () => {}, { once: true });
      }
    });

    // Remove open class from btn when dropdown closes
    const observer = new MutationObserver(() => {
      if (!dropdown.classList.contains('open')) btn.classList.remove('open');
    });
    observer.observe(dropdown, { attributes: true, attributeFilter: ['class'] });
  }

  /* ── Inject into MOBILE nav ── */
  function injectMobileNav(mobileMenu) {
    const btn = document.createElement('button');
    btn.id = 'dp-mobile-share-btn';
    btn.innerHTML = '<span class="dp-share-dot"></span> // share';
    mobileMenu.appendChild(btn);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dropdown.classList.contains('open')) {
        closeDropdown();
      } else {
        openDropdown(btn);
      }
    });
  }

  /* ── Init ── */
  function init() {
    bindShareActions();

    const desktopNav  = document.querySelector('nav');
    const mobileMenu  = document.getElementById('mobileMenu');

    if (desktopNav && !mobileMenu) {
      injectDesktopNav(desktopNav);
    } else if (mobileMenu) {
      injectMobileNav(mobileMenu);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
