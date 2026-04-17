/* ============================================================
   dpaul.studio — Post Generator
   Drop this <script> tag at the bottom of any page (before </body>)
   It auto-attaches a "// generate post" button to every section
   that has a data-post-section attribute, or you can call
   dpPostGenerator.open(contentString, titleString) manually.
   ============================================================ */

(function () {

  /* ── STYLES ── injected once ─────────────────────────────── */
  const css = `
    .dp-post-btn {
      display: inline-flex; align-items: center; gap: 8px;
      margin-top: 28px;
      background: transparent;
      border: 1px solid rgba(255,102,0,0.4);
      color: #FF6600;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 9px 18px;
      cursor: pointer;
      border-radius: 3px;
      transition: border-color 0.15s, background 0.15s, color 0.15s;
    }
    .dp-post-btn:hover { border-color: #FF6600; background: rgba(255,102,0,0.08); }
    .dp-post-btn .dp-btn-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #FF6600; flex-shrink: 0;
      animation: dp-pulse 2s infinite;
    }
    @keyframes dp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

    /* overlay */
    #dp-modal-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(10,11,10,0.82);
      z-index: 10000;
      align-items: center; justify-content: center;
      padding: 24px;
    }
    #dp-modal-overlay.open { display: flex; }

    /* modal */
    #dp-modal {
      background: #1a1c1a;
      border: 1px solid rgba(255,102,0,0.3);
      border-radius: 6px;
      width: 100%; max-width: 620px;
      font-family: 'Courier New', Courier, monospace;
      overflow: hidden;
    }
    #dp-modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    #dp-modal-title {
      font-size: 0.72rem; letter-spacing: 0.22em;
      text-transform: uppercase; color: #FF6600;
    }
    #dp-modal-close {
      background: none; border: none; color: #7a7a70;
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.1rem; cursor: pointer; line-height: 1;
      padding: 0 4px;
    }
    #dp-modal-close:hover { color: #FF6600; }

    /* platform toggle */
    #dp-platform-row {
      display: flex; gap: 8px; padding: 16px 20px 0;
    }
    .dp-platform-btn {
      background: #111312; border: 1px solid rgba(255,255,255,0.08);
      color: #7a7a70;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
      padding: 7px 16px; cursor: pointer; border-radius: 3px;
      transition: all 0.15s;
    }
    .dp-platform-btn:hover { border-color: rgba(255,102,0,0.4); color: #c8c8c0; }
    .dp-platform-btn.active { background: #FF6600; border-color: #FF6600; color: #000; font-weight: bold; }

    /* body */
    #dp-modal-body { padding: 20px; min-height: 140px; }

    #dp-loading {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; gap: 14px; padding: 32px 0; color: #7a7a70;
      font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase;
    }
    .dp-spinner {
      width: 24px; height: 24px; border: 2px solid rgba(255,102,0,0.2);
      border-top-color: #FF6600; border-radius: 50%;
      animation: dp-spin 0.7s linear infinite;
    }
    @keyframes dp-spin { to { transform: rotate(360deg); } }

    #dp-result {
      display: none;
    }
    #dp-post-text {
      background: #111312;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 4px;
      color: #c8c8c0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.88rem;
      line-height: 1.75;
      padding: 16px;
      width: 100%; min-height: 160px;
      resize: vertical;
      outline: none;
    }
    #dp-post-text:focus { border-color: rgba(255,102,0,0.35); }

    #dp-char-count {
      font-size: 0.68rem; color: #7a7a70; letter-spacing: 0.1em;
      margin-top: 8px; text-align: right;
    }
    #dp-char-count.over { color: #cc3300; }

    /* footer */
    #dp-modal-footer {
      display: flex; gap: 10px; justify-content: flex-end;
      padding: 12px 20px 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .dp-action-btn {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.12);
      color: #c8c8c0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
      padding: 9px 20px; cursor: pointer; border-radius: 3px;
      transition: all 0.15s;
    }
    .dp-action-btn:hover { border-color: rgba(255,102,0,0.5); color: #FF6600; }
    .dp-action-btn.primary { background: #FF6600; border-color: #FF6600; color: #000; font-weight: bold; }
    .dp-action-btn.primary:hover { background: #e55a00; border-color: #e55a00; color: #000; }
    .dp-action-btn.copied { background: transparent; border-color: #3B6D11; color: #639922; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── MODAL HTML ── injected once ────────────────────────── */
  const modalHTML = `
    <div id="dp-modal-overlay">
      <div id="dp-modal">
        <div id="dp-modal-header">
          <span id="dp-modal-title">// generate post</span>
          <button id="dp-modal-close" onclick="dpPostGenerator.close()">&#215;</button>
        </div>
        <div id="dp-platform-row">
          <button class="dp-platform-btn active" onclick="dpPostGenerator.setPlatform('instagram', this)">Instagram</button>
          <button class="dp-platform-btn" onclick="dpPostGenerator.setPlatform('twitter', this)">Twitter / X</button>
        </div>
        <div id="dp-modal-body">
          <div id="dp-loading">
            <div class="dp-spinner"></div>
            <span>generating post...</span>
          </div>
          <div id="dp-result">
            <textarea id="dp-post-text" spellcheck="false" oninput="dpPostGenerator.updateCount()"></textarea>
            <div id="dp-char-count"></div>
          </div>
        </div>
        <div id="dp-modal-footer">
          <button class="dp-action-btn" onclick="dpPostGenerator.regenerate()">Regenerate</button>
          <button class="dp-action-btn primary" id="dp-copy-btn" onclick="dpPostGenerator.copy()">Copy post</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  /* ── LIMITS ── */
  const LIMITS = { instagram: 2200, twitter: 280 };

  /* ── STATE ── */
  let currentContent = '';
  let currentTitle   = '';
  let currentPlatform = 'instagram';

  /* ── PUBLIC API ── */
  window.dpPostGenerator = {

    open(content, title) {
      currentContent  = content;
      currentTitle    = title || 'dpaul.studio';
      currentPlatform = 'instagram';
      document.querySelectorAll('.dp-platform-btn').forEach((b, i) => {
        b.classList.toggle('active', i === 0);
      });
      document.getElementById('dp-modal-overlay').classList.add('open');
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      this._generate();
    },

    close() {
      document.getElementById('dp-modal-overlay').classList.remove('open');
    },

    setPlatform(platform, btn) {
      currentPlatform = platform;
      document.querySelectorAll('.dp-platform-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // re-generate for the new platform using current text as context
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      this._generate();
    },

    regenerate() {
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      this._generate();
    },

    copy() {
      const text = document.getElementById('dp-post-text').value;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('dp-copy-btn');
        btn.textContent = 'Copied ✓';
        btn.classList.remove('primary');
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy post';
          btn.classList.add('primary');
          btn.classList.remove('copied');
        }, 2200);
      });
    },

    updateCount() {
      const text  = document.getElementById('dp-post-text').value;
      const limit = LIMITS[currentPlatform];
      const el    = document.getElementById('dp-char-count');
      el.textContent = text.length + ' / ' + limit + ' characters';
      el.classList.toggle('over', text.length > limit);
    },

    async _generate() {
      const limit = LIMITS[currentPlatform];
      const platformGuide = currentPlatform === 'twitter'
        ? `Twitter/X post. Hard limit: ${limit} characters total including hashtags. Punchy, one idea, no fluff. End with 2-3 tight hashtags.`
        : `Instagram caption. Aim for 150-300 words. Lead with a strong first line (visible before "more"). Conversational but sharp. End with 5-8 relevant hashtags on a new line.`;

      const prompt = `You are writing social media copy for dpaul.studio — a digital design and development studio with a distinct aesthetic: dark backgrounds, monospace type, orange accents, technical precision, creative depth.

The studio makes interactive web components, audio tools, synthesisers, and branded design work. The voice is direct, confident, lowercase-friendly, no corporate fluff.

Write a ${platformGuide}

Base the post on this section content:
---
Title: ${currentTitle}
${currentContent}
---

Rules:
- Write in the studio's voice — technical but human, not salesy
- Reference specific features or details from the content
- Do NOT use generic phrases like "excited to share" or "check it out"
- Do NOT use quotation marks around the post
- Output ONLY the post text, nothing else`;

      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }]
          })
        });
        const data = await res.json();
        const text = data.content?.[0]?.text || 'Could not generate post. Please try again.';
        document.getElementById('dp-post-text').value = text;
        document.getElementById('dp-loading').style.display = 'none';
        document.getElementById('dp-result').style.display  = 'block';
        this.updateCount();
      } catch (e) {
        document.getElementById('dp-post-text').value = 'Error generating post. Check your connection and try again.';
        document.getElementById('dp-loading').style.display = 'none';
        document.getElementById('dp-result').style.display  = 'block';
      }
    }
  };

  /* ── AUTO-ATTACH BUTTONS ────────────────────────────────── */
  /*
    Any element with data-post-section gets a button automatically.
    Add to your HTML like:
      <section class="instrument" data-post-section data-post-title="dPaul VU">
    Or call dpPostGenerator.open(content, title) from anywhere.
  */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-post-section]').forEach(section => {
      const title   = section.getAttribute('data-post-title') || document.title;
      const btn     = document.createElement('button');
      btn.className = 'dp-post-btn';
      btn.innerHTML = '<span class="dp-btn-dot"></span> // generate post';
      btn.addEventListener('click', () => {
        const content = section.innerText.trim().slice(0, 2000);
        dpPostGenerator.open(content, title);
      });
      section.appendChild(btn);
    });

    // close on overlay click
    document.getElementById('dp-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) dpPostGenerator.close();
    });

    // close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') dpPostGenerator.close();
    });
  });

})();
