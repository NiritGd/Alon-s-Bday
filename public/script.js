/* ────────────────────────────────────────
   Alon's 16th Birthday — Frontend Script
──────────────────────────────────────── */

// ── DOM refs ──
const themeSection   = document.getElementById('themeSection');
const loadingSection = document.getElementById('loadingSection');
const messageSection = document.getElementById('messageSection');
const loadingText    = document.getElementById('loadingText');
const msgIcon        = document.getElementById('msgIcon');
const msgLabel       = document.getElementById('msgLabel');
const messageBox     = document.getElementById('messageBox');
const messageText    = document.getElementById('messageText');
const cursor         = document.getElementById('cursor');
const againBtn       = document.getElementById('againBtn');
const changeBtn      = document.getElementById('changeBtn');
const confettiContainer = document.getElementById('confettiContainer');

// ── State ──
let currentTheme = null;
let isGenerating = false;

// ── Loading messages ──
const LOADING_MESSAGES = {
  geopolitics: [
    'Consulting the Security Council…',
    'Analyzing geopolitical tensions…',
    'Claude is reading your hot takes…',
    'Breaking news loading…',
  ],
  soccer: [
    'Checking the Sky Sports ticker…',
    'Reviewing the transfer window…',
    'Claude is in the commentary box…',
    'Consulting Premier League archives…',
  ],
  tech: [
    'Compiling Alon v16.0…',
    'Running diagnostics…',
    'Claude is writing the changelog…',
    'Deploying birthday algorithms…',
  ],
  default: [
    'Claude is cooking your roast…',
    'Generating birthday wisdom…',
    'Surprising you any second now…',
  ],
};

let loadingInterval = null;

function startLoadingMessages(theme) {
  const pool = LOADING_MESSAGES[theme] || LOADING_MESSAGES.default;
  let idx = 0;
  loadingText.textContent = pool[idx];
  loadingInterval = setInterval(() => {
    idx = (idx + 1) % pool.length;
    loadingText.style.opacity = '0';
    setTimeout(() => {
      loadingText.textContent = pool[idx];
      loadingText.style.opacity = '1';
    }, 300);
  }, 2200);
}

function stopLoadingMessages() {
  if (loadingInterval) {
    clearInterval(loadingInterval);
    loadingInterval = null;
  }
}

// ── Button wiring ──
document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (isGenerating) return;
    const raw = btn.dataset.theme;
    generateMessage(raw === 'random' ? null : raw);
  });
});

againBtn.addEventListener('click',  () => { if (!isGenerating) generateMessage(currentTheme); });
changeBtn.addEventListener('click', () => {
  messageSection.style.display = 'none';
  themeSection.style.display   = 'block';
  themeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ── Main generate function ──
async function generateMessage(theme) {
  if (isGenerating) return;
  isGenerating = true;

  // Disable all buttons
  setButtonsDisabled(true);

  // Hide message, show loading
  messageSection.style.display = 'none';
  messageText.textContent      = '';
  cursor.classList.remove('hidden');

  loadingSection.style.display = 'block';
  themeSection.style.display   = 'none';
  startLoadingMessages(theme);

  const url = `/api/generate${theme ? `?theme=${encodeURIComponent(theme)}` : ''}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const reader  = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let messageRevealed = false;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        let data;
        try { data = JSON.parse(line.slice(6)); }
        catch { continue; }

        if (data.type === 'theme') {
          // Apply theme
          currentTheme = data.theme;
          msgIcon.textContent  = data.emoji;
          msgLabel.textContent = data.label;
          messageBox.className = `message-box ${data.cssClass}`;
        }

        if (data.type === 'theme' || (data.type === 'text' && !messageRevealed)) {
          if (!messageRevealed) {
            // Transition: hide loading → show message
            stopLoadingMessages();
            loadingSection.style.display = 'none';
            messageSection.style.display = 'block';
            messageSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            messageRevealed = true;
          }
        }

        if (data.type === 'text') {
          messageText.textContent += data.text;
        }

        if (data.type === 'done') {
          cursor.classList.add('hidden');
          launchConfetti();
        }

        if (data.type === 'error') {
          stopLoadingMessages();
          loadingSection.style.display = 'none';
          messageSection.style.display = 'block';
          cursor.classList.add('hidden');
          messageText.textContent = data.message || 'Something went wrong. Try again!';
        }
      }
    }
  } catch (err) {
    stopLoadingMessages();
    loadingSection.style.display = 'none';
    messageSection.style.display = 'block';
    cursor.classList.add('hidden');
    messageText.textContent = 'Connection error — check your internet and try again!';
  }

  isGenerating = false;
  setButtonsDisabled(false);
}

function setButtonsDisabled(disabled) {
  document.querySelectorAll('[data-theme], #againBtn, #changeBtn').forEach(btn => {
    btn.disabled = disabled;
  });
}

// ── Confetti ──
const CONFETTI_COLORS = [
  '#f5a623', '#ef4444', '#7c3aed', '#00bcd4',
  '#10b981', '#f97316', '#ec4899', '#84cc16',
];

function launchConfetti() {
  const TOTAL   = 120;
  const STAGGER = 18; // ms between pieces

  for (let i = 0; i < TOTAL; i++) {
    setTimeout(() => spawnConfettiPiece(), i * STAGGER);
  }
}

function spawnConfettiPiece() {
  const piece    = document.createElement('div');
  const color    = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  const size     = Math.random() * 10 + 5;
  const left     = Math.random() * 100;
  const duration = Math.random() * 2.5 + 2;
  const delay    = Math.random() * 0.3;
  const shape    = Math.random();     // 0–0.33 square, 0.33–0.66 circle, >0.66 rect

  let borderRadius = '2px';
  let width  = `${size}px`;
  let height = `${size}px`;

  if (shape < 0.33) {
    borderRadius = '0';
  } else if (shape < 0.66) {
    borderRadius = '50%';
  } else {
    height = `${size * 0.4}px`;
    borderRadius = '2px';
  }

  piece.className = 'confetti-piece';
  piece.style.cssText = `
    background: ${color};
    left: ${left}%;
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    transform: rotate(${Math.random() * 360}deg);
  `;

  confettiContainer.appendChild(piece);
  setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200);
}
