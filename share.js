/* ============================================================
   dpaul.studio — Share Component
   Drop <script src="share.js"></script> before </body>
   Automatically injects a // share button into the nav.
   ============================================================ */

(function () {

  const css = `
    #dp-share-wrap {
      position: relative;
      margin-left: auto;
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

    #dp-share-btn:hover {
      border-color: var(--orange, #FF6600);
      color: var(--orange, #FF6600);
    }

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

    #dp-share-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      background: #1a1c1a;
      border: 1px solid rgba(255,102,0,0.3);
      border-radius: 4px;
      overflow: hidden;
      min-width: 200px;
      z-index: 9999;
    }

    #dp-share-dropdown.open {
      display: block;
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

    .dp-share-item:last-child {
      border-bottom: none;
    }

    .dp-share-item:hover {
      background: rgba(255,102,0,0.08);
      color: var(--orange, #FF6600);
    }

    .dp-share-item .dp-share-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      opacity: 0.7;
    }

    .dp-share-item:hover .dp-share-icon {
      opacity: 1;
    }

    .dp-share-item.copied {
      color: #639922;
    }

    #dp-share-header {
      padding: 10px 18px 8px;
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--orange, #FF6600);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    @media (max-width: 768px) {
      #dp-share-btn {
        font-size: 1rem;
        padding: 5px 12px;
      }
      #dp-share-dropdown {
        right: 0;
      }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Icons ── */
  const iconTwitter = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.835L1.254 2.25H8.08l4.213 5.57 5.95-5.57Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const iconInsta   = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
  const iconLink    = `<svg class="dp-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  /* ── Build the component ── */
  const wrap = document.createElement('div');
  wrap.id = 'dp-share-wrap';
  wrap.innerHTML = `
    <button id="dp-share-btn">
      <span class="dp-share-dot"></span>
      // share
    </button>
    <div id="dp-share-dropdown">
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
    </div>
  `;

  /* ── Inject into nav ── */
  function injectIntoNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Find the spacer and insert before the info/about link
    const spacer = nav.querySelector('.spacer');
    if (spacer) {
      nav.insertBefore(wrap, spacer);
    } else {
      nav.appendChild(wrap);
    }

    bindEvents();
  }

  /* ── Events ── */
  function bindEvents() {
    const btn      = document.getElementById('dp-share-btn');
    const dropdown = document.getElementById('dp-share-dropdown');

    // Toggle dropdown
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open', !isOpen);
      btn.classList.toggle('open', !isOpen);
    });

    // Close on outside click
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      btn.classList.remove('open');
    });

    dropdown.addEventListener('click', (e) => e.stopPropagation());

    // Twitter/X — share with page title + url
    document.getElementById('dp-share-twitter').addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent(document.title + ' — dpaul.studio');
      const url  = encodeURIComponent(window.location.href);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
      dropdown.classList.remove('open');
      btn.classList.remove('open');
    });

    // Instagram — copy link with a note (Instagram has no web share API)
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
    });

    // Copy link
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
    });
  }

  /* ── Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectIntoNav);
  } else {
    injectIntoNav();
  }

})();
