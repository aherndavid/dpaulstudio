/* ============================================================
   dpaul.studio — Post Generator
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
      background: rgba(10,11,10,0.82);
      z-index: 10000;
      align-items: center; justify-content: center;
      padding: 24px;
    }
    #dp-modal-overlay.open { display: flex; }

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

    #dp-img-suggestion {
      margin-top: 12px;
      padding: 10px 14px;
      background: rgba(255,102,0,0.06);
      border: 1px solid rgba(255,102,0,0.2);
      border-radius: 3px;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: #FF6600;
      display: none;
    }
    #dp-img-suggestion span {
      color: #c8c8c0;
      display: block;
      margin-top: 4px;
      letter-spacing: 0.05em;
    }

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
            <div id="dp-img-suggestion">// attach this image<span id="dp-img-name"></span></div>
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

  const LIMITS = { instagram: 2200, twitter: 280 };

  let currentContent  = '';
  let currentTitle    = '';
  let currentPlatform = 'instagram';
  let currentImages   = [];

  /* ── grab image filenames from a section element ── */
  function getImages(sectionEl) {
    const imgs = Array.from(sectionEl.querySelectorAll('img'));
    return imgs.map(img => {
      const src = img.getAttribute('src') || '';
      const alt = img.getAttribute('alt') || '';
      const filename = src.split('/').pop();
      return { filename, alt };
    }).filter(i => i.filename);
  }

  window.dpPostGenerator = {

    open(content, title, sectionEl) {
      currentContent  = content;
      currentTitle    = title || 'dpaul.studio';
      currentPlatform = 'instagram';
      currentImages   = sectionEl ? getImages(sectionEl) : [];
      document.querySelectorAll('.dp-platform-btn').forEach((b, i) => {
        b.classList.toggle('active', i === 0);
      });
      document.getElementById('dp-modal-overlay').classList.add('open');
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      document.getElementById('dp-img-suggestion').style.display = 'none';
      this._generate();
    },

    close() {
      document.getElementById('dp-modal-overlay').classList.remove('open');
    },

    setPlatform(platform, btn) {
      currentPlatform = platform;
      document.querySelectorAll('.dp-platform-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      document.getElementById('dp-img-suggestion').style.display = 'none';
      this._generate();
    },

    regenerate() {
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display  = 'none';
      document.getElementById('dp-img-suggestion').style.display = 'none';
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

    _showImageSuggestion(filename) {
      if (!filename) return;
      const el = document.getElementById('dp-img-suggestion');
      document.getElementById('dp-img-name').textContent = filename;
      el.style.display = 'block';
    },

    async _generate() {
      const limit = LIMITS[currentPlatform];
      const now = new Date();
      const month = now.toLocaleString('en-GB', { month: 'long' });
      const year  = now.getFullYear();
      const dateStr = month + ' ' + year;

      // Derive page URL from current page filename
      const pageName = window.location.pathname.split('/').pop().replace('.html','').replace('index','');
      const pageSlug = pageName ? pageName : '';
      const pageUrl  = pageSlug ? 'dpaul.studio/' + pageSlug : 'dpaul.studio';

      const platformGuide = currentPlatform === 'twitter'
        ? `Twitter/X post. Hard limit: ${limit} characters total including the header and hashtags. Punchy, one idea, no fluff.

Format the output EXACTLY like this with no deviations:
dpaul.studio
──────────────
// [RELEVANT TITLE IN UPPERCASE]
${dateStr}

[post copy — third-party voice, 1-3 sentences max]

${pageUrl}

#tag1 #tag2 #tag3`
        : `Instagram caption. Aim for 150-300 words. Conversational but sharp.

Format the output EXACTLY like this with no deviations:
dpaul.studio
──────────────
// [RELEVANT TITLE IN UPPERCASE]
${dateStr}

[post copy — third-party voice, direct, no fluff]

${pageUrl}

#tag1 #tag2 #tag3 #tag4 #tag5 #tag6 #tag7 #tag8`

      const imageInfo = currentImages.length
        ? `\nImages in this section:\n${currentImages.map(i => `- ${i.filename}${i.alt ? ' (' + i.alt + ')' : ''}`).join('\n')}`
        : '';

      const prompt = `You are writing social media copy to promote dpaul.studio — a one-person digital design and development studio run by David. The aesthetic is distinct: dark backgrounds, monospace type, orange accents, technical precision, creative depth.

David builds interactive web components, audio tools, browser synthesisers, and branded design work. He works alone. Write as if a third party has discovered the site and is recommending it to others — use framing like "stumbled across", "check this out", "worth following", "this is worth your time". Never write in first person as David. Direct, confident, lowercase-friendly, no corporate fluff.

Write a ${platformGuide}

Base the post on this section content:
---
Title: ${currentTitle}
${currentContent}
${imageInfo}
---

Rules:
- Follow the format template EXACTLY — dpaul.studio header, separator line, title, date, copy, page url, hashtags
- Write the title in the format: // TITLE IN UPPERCASE — keep it short and relevant to the section
- Write in third-party voice — as if someone else discovered and is sharing this. Never use "I", "my", "me" as David
- Technical but human, not salesy
- Reference specific features or details from the content
- Do NOT open with tech clichés like "git clone", "shipping", "dropping", "just landed"
- Do NOT use generic phrases like "excited to share"
- Do NOT use quotation marks around the post
- Generate relevant hashtags based on the content — mix of specific and broader reach tags
- If images are listed above, add one final line after the hashtags containing only: IMAGE: <filename of the best image to attach>
- Output ONLY the formatted post, nothing else`;

      try {
        const res = await fetch('https://dpaul-api-proxy.davidpaulahern.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }]
          })
        });
        const data = await res.json();
        let text = data.content?.[0]?.text || 'Could not generate post. Please try again.';

        // Extract IMAGE suggestion if present
        const imageMatch = text.match(/\nIMAGE:\s*(.+)$/);
        if (imageMatch) {
          this._showImageSuggestion(imageMatch[1].trim());
          text = text.replace(/\nIMAGE:\s*.+$/, '').trim();
        }

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

  /* ── AUTO-ATTACH BUTTONS ── */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-post-section]').forEach(section => {
      const title = section.getAttribute('data-post-title') || document.title;
      const btn   = document.createElement('button');
      btn.className = 'dp-post-btn';
      btn.innerHTML = '<span class="dp-btn-dot"></span> // generate post';
      btn.addEventListener('click', () => {
        const content = section.innerText.trim().slice(0, 2000);
        dpPostGenerator.open(content, title, section);
      });
      section.appendChild(btn);
    });

    document.getElementById('dp-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) dpPostGenerator.close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') dpPostGenerator.close();
    });
  });

})();
