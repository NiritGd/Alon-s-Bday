/* ════════════════════════════════════════
   Alon's 16th Birthday — Card Engine
   30 pre-written cards, no server needed
════════════════════════════════════════ */

// ── DOM refs ──
const cardArea        = document.getElementById('cardArea');
const cardPlaceholder = document.getElementById('cardPlaceholder');
const cardWrapper     = document.getElementById('cardWrapper');
const surpriseBtn     = document.getElementById('surpriseBtn');
const confettiContainer = document.getElementById('confettiContainer');

// ══════════════════════════════════════════
// CARD DATA — All 30 cards
// ══════════════════════════════════════════

const CARDS = [

  // ─────────────────────────────────────
  // 🌍 THEME 1: GEOPOLITICS (10 cards)
  // ─────────────────────────────────────

  { id: 'G1', theme: 'geo', format: 'drake',
    reject: 'Reading Haaretz to understand the conflict',
    accept: 'A 60-second Instagram reel from an account with 40K followers'
  },

  { id: 'G2', theme: 'geo', format: 'breaking',
    html: `
      <div class="breaking-banner">⚡ BBC BREAKING NEWS</div>
      <div class="card-hero-img geo-img"><span>🌍</span></div>
      <div class="breaking-body">
        <strong>BREAKING:</strong> 16-year-old Tel Aviv/New York analyst delivers definitive Middle East solution via WhatsApp voice note. Running time: 14 minutes. Sent to: עומר, אורי, יותם, ישי and 8 others.<br><br>
        World leaders have been notified. The UN is "reviewing."
      </div>`
  },

  { id: 'G3', theme: 'geo', format: 'bio',
    html: `
      <div class="bio-name">ALON</div>
      <div class="bio-title">Senior Geopolitical Analyst</div>
      <div class="bio-line"><span class="bio-label">Age:</span> 16</div>
      <div class="bio-line"><span class="bio-label">Experience:</span> 6 years (started at 10)</div>
      <div class="bio-line"><span class="bio-label">Credentials:</span> 2 years US residency, Israeli directness, 4,000 hours of internet</div>
      <div class="bio-line"><span class="bio-label">Specialty:</span> Being right before it's obvious</div>
      <div class="bio-line"><span class="bio-label">Fee:</span> Free. Whether you asked or not.</div>`
  },

  { id: 'G4', theme: 'geo', format: 'brain',
    tiers: [
      { icon: '🧠', text: 'Reading the news' },
      { icon: '🧠🧠', text: 'Having strong opinions about the news' },
      { icon: '🧠🧠🧠', text: 'Explaining to adults why they\'re wrong' },
      { icon: '🤯', text: 'Getting genuinely annoyed they\'re <em>still</em> not getting it' },
    ]
  },

  { id: 'G5', theme: 'geo', format: 'tiktok',
    user: '@alonthinks',
    caption: 'just dropped the most important geopolitical take of 2026',
    meta: '📍 Tel Aviv 🇮🇱🇺🇸 · 847K views',
    comments: [
      { text: '"שכויח אחיי 🔥"', likes: '12.4K likes' },
      { text: '"לא מכבד לדעת הכל בגיל 16 😂"', likes: '8.1K likes' },
      { text: '"בן 16 ומסביר לאו"ם מה לעשות 💀"', likes: '6.2K likes' },
    ]
  },

  { id: 'G6', theme: 'geo', format: 'un',
    html: `
      <div class="un-header">UNITED NATIONS — YOUTH OBSERVER</div>
      <div class="un-name">Alon, 16, Israel / USA</div>
      <div class="un-detail">Observer Programme · 2026 Intake</div>
      <div class="un-quote">"Has submitted 14 unsolicited position papers since age 13. Irritatingly, 11 were correct. The Assembly is concerned."</div>`
  },

  { id: 'G7', theme: 'geo', format: 'trump',
    html: `
      <div class="trump-stars">⭐⭐⭐</div>
      <div class="trump-quote">"Alon is sixteen — sixteen! — and he already understands geopolitics better than most senators. Very smart. Some people are saying the smartest sixteen-year-old, maybe ever. I would know."</div>
      <div class="trump-attr">— Donald J. Trump</div>
      <div class="trump-sub">completely unprompted</div>`
  },

  { id: 'G8', theme: 'geo', format: 'fine',
    html: `
      <div class="fine-icon">🐶🔥</div>
      <div class="fine-title">Alon. Age 16. Completely calm.</div>
      <div class="fine-labels">
        <span class="fine-label">UN hypocrisy</span>
        <span class="fine-label">Big Tech power grabs</span>
        <span class="fine-label">VAR decisions</span>
        <span class="fine-label">Man City's 115 charges</span>
      </div>
      <div class="fine-footer">שכויח.</div>`
  },

  { id: 'G9', theme: 'geo', format: 'whatsapp',
    html: `
      <div class="wa-header">
        <span class="wa-icon">🎙️</span>
        <span>Voice note — <strong>14:32</strong></span>
      </div>
      <div class="wa-voice">
        <span class="wa-play">▶️</span>
        <div class="wa-wave"></div>
        <span class="wa-duration">14:32</span>
      </div>
      <div class="wa-detail"><strong>Sent to:</strong> The boys (עומר, אורי, יותם, ישי, טל, נווה, אסף + 3 others)</div>
      <div class="wa-detail">Alon: full geopolitical breakdown of why everyone is wrong</div>
      <div class="wa-detail"><span class="wa-muted">👂 Listened to by: 3 of 10</span></div>
      <div class="wa-detail"><span class="wa-muted">אורן: <em>still hasn't listened</em></span></div>`
  },

  { id: 'G10', theme: 'geo', format: 'breaking',
    html: `
      <div class="breaking-banner">⚡ BREAKING NEWS</div>
      <div class="card-hero-img geo-img"><span>🏢</span></div>
      <div class="breaking-body">
        <strong>BREAKING:</strong> Meta, X, and Google have all quietly dismantled their DEI departments this year.<br><br>
        Alon has been predicting this since age 14.<br><br>
        He has not said "I told you so."<br>
        He has <em>implied</em> it. Every single day.
      </div>`
  },

  // ─────────────────────────────────────
  // ⚽ THEME 2: LIVERPOOL / SOCCER (10)
  // ─────────────────────────────────────

  { id: 'S1', theme: 'soccer', format: 'sky',
    html: `
      <div class="sky-banner"><span class="sky-alert">🚨</span> SKY SPORTS EXCLUSIVE</div>
      <div class="card-hero-img sky-img"><span>⚽</span></div>
      <div class="sky-headline">LIVERPOOL FC confirm ALON, 16, as Head of Tactical Analysis</div>
      <div class="sky-body">
        Slot: <em>"He's been doing the job from his sofa for years. We made it official."</em><br><br>
        Contract: Until 2040, or until he's wrong once — whichever comes first.
      </div>`
  },

  { id: 'S2', theme: 'soccer', format: 'drake',
    reject: 'Man City — 6 Premier League titles, 115 financial fair play charges, and Pep\'s coat collection',
    accept: 'Liverpool — Istanbul 2005. Enough said.'
  },

  { id: 'S3', theme: 'soccer', format: 'stats',
    html: `
      <div class="stats-header">⚽ ALON — CAREER STATS (to age 16)</div>
      <div class="stat-row"><span class="stat-label">Matches watched</span><span class="stat-value">312</span></div>
      <div class="stat-row"><span class="stat-label">Correct predictions</span><span class="stat-value">68%</span></div>
      <div class="stat-row"><span class="stat-label">Wrong predictions</span><span class="stat-value">32%</span></div>
      <div class="stat-note">— <em>all officially blamed on the referee</em></div>
      <div class="stat-row"><span class="stat-label">Times Man City benefitted from suspicious call</span><span class="stat-value">"All of them."</span></div>
      <div class="stat-row"><span class="stat-label">Times accepted VAR decision against Liverpool</span><span class="stat-value" style="color: var(--soccer); font-weight: 800;">0</span></div>`
  },

  { id: 'S4', theme: 'soccer', format: 'podcast',
    html: `
      <div class="podcast-show">THE ANFIELD WRAP</div>
      <div class="podcast-ep">Ep. 1,016</div>
      <div class="podcast-title">"Is Alon Ready to Stop Explaining Football to People Who Were Watching Before He Was Born?"</div>
      <div class="podcast-detail">Special guest: אורן (Oren) — his brother, who supports Man City just to wind him up</div>
      <div class="podcast-detail">Panel verdict: No. Probably never.</div>
      <div class="podcast-rating"><span class="podcast-stars">★★★★★</span> <em>"He's not wrong though."</em> — @FLC</div>`
  },

  { id: 'S5', theme: 'soccer', format: 'means-more',
    html: `
      <div class="means-more-title">THIS MEANS MORE.</div>
      <div class="means-more-body">
        Alon turns 16 today. 16 years of Liverpool. 16 years of post-match analysis nobody asked for. 16 years of loathing Manchester City with a purity that honestly borders on spiritual.
      </div>
      <div class="means-more-footer">You'll Never Walk Alone.</div>
      <div class="means-more-note">(Unless you support City. In which case — לא מכבד.)</div>`
  },

  { id: 'S6', theme: 'soccer', format: 'guardian',
    html: `
      <div class="guardian-header">The Guardian</div>
      <div class="card-hero-img guardian-img"><span>🏟️</span></div>
      <div class="guardian-section">Football</div>
      <div class="guardian-headline">Liverpool 4–1 Manchester City</div>
      <div class="guardian-body">
        "In scenes described as 'inevitable' by Alon, 16, who had predicted this exact scoreline, Liverpool ran out comfortable winners. Post-match, Alon was reportedly 'calm' and 'not smug at all,' according to absolutely no one."
      </div>`
  },

  { id: 'S7', theme: 'soccer', format: 'brain',
    tiers: [
      { icon: '🧠', text: 'Watch a Liverpool game' },
      { icon: '🧠🧠', text: 'Analyse the game out loud to whoever is nearby' },
      { icon: '🧠🧠🧠', text: 'Message Arne Slot tactical suggestions via social media' },
      { icon: '🤯', text: 'Conclude the root cause of all problems is Man City existing' },
    ]
  },

  { id: 'S8', theme: 'soccer', format: 'lfc',
    html: `
      <div class="lfc-badge">🔴</div>
      <div class="lfc-official">LIVERPOOL FC — OFFICIAL</div>
      <div class="lfc-body">
        Happy 16th Birthday, Alon.<br><br>
        One of the most committed Reds we know.<br>
        Has never once — not once — extended even basic courtesy to Pep Guardiola.<br><br>
        We respect that deeply.
      </div>
      <div class="lfc-ynwa">YNWA.</div>`
  },

  { id: 'S9', theme: 'soccer', format: 'tweet',
    avatar: '🔴',
    name: 'FLC',
    handle: '@FLC',
    time: '47s ago',
    body: `Shoutout to Alon who turns 16 today 🔴\n\nBeen watching Liverpool longer than some of our academy players have been training.\n\nStill hasn't forgiven the ref from <em>that</em> game. You know the one.\n\ncc: עומר, יותם — you know he's right\n\nשכויח אח. YNWA. 🔴`,
    likes: '6.2K',
    retweets: '1.4K',
    replies: '312',
  },

  { id: 'S10', theme: 'soccer', format: 'quote',
    text: '"Man City haven\'t actually won anything. They bought it. There\'s a difference."',
    attr: '— Alon, 16',
    sub: '(To everyone. Always. Without being asked.)',
  },

  // ─────────────────────────────────────
  // 💻 THEME 3: BUSINESS / TECH (10)
  // ─────────────────────────────────────

  { id: 'T1', theme: 'tech', format: 'linkedin',
    html: `
      <div class="li-header">
        <div class="li-avatar">A</div>
        <div class="li-info">
          <div class="li-name">Alon</div>
          <div class="li-title">Founder @ Being 16 | ex-Age 15</div>
        </div>
      </div>
      <div class="li-body">Thrilled to announce I'm moving to v16.

Key reflections from the past year:
→ Big Tech and the White House are now the same meeting. I called it.
→ Liverpool should have signed that striker in January.
→ אורן still doesn't understand the offside rule.</div>
      <div class="li-open">Open to: rigorous debate, disruptive ideas, gym</div>
      <div class="li-reactions">❤️ 3.1K · 💬 יותם: "שכויח אח 🔥" · אסף: "לא מכבד שלא הזמנת אותי"</div>`
  },

  { id: 'T2', theme: 'tech', format: 'drake',
    reject: 'Spending years building credentials before having opinions on Big Tech',
    accept: 'Being 16, Israeli, and already knowing exactly what\'s wrong with Silicon Valley'
  },

  { id: 'T3', theme: 'tech', format: 'forbes',
    html: `
      <div class="forbes-logo">Forbes</div>
      <div class="forbes-sub">30 UNDER 30, 2026 · TECHNOLOGY & BUSINESS</div>
      <div class="forbes-name">ALON, 16 — Tel Aviv / New York</div>
      <div class="forbes-body">
        <em>"Has identified 9 trillion-dollar market opportunities. Built: 0. Thinking about it: constantly."</em>
      </div>
      <div class="forbes-mentor">Mentor quote: <em>"He explained our own company's strategy back to us better than we could. Unnerving."</em></div>
      <div class="forbes-runner">Runner-up: אלנתן, 16 — <em>"strong application, lost on tiebreaker"</em></div>`
  },

  { id: 'T4', theme: 'tech', format: 'brain',
    tiers: [
      { icon: '🧠', text: 'Using AI to finish homework' },
      { icon: '🧠🧠', text: 'Using AI to win arguments with your parents' },
      { icon: '🧠🧠🧠', text: 'Using AI to brief yourself on Big Tech\'s relationship with the Trump administration' },
      { icon: '🤯', text: 'Becoming the AI' },
    ]
  },

  { id: 'T5', theme: 'tech', format: 'yc',
    html: `
      <div class="yc-logo">Y Combinator</div>
      <div class="yc-re">Re: Alon, Age 16</div>
      <div class="yc-status">Status: <span>DEFERRED</span> (age grounds only)</div>
      <div class="yc-body">
        Partner notes: <em>"Too confident. Too specific. Too correct about the distribution layer problem. Predicted Big Tech's political pivot two years before it happened. We didn't listen. We're listening now."</em>
      </div>
      <div class="yc-sig">— Garry Tan, YC President</div>
      <div class="yc-also">Also reviewed: אסף's competing application — <em>"promising, but he's not Alon"</em></div>
      <div class="yc-reapply">Reapply: 2028. Or sooner if you figure out the age thing.</div>`
  },

  { id: 'T6', theme: 'tech', format: 'tweet',
    avatar: '🤖',
    name: 'Mark Zuckerberg',
    handle: '@finkmaster',
    time: '2h ago',
    body: `A 16-year-old just explained Big Tech's relationship with the Trump administration better than my entire policy team.\n\nHis name is Alon.\n\nI've sent him a connection request.\n\nHe has not accepted.`,
    likes: '82K',
    retweets: '14K',
    replies: '3.2K',
  },

  { id: 'T7', theme: 'tech', format: 'spec',
    html: `
      <div class="spec-title">ALON™ — v16.0 RELEASE NOTES</div>
      <div class="spec-divider">─────────────────────────────</div>
      <div class="spec-line"><span class="spec-key">Build:</span> <span class="spec-val">Israeli / American hybrid</span></div>
      <div class="spec-line"><span class="spec-key">Core processor:</span> <span class="spec-val">Infinite hot takes</span></div>
      <div class="spec-line"><span class="spec-key">Storage:</span> <span class="spec-val">Full. Mostly geopolitics.</span></div>
      <div class="spec-line"><span class="spec-key">Languages:</span> <span class="spec-val">Hebrew, English, Fluent Sarcasm</span></div>
      <div class="spec-line"><span class="spec-key">Gym mode:</span> <span class="spec-check">✅ Active</span></div>
      <div class="spec-line"><span class="spec-key">Liverpool alert system:</span> <span class="spec-check">✅ Real-time</span></div>
      <div class="spec-line"><span class="spec-key">Big Tech radar:</span> <span class="spec-check">✅ Always on</span></div>
      <div class="spec-line"><span class="spec-key">Known bugs:</span> <span class="spec-bug">Still right when he shouldn't be</span></div>
      <div class="spec-line"><span class="spec-key">Patch notes v16:</span> <span class="spec-patch">+1 year, same energy</span></div>
      <div class="spec-divider">─────────────────────────────</div>
      <div class="spec-footer">🎂 Happy 16th, Alon.</div>`
  },

  { id: 'T8', theme: 'tech', format: 'appstore',
    html: `
      <div class="appstore-stars">★★★★★</div>
      <div class="appstore-title">"Being 16" — Verified Review</div>
      <div class="appstore-body">
        "Massive upgrade from v15. The geopolitical analysis and Big Tech tracking features alone are worth it. Gym mode is smooth. Main complaint: adults still don't listen to the correct opinions. Will update to v17 if the patch fixes that."
      </div>
      <div class="appstore-meta">
        <span>— Alon, Verified User, Feb 21 2026</span>
        <span class="appstore-helpful">👍 Helpful</span>
      </div>
      <div style="margin-top:0.5rem;font-size:0.8rem;color:#666;font-style:italic;">אורן found this review: "not helpful"</div>`
  },

  { id: 'T9', theme: 'tech', format: 'pitch',
    html: `
      <div class="pitch-header">PITCH DECK — ALON, 16</div>
      <div class="pitch-row"><div class="pitch-label">Problem</div><div class="pitch-value">Adults think they understand politics, tech, and football. They don't.</div></div>
      <div class="pitch-row"><div class="pitch-label">Solution</div><div class="pitch-value">Alon.</div></div>
      <div class="pitch-row"><div class="pitch-label">Market size</div><div class="pitch-value">Everyone who is wrong (est. 7.9 billion)</div></div>
      <div class="pitch-row"><div class="pitch-label">Traction</div><div class="pitch-value">Consistently right since approximately 2019.</div></div>
      <div class="pitch-row"><div class="pitch-label">Ask</div><div class="pitch-value">Respect. And maybe a YC intro.</div></div>
      <div class="pitch-row"><div class="pitch-label">Advisory board</div><div class="pitch-value">עומר, אורי, ישי, טל (none of them agreed to this)</div></div>
      <div class="pitch-footer">שכויח.</div>`
  },

  { id: 'T10', theme: 'tech', format: 'screentime',
    html: `
      <div class="st-header">📱 WEEKLY SCREEN TIME REPORT</div>
      <div class="st-device">Alon's iPhone · Feb 14–21, 2026</div>
      <div class="st-total">11h 42m<span class="st-avg"> /day</span></div>
      <div class="st-change">⬆️ 23% from last week</div>
      <div class="st-divider"></div>
      <div class="st-row"><span class="st-app">Twitter / X</span><span class="st-bar st-bar-1"></span><span class="st-time">3h 12m</span></div>
      <div class="st-row"><span class="st-app">Instagram</span><span class="st-bar st-bar-2"></span><span class="st-time">2h 48m</span></div>
      <div class="st-row"><span class="st-app">WhatsApp</span><span class="st-bar st-bar-3"></span><span class="st-time">1h 54m</span></div>
      <div class="st-row"><span class="st-app">YouTube</span><span class="st-bar st-bar-4"></span><span class="st-time">1h 22m</span></div>
      <div class="st-row"><span class="st-app">Settings</span><span class="st-bar st-bar-5"></span><span class="st-time">0h 02m</span></div>
      <div class="st-divider"></div>
      <div class="st-note">Most active: 11:30 PM – 1:00 AM</div>
      <div class="st-note st-oren">אורן's screen time: 45 min/day <span style="color:var(--muted)">(mostly games)</span></div>`
  },

  // ─────────────────────────────────────
  // 📸 THROWBACK PHOTO CARDS (5)
  // ─────────────────────────────────────

  { id: 'P1', theme: 'geo', format: 'photo',
    photo: 'photos/20161017_104427.jpg',
    caption: 'Age 6. Already assessing the geopolitical landscape.',
    sub: '(The elephants had no idea they were being analysed.)',
  },

  { id: 'P2', theme: 'soccer', format: 'photo',
    photo: 'photos/IMG_0325.JPG',
    caption: 'Player of the Match. Self-appointed.',
    sub: 'Ajax Stadium. Not Liverpool, but at least it\'s not Man City.',
  },

  { id: 'P3', theme: 'tech', format: 'photo',
    photo: 'photos/IMG_6035.JPG',
    caption: 'Alon v3.0 — Still in stealth mode.',
    sub: 'Early-stage incubator. Pre-seed round.',
  },

  { id: 'P4', theme: 'geo', format: 'photo',
    photo: 'photos/IMG_2714.JPG',
    caption: 'Age 4. New York shirt. Already had dual-market exposure.',
    sub: 'Airport. Unimpressed. On brand.',
  },

  { id: 'P5', theme: 'tech', format: 'photo',
    photo: 'photos/IMG20220521192244.jpg',
    caption: 'Age 12. Horseshoe Bend. Already had opinions about the Grand Canyon.',
    sub: '"It\'s impressive, but the US needs better infrastructure to get here."',
  },

];

// ══════════════════════════════════════════
// CARD RENDERING
// ══════════════════════════════════════════

function renderCard(card) {
  const themeLabels = { geo: '🌍 Geopolitics', soccer: '⚽ Liverpool', tech: '💻 Tech & Business', photo: '📸 Throwback' };
  let badge = `<div class="card-theme-badge ${card.theme}">${themeLabels[card.theme]}</div>`;
  let inner = '';

  switch (card.format) {

    case 'drake':
      inner = `
        ${badge}
        <div class="card card-drake">
          <div class="drake-row reject">
            <div class="drake-icon">❌</div>
            <div class="drake-text">${card.reject}</div>
          </div>
          <div class="drake-row accept">
            <div class="drake-icon">✅</div>
            <div class="drake-text">${card.accept}</div>
          </div>
        </div>`;
      break;

    case 'brain':
      inner = `
        ${badge}
        <div class="card card-brain">
          ${card.tiers.map(t => `
            <div class="brain-tier">
              <div class="brain-icon">${t.icon}</div>
              <div class="brain-text">${t.text}</div>
            </div>`).join('')}
        </div>`;
      break;

    case 'tiktok':
      inner = `
        ${badge}
        <div class="card card-tiktok">
          <div class="tiktok-header">
            <div class="tiktok-avatar">A</div>
            <div class="tiktok-user">${card.user}</div>
          </div>
          <div class="tiktok-caption">${card.caption}</div>
          <div class="tiktok-meta">${card.meta}</div>
          ${card.comments.map(c => `
            <div class="tiktok-comment">
              <span class="tiktok-comment-text">💬 ${c.text}</span>
              <span class="tiktok-likes">${c.likes}</span>
            </div>`).join('')}
        </div>`;
      break;

    case 'photo':
      inner = `
        ${badge}
        <div class="card card-photo">
          <img class="photo-frame" src="${card.photo}" alt="Throwback photo of Alon" loading="lazy" />
          <div class="photo-caption">${card.caption}</div>
          ${card.sub ? `<div class="photo-sub">${card.sub}</div>` : ''}
        </div>`;
      break;

    case 'quote':
      inner = `
        ${badge}
        <div class="card card-quote">
          <div class="quote-mark">"</div>
          <div class="quote-text">${card.text}</div>
          <div class="quote-attr">${card.attr}</div>
          ${card.sub ? `<div class="quote-sub">${card.sub}</div>` : ''}
        </div>`;
      break;

    case 'tweet':
      inner = `
        ${badge}
        <div class="card card-tweet">
          <div class="tweet-header">
            <div class="tweet-avatar">${card.avatar}</div>
            <div class="tweet-names">
              <div class="tweet-name">${card.name}</div>
              <div class="tweet-handle">${card.handle}</div>
            </div>
          </div>
          <div class="tweet-body">${card.body}</div>
          <div class="tweet-time">${card.time}</div>
          <div class="tweet-metrics">
            <span>💬 <span class="tweet-metric-val">${card.replies}</span></span>
            <span>🔁 <span class="tweet-metric-val">${card.retweets}</span></span>
            <span>❤️ <span class="tweet-metric-val">${card.likes}</span></span>
          </div>
        </div>`;
      break;

    // All other formats use pre-built HTML
    default: {
      const formatClass = {
        breaking: 'card-breaking',
        bio: 'card-bio',
        un: 'card-un',
        trump: 'card-trump',
        fine: 'card-fine',
        whatsapp: 'card-whatsapp',
        sky: 'card-sky',
        stats: 'card-stats',
        podcast: 'card-podcast',
        'means-more': 'card-means-more',
        lfc: 'card-lfc',
        guardian: 'card-guardian',
        linkedin: 'card-linkedin',
        forbes: 'card-forbes',
        yc: 'card-yc',
        spec: 'card-spec',
        appstore: 'card-appstore',
        pitch: 'card-pitch',
        screentime: 'card-screentime',
      };
      const cls = formatClass[card.format] || '';
      inner = `${badge}<div class="card ${cls}">${card.html}</div>`;
      break;
    }
  }

  return inner;
}

// ══════════════════════════════════════════
// SHUFFLE ENGINE — no repeats, interleaved categories
// ══════════════════════════════════════════

const SESSION_SIZE = 10;
const MIN_PHOTO_CARDS = 2;

let deck = [];
let seen = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Pick SESSION_SIZE cards, guaranteeing at least MIN_PHOTO_CARDS photo cards,
 *  then interleave themes so you never get the same category twice in a row. */
function buildInterleavedDeck() {
  // Separate photo cards from the rest
  const photoCards = CARDS.filter(c => c.format === 'photo');
  const otherCards = CARDS.filter(c => c.format !== 'photo');

  // Pick at least MIN_PHOTO_CARDS photos
  shuffle(photoCards);
  const pickedPhotos = photoCards.slice(0, MIN_PHOTO_CARDS);

  // Fill remaining slots from the other cards
  shuffle(otherCards);
  const remaining = SESSION_SIZE - pickedPhotos.length;
  const pickedOthers = otherCards.slice(0, remaining);

  const selected = [...pickedPhotos, ...pickedOthers];

  // Interleave by theme so you don't get the same category twice in a row
  const buckets = {};
  for (const c of selected) {
    if (!buckets[c.theme]) buckets[c.theme] = [];
    buckets[c.theme].push(c);
  }
  for (const key of Object.keys(buckets)) shuffle(buckets[key]);

  const result = [];
  let lastTheme = null;

  while (Object.keys(buckets).some(k => buckets[k].length > 0)) {
    const eligible = Object.keys(buckets).filter(k => buckets[k].length > 0 && k !== lastTheme);
    const pool = eligible.length > 0
      ? eligible
      : Object.keys(buckets).filter(k => buckets[k].length > 0);

    const pick = pool[Math.floor(Math.random() * pool.length)];
    result.push(buckets[pick].pop());
    lastTheme = pick;

    if (buckets[pick].length === 0) delete buckets[pick];
  }

  return result;
}

function resetDeck() {
  deck = buildInterleavedDeck().reverse(); // reverse so we pop from end
  seen = 0;
}

function drawCard() {
  seen++;
  return deck.pop();
}

// Initialize deck
resetDeck();

// ══════════════════════════════════════════
// FINALE MESSAGE
// ══════════════════════════════════════════

function renderFinale() {
  return `
    <div class="card card-finale">
      <div class="finale-emoji">🚀</div>
      <div class="finale-title">16 is just the launchpad.</div>
      <div class="finale-body">
        10 cards, 10 reasons the world should pay attention.<br><br>
        You're the kid who debates diplomats, scouts strikers better than Sky Sports, and tells Big Tech what it's doing wrong — <em>and you're right</em>.<br><br>
        Most people spend their whole lives waiting for permission to have a voice. You never waited. Keep going.<br><br>
        The next 16 years? The world's not ready.<br>
        But you are.
      </div>
      <div class="finale-sign-off">שכויח, Alon. Happy birthday. ❤️</div>
      <button class="replay-btn" id="replayBtn">🔄 Start Over</button>
    </div>`;
}

// ══════════════════════════════════════════
// UI LOGIC
// ══════════════════════════════════════════

surpriseBtn.addEventListener('click', () => {
  // If deck is empty, show finale
  if (deck.length === 0) {
    cardPlaceholder.style.display = 'none';
    cardWrapper.style.display = 'block';
    cardWrapper.innerHTML = renderFinale();
    cardWrapper.style.animation = 'none';
    void cardWrapper.offsetHeight;
    cardWrapper.style.animation = '';

    // Hide the main button
    surpriseBtn.style.display = 'none';

    // Big confetti burst for finale
    launchConfetti();
    setTimeout(() => launchConfetti(), 800);

    // Wire up the replay button
    document.getElementById('replayBtn').addEventListener('click', () => {
      resetDeck();
      surpriseBtn.style.display = 'inline-flex';
      cardPlaceholder.style.display = 'block';
      cardWrapper.style.display = 'none';
      cardWrapper.innerHTML = '';
      cardArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    cardArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const card = drawCard();

  // Hide placeholder, show card
  cardPlaceholder.style.display = 'none';
  cardWrapper.style.display = 'block';

  // Re-trigger animation by cloning
  cardWrapper.innerHTML = renderCard(card);
  cardWrapper.style.animation = 'none';
  // Force reflow
  void cardWrapper.offsetHeight;
  cardWrapper.style.animation = '';

  // Launch confetti on first card and every 5th card
  if (seen === 1 || seen % 5 === 0) {
    launchConfetti();
  }

  // Scroll card into view
  cardArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ══════════════════════════════════════════
// CONFETTI
// ══════════════════════════════════════════

const CONFETTI_COLORS = [
  '#f5a623', '#ef4444', '#C8102E', '#00bcd4',
  '#10b981', '#f97316', '#ec4899', '#84cc16',
];

function launchConfetti() {
  const TOTAL = 80;
  for (let i = 0; i < TOTAL; i++) {
    setTimeout(() => spawnConfettiPiece(), i * 20);
  }
}

function spawnConfettiPiece() {
  const piece    = document.createElement('div');
  const color    = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  const size     = Math.random() * 10 + 5;
  const left     = Math.random() * 100;
  const duration = Math.random() * 2.5 + 2;
  const delay    = Math.random() * 0.3;
  const shape    = Math.random();

  let borderRadius = '2px';
  let width  = `${size}px`;
  let height = `${size}px`;

  if (shape < 0.33) {
    borderRadius = '0';
  } else if (shape < 0.66) {
    borderRadius = '50%';
  } else {
    height = `${size * 0.4}px`;
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

// Launch confetti on page load for a festive entry
window.addEventListener('load', () => launchConfetti());
