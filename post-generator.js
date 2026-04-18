/* ============================================================
   dpaul.studio — Post Generator (V2: Enhanced)
   ============================================================ */

(function () {
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

    #dp-modal-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(10,11,10,0.85);
      z-index: 10000;
      align-items: center; justify-content: center;
      padding: 24px;
      backdrop-filter: blur(4px);
    }
    #dp-modal-overlay.open { display: flex; }

    #dp-modal {
      background: #1a1c1a;
      border: 1px solid rgba(255,102,0,0.3);
      border-radius: 6px;
      width: 100%; max-width: 620px;
      font-family: 'Courier New', Courier, monospace;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
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

    #dp-platform-row {
      display: flex; gap: 8px; padding: 16px 20px 0; flex-wrap: wrap;
    }
    .dp-platform-btn {
      background: #111312; border: 1px solid rgba(255,255,255,0.08);
      color: #7a7a70;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
      padding: 6px 12px; cursor: pointer; border-radius: 3px;
      transition: all 0.15s;
    }
    .dp-platform-btn:hover { border-color: rgba(255,102,0,0.4); color: #c8c8c0; }
    .dp-platform-btn.active { background: #FF6600; border-color: #FF6600; color: #000; font-weight: bold; }

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

    #dp-result { display: none; }

    #dp-post-text {
      background: #111312;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 4px;
      color: #c8c8c0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.88rem; line-height: 1.75;
      padding: 16px; width: 100%; min-height: 160px;
      resize: vertical; outline: none;
    }
    #dp-post-text:focus { border-color: rgba(255,102,0,0.35); }

    #dp-char-count {
      font-size: 0.68rem; color: #7a7a70; letter-spacing: 0.1em;
      margin-top: 8px; text-align: right;
    }
    #dp-char-count.over { color: #cc3300; }

    #dp-img-suggestion {
      margin-top: 12px; padding: 10px 14px;
      background: rgba(255,102,0,0.06);
      border: 1px solid rgba(255,102,0,0.2);
      border-radius: 3px; font-size: 0.75rem;
      letter-spacing: 0.1em; color: #FF6600;
      display: none;
    }
    #dp-img-suggestion span { color: #c8c8c0; display: block; margin-top: 4px; }

    #dp-modal-footer {
      display: flex; gap: 10px; justify-content: flex-end;
      padding: 12px 20px 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .dp-action-btn {
      background: transparent; border: 1px solid rgba(255,255,255,0.12);
      color: #c8c8c0; font-family: 'Courier New', Courier, monospace;
      font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
      padding: 9px 16px; cursor: pointer; border-radius: 3px;
      transition: all 0.15s;
    }
    .dp-action-btn:hover { border-color: rgba(255,102,0,0.5); color: #FF6600; }
    .dp-action-btn.primary { background: #FF6600; border-color: #FF6600; color: #000; font-weight: bold; }
    .dp-action-btn.secondary { border-color: #7a7a70; }
    .dp-action-btn.copied { border-color: #3B6D11; color: #639922; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const modalHTML = `
    <div id="dp-modal-overlay">
      <div id="dp-modal">
        <div id="dp-modal-header">
          <span id="dp-modal-title">// generate shareable</span>
          <button id="dp-modal-close" onclick="dpPostGenerator.close()">&#215;</button>
        </div>
        <div id="dp-platform-row">
          <button class="dp-platform-btn active" onclick="dpPostGenerator.setPlatform('instagram', this)">Instagram</button>
          <button class="dp-platform-btn" onclick="dpPostGenerator.setPlatform('twitter', this)">Twitter / X</button>
          <button class="dp-platform-btn" onclick="dpPostGenerator.setPlatform('linkedin', this)">LinkedIn</button>
        </div>
        <div id="dp-modal-body">
          <div id="dp-loading">
            <div class="dp-spinner"></div>
            <span>generating content...</span>
          </div>
          <div id="dp-result">
            <textarea id="dp-post-text" spellcheck="false" oninput="dpPostGenerator.updateCount()"></textarea>
            <div id="dp-char-count"></div>
            <div id="dp-img-suggestion">// recommended attachment<span id="dp-img-name"></span></div>
          </div>
        </div>
        <div id="dp-modal-footer">
          <button class="dp-action-btn" onclick="dpPostGenerator.regenerate()">Regenerate</button>
          <button class="dp-action-btn" id="dp-share-btn" onclick="dpPostGenerator.share()">Share</button>
          <button class="dp-action-btn primary" id="dp-copy-btn" onclick="dpPostGenerator.copy()">Copy Text</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const LIMITS = { instagram: 2200, twitter: 280, linkedin: 3000 };

  let currentContent  = '';
  let currentTitle    = '';
  let currentPlatform = 'instagram';
  let currentImages   = [];
  let currentSectionId = '';

  function getImages(sectionEl) {
    const imgs = Array.from(sectionEl.querySelectorAll('img'));
    return imgs.map(img => ({
      filename: (img.getAttribute('src') || '').split('/').pop(),
      alt: img.getAttribute('alt') || ''
    })).filter(i => i.filename);
  }

  window.dpPostGenerator = {
    open(content, title, sectionEl) {
      currentContent   = content;
      currentTitle     = title || 'dpaul.studio';
      currentPlatform  = 'instagram';
      currentImages    = sectionEl ? getImages(sectionEl) : [];
      currentSectionId = sectionEl ? sectionEl.id : '';
      
      document.querySelectorAll('.dp-platform-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
      document.getElementById('dp-modal-overlay').classList.add('open');
      
      // Toggle native share button visibility based on browser support
      document.getElementById('dp-share-btn').style.display = navigator.share ? 'block' : 'none';
      
      this.regenerate();
    },

    close() { document.getElementById('dp-modal-overlay').classList.remove('open'); },

    setPlatform(platform, btn) {
      currentPlatform = platform;
      document.querySelectorAll('.dp-platform-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.regenerate();
    },

    regenerate() {
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      document.getElementById('dp-img-suggestion').style.display = 'none';
      this._generate();
    },

    async share() {
      const text = document.getElementById('dp-post-text').value;
      if (navigator.share) {
        try {
          await navigator.share({ title: currentTitle, text: text });
        } catch (err) { console.log('Share failed', err); }
      }
    },

    copy() {
      const text = document.getElementById('dp-post-text').value;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('dp-copy-btn');
        const oldTxt = btn.textContent;
        btn.textContent = 'Copied ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = oldTxt;
          btn.classList.remove('copied');
        }, 2000);
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
      const now = new Date();
      const dateStr = now.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
      
      // Enhanced URL logic with Hash
      const pageName = window.location.pathname.split('/').pop().replace('.html','').replace('index','');
      let pageUrl = pageName ? `dpaul.studio/${pageName}` : `dpaul.studio`;
      if (currentSectionId) pageUrl += `#${currentSectionId}`;

      const guides = {
        twitter: `Twitter/X. Max ${LIMITS.twitter} chars. Punchy, technical, one clear thought.`,
        instagram: `Instagram caption. Conversational, detailed, creative. Use 150-300 words.`,
        linkedin: `LinkedIn post. Professional, insight-driven, value-focused. Use bullet points if helpful for readability.`
      };

      const prompt = `Write a social media post promoting dpaul.studio. 
      Platform: ${guides[currentPlatform]}
      Tone: Third-party "discovery" voice. Technical but minimalist. No emojis. Lowercase friendly.
      
      Format:
      dpaul.studio
      ──────────────
      // ${currentTitle.toUpperCase()}
      ${dateStr}

      [Copy here]

      ${pageUrl}

      #hashtags
      
      Content: ${currentContent}
      ${currentImages.length ? `Available Images: ${currentImages.map(i => i.filename).join(', ')}` : ''}

      Rules: 
      - If an image is relevant, end with "IMAGE: <filename>" on its own line.
      - Output ONLY the post.`;

      try {
        const res = await fetch('https://dpaul-api-proxy.davidpaulahern.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            messages: [{ role: 'user', content: prompt }]
          })
        });
        const data = await res.json();
        let text = data.content?.[0]?.text || 'Error generating.';

        const imageMatch = text.match(/\nIMAGE:\s*(.+)$/);
        if (imageMatch) {
          const filename = imageMatch[1].trim();
          document.getElementById('dp-img-name').textContent = filename;
          document.getElementById('dp-img-suggestion').style.display = 'block';
          text = text.replace(/\nIMAGE:\s*.+$/, '').trim();
        }

        document.getElementById('dp-post-text').value = text;
        document.getElementById('dp-loading').style.display = 'none';
        document.getElementById('dp-result').style.display  = 'block';
        this.updateCount();
      } catch (e) {
        document.getElementById('dp-post-text').value = 'Network error.';
        document.getElementById('dp-loading').style.display = 'none';
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-post-section]').forEach(section => {
      const title = section.getAttribute('data-post-title') || document.title;
      const btn   = document.createElement('button');
      btn.className = 'dp-post-btn';
      btn.innerHTML = '<span class="dp-btn-dot"></span> // generate post';
      btn.onclick = () => dpPostGenerator.open(section.innerText.trim().slice(0, 2000), title, section);
      section.appendChild(btn);
    });
    
    document.getElementById('dp-modal-overlay').onclick = (e) => { if (e.target.id === 'dp-modal-overlay') dpPostGenerator.close(); };
    document.addEventListener('keydown', e => { if (e.key === 'Escape') dpPostGenerator.close(); });
  });
})();
