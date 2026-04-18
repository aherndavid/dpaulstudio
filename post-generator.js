/* ============================================================
   dpaul.studio — Post Generator (V3: Dual Intent)
   ============================================================ */

(function () {
  // 1. Styles
  const css = `
    .dp-btn-group {
      display: flex; 
      gap: 12px; 
      margin-top: 28px; 
      flex-wrap: wrap;
    }

    .dp-post-btn {
      display: inline-flex; 
      align-items: center; 
      gap: 8px;
      background: transparent;
      border: 1px solid rgba(255, 102, 0, 0.3);
      color: #FF6600;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.78rem; 
      letter-spacing: 0.15em; 
      text-transform: uppercase;
      padding: 8px 16px; 
      cursor: pointer; 
      border-radius: 3px;
      transition: all 0.15s;
    }

    .dp-post-btn:hover { 
      border-color: #FF6600; 
      background: rgba(255, 102, 0, 0.08); 
    }

    .dp-post-btn.secondary { 
      border-color: rgba(200, 200, 190, 0.2); 
      color: #7a7a70; 
    }

    .dp-post-btn.secondary:hover { 
      border-color: #c8c8c0; 
      color: #c8c8c0; 
    }
    
    .dp-btn-dot {
      width: 6px; 
      height: 6px; 
      border-radius: 50%;
      background: #FF6600; 
      flex-shrink: 0;
    }

    .dp-post-btn.secondary .dp-btn-dot { 
      background: #7a7a70; 
    }
    
    #dp-modal-overlay {
      display: none; 
      position: fixed; 
      inset: 0;
      background: rgba(10, 11, 10, 0.88); 
      z-index: 10000;
      align-items: center; 
      justify-content: center; 
      padding: 24px;
      backdrop-filter: blur(5px);
    }

    #dp-modal-overlay.open { 
      display: flex; 
    }

    #dp-modal {
      background: #1a1c1a; 
      border: 1px solid rgba(255, 102, 0, 0.3);
      border-radius: 6px; 
      width: 100%; 
      max-width: 620px;
      font-family: 'Courier New', Courier, monospace; 
      overflow: hidden;
    }

    #dp-modal-header {
      display: flex; 
      align-items: center; 
      justify-content: space-between;
      padding: 16px 20px; 
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    #dp-modal-title { 
      font-size: 0.72rem; 
      letter-spacing: 0.22em; 
      text-transform: uppercase; 
      color: #FF6600; 
    }

    #dp-modal-close { 
      background: none; 
      border: none; 
      color: #7a7a70; 
      font-size: 1.1rem; 
      cursor: pointer; 
    }

    #dp-modal-close:hover { 
      color: #FF6600; 
    }
    
    #dp-platform-row { 
      display: flex; 
      gap: 8px; 
      padding: 16px 20px 0; 
    }

    .dp-platform-btn {
      background: #111312; 
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #7a7a70; 
      font-size: 0.7rem; 
      padding: 6px 12px; 
      cursor: pointer; 
      border-radius: 3px;
    }

    .dp-platform-btn.active { 
      background: #FF6600; 
      color: #000; 
      font-weight: bold; 
      border-color: #FF6600; 
    }

    #dp-modal-body { 
      padding: 20px; 
    }

    #dp-post-text {
      background: #111312; 
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 4px; 
      color: #c8c8c0; 
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.88rem; 
      line-height: 1.7; 
      padding: 16px; 
      width: 100%; 
      min-height: 180px;
      resize: vertical; 
      outline: none;
    }
    
    #dp-modal-footer { 
      display: flex; 
      gap: 10px; 
      justify-content: flex-end; 
      padding: 12px 20px 16px; 
      border-top: 1px solid rgba(255, 255, 255, 0.06); 
    }

    .dp-action-btn { 
      background: transparent; 
      border: 1px solid rgba(255, 255, 255, 0.12); 
      color: #c8c8c0; 
      font-size: 0.72rem; 
      padding: 9px 16px; 
      cursor: pointer; 
      border-radius: 3px; 
    }

    .dp-action-btn.primary { 
      background: #FF6600; 
      color: #000; 
      font-weight: bold; 
      border-color: #FF6600; 
    }
    
    #dp-loading { 
      display: none; 
      flex-direction: column; 
      align-items: center; 
      gap: 12px; 
      padding: 40px 0; 
      color: #7a7a70; 
      font-size: 0.75rem; 
      letter-spacing: 0.1em; 
    }

    .dp-spinner { 
      width: 20px; 
      height: 20px; 
      border: 2px solid rgba(255, 102, 0, 0.2); 
      border-top-color: #FF6600; 
      border-radius: 50%; 
      animation: dp-spin 0.6s linear infinite; 
    }

    @keyframes dp-spin { 
      to { transform: rotate(360deg); } 
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // 2. HTML Template
  const modalHTML = `
    <div id="dp-modal-overlay">
      <div id="dp-modal">
        <div id="dp-modal-header">
          <span id="dp-modal-title">// preparing content</span>
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
            <span>syncing with studio...</span>
          </div>
          <div id="dp-result">
            <textarea id="dp-post-text" spellcheck="false"></textarea>
          </div>
        </div>
        <div id="dp-modal-footer">
          <button class="dp-action-btn" onclick="dpPostGenerator.regenerate()">Regenerate</button>
          <button class="dp-action-btn primary" id="dp-copy-btn" onclick="dpPostGenerator.copy()">Copy Text</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // 3. Logic & State
  let state = { 
    content: '', 
    title: '', 
    platform: 'instagram', 
    sectionId: '', 
    mode: 'discovery' 
  };

  window.dpPostGenerator = {
    open(content, title, sectionEl, mode) {
      state = { 
        content, 
        title, 
        sectionId: sectionEl?.id || '', 
        platform: 'instagram', 
        mode 
      };
      document.getElementById('dp-modal-overlay').classList.add('open');
      this.regenerate();
    },

    close() { 
      document.getElementById('dp-modal-overlay').classList.remove('open'); 
    },

    setPlatform(p, btn) {
      state.platform = p;
      document.querySelectorAll('.dp-platform-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.regenerate();
    },

    regenerate() {
      document.getElementById('dp-loading').style.display = 'flex';
      document.getElementById('dp-result').style.display = 'none';
      this._generate();
    },

    copy() {
      const text = document.getElementById('dp-post-text').value;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('dp-copy-btn');
        btn.textContent = 'Copied ✓';
        setTimeout(() => btn.textContent = 'Copy Text', 2000);
      });
    },

    async _generate() {
      const url = `dpaul.studio${window.location.pathname.replace('index.html', '').replace('.html', '')}${state.sectionId ? '#' + state.sectionId : ''}`;

      // Intent-based prompting
      const modeInstruction = state.mode === 'shoutout'
        ? `This is a "SHOUT OUT" post. Start the post with an empty placeholder like "[Insert your own comment here...]" followed by a line break. Then, write a supportive recommendation about the project that transitions naturally from the user's comment.`
        : `This is a "DISCOVERY" post. Write in a third-party discovery voice (e.g., "just came across this", "impressive work"). The post should be self-contained and ready to publish immediately.`;

      const prompt = `Write a ${state.platform} post for dpaul.studio. 
${modeInstruction}
Style: Minimalist, technical, lowercase friendly, monospace aesthetic.
Content: ${state.content}
URL to include: ${url}
Format:
dpaul.studio
──────────────
// ${state.title.toUpperCase()}

[Content]

${url}
#hashtags`;

      try {
        const res = await fetch('https://dpaul-api-proxy.davidpaulahern.workers.dev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            messages: [{ role: 'user', content: prompt }]
          })
        });
        
        const data = await res.json();
        document.getElementById('dp-post-text').value = data.content?.[0]?.text || 'Error.';
        document.getElementById('dp-loading').style.display = 'none';
        document.getElementById('dp-result').style.display = 'block';
      } catch (e) {
        document.getElementById('dp-loading').style.display = 'none';
        console.error("Generation failed", e);
      }
    }
  };

  // 4. Initialization
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-post-section]').forEach(section => {
      const title = section.getAttribute('data-post-title') || "Project";
      const content = section.dataset.postContent || section.innerText.trim().slice(0, 1500);

      const container = document.createElement('div');
      container.className = 'dp-btn-group';

      // Button 1: Share Discovery
      const btnDisc = document.createElement('button');
      btnDisc.className = 'dp-post-btn';
      btnDisc.innerHTML = '<span class="dp-btn-dot"></span> // share discovery';
      btnDisc.onclick = () => dpPostGenerator.open(content, title, section, 'discovery');

      // Button 2: Shout Out
      const btnShout = document.createElement('button');
      btnShout.className = 'dp-post-btn secondary';
      btnShout.innerHTML = '<span class="dp-btn-dot"></span> // shout out';
      btnShout.onclick = () => dpPostGenerator.open(content, title, section, 'shoutout');

      container.append(btnDisc, btnShout);
      section.appendChild(container);
    });
  });
})();
