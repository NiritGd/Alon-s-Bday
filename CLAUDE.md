# Alon's 16th Birthday Website — Project Plan

## Project Overview

A fun, surprise birthday webpage for Alon's 16th birthday (February 21, 2010 → turns 16 on Feb 21, 2026).

**Core mechanic:** Single "Surprise Me 🎲" button that randomly cycles through 30 pre-written birthday cards across 3 themed categories. No repeats until all cards are seen.

**Tech stack:** Pure vanilla HTML + CSS + JS. Single folder, zero installation. Open `index.html` in any browser — done.

---

## About Alon

| Detail | Info |
|---|---|
| Full name | Alon |
| Birthday | February 21, 2010 (turns 16) |
| Background | Israeli, spent ~2 years in the US when younger |
| Current vibe | Israeli directness + American cultural fluency |
| Dominant energy | Big thinker / debater — has a confident take on everything |
| Languages | Hebrew, English (American-oriented) |

### Interests
- **Geopolitics** — Middle East, US foreign policy, global power dynamics. Has strong opinions and is often frustratingly correct. Debates adults without hesitation.
- **Premier League / Liverpool FC** — Devoted Liverpool fan. Deeply loathes Manchester City (their money, Pep Guardiola, their FFP charges). Has never once accepted a VAR decision against Liverpool.
- **Business & Tech** — Specifically interested in the crossroads of Big Tech and politics (e.g. Big Tech's relationship with the Trump administration, who controls the future internet). Startup-aware. Thinks in terms of disruption and ideas.
- **Gym** — Likes working out and physics but doesn't nerd out on it.
- **Reminiscing** — Loves looking back at photos and memories from his time in the US as a young kid.

### Personality quirks
- Always right (or at least, always confident he is)
- Finds DEI approaches hypocritical and tedious — **use sparingly, max 1–2 references across all 30 cards**
- Very online — consumes news and content more from Instagram/TikTok creators than traditional outlets
- Says **שכויח** (shkoyakh) — meaning "good work / keep it up / respect"
- Says **לא מכבד** (lo mekhabed) — meaning "to dis / disrespect someone or something"; also used playfully to tease about someone not giving him enough respect

---

## Family & Friends

| Person | Notes |
|---|---|
| אורן (Oren) | Younger brother — can be used as a comic foil |
| עומר | Close friend |
| אורי | Close friend |
| יותם | Close friend |
| ישי | Close friend |
| טל | Close friend |
| נווה | Close friend |
| יותם הקטן | Close friend ("little Yotam") |
| אסף | Close friend |
| אלנתן | Close friend |

**Usage guideline:** Weave friends/brother into cards naturally — reactions, tags, mentions — not as the main joke. Oren works well as a comic foil (e.g. "Man City fan" or "the one who disagreed").

---

## Hebrew Slang Reference

| Slang | Transliteration | Meaning / Usage |
|---|---|---|
| שכויח | Shkoyakh | "Good work / keep it up / respect" — positive affirmation |
| לא מכבד | Lo mekhabed | "Disrespect / to dis" — also used playfully when teasing that someone isn't giving Alon the respect he deserves |

---

## Photos

- **Source:** Google Photos album shared at `https://photos.app.goo.gl/s65AtJv7kq8FyERZ7` (Claude cannot access this directly)
- **Plan:** Parent to download desired photos and place in `/public/photos/` folder
- **Usage:** Build 1–2 "throwback" cards that display a photo with a funny caption (e.g. "Age X. Already had opinions.")
- **Fallback:** If no photos provided before launch, cards show a placeholder with funny text only

---

## Page Design

- **Format:** Single page, mobile-friendly
- **One big button:** "🎲 Surprise Me" — generates a new random card each click
- **Card display area:** Replaces content in place with smooth transition
- **Theme:** Dark background, vibrant accent per card type (red for geo, Liverpool red/white for soccer, blue for tech)
- **No installation, no server, no API key** — open `index.html` directly in browser
- **Card counter** (optional): "Card 4 of 30" to show progress

---

## Visual Formats Used

| Format | Description |
|---|---|
| Drake meme | Two-row layout, ❌ top / ✅ bottom |
| Expanding brain | 4-tier escalating thoughts with brain emoji |
| Breaking News | Red banner, bold headline, BBC/CNN style |
| Sky Sports transfer card | Blue gradient, bold football transfer style |
| Fake LinkedIn post | White card, LinkedIn blue, reactions bar |
| Fake TikTok/Instagram | Dark card, comment section with likes |
| Fake @FLC / Twitter post | Tweet-style card with engagement metrics |
| The Anfield Wrap pod card | Podcast episode card style |
| Product spec sheet | Monospaced, terminal-style release notes |
| Fake Forbes card | Magazine pull-quote style |
| Fake Y Combinator response | Letter format, official-looking |
| Fake Zuckerberg post | Twitter/X card |
| App Store review | Star rating card |
| Quote card | Large pull-quote, minimal |
| This Is Fine (text) | Dog-in-fire-room described in text |
| Throwback photo card | Image + funny caption (requires photos) |

---

## Content — All 30 Cards

### 🌍 Theme 1: Geopolitics (10 cards)

**Card G1 — Drake meme**
- ❌ Reading Haaretz to understand the conflict
- ✅ A 60-second Instagram reel from an account with 40K followers

**Card G2 — Breaking News (BBC style)**
> BREAKING: 16-year-old Tel Aviv/New York analyst delivers definitive Middle East solution via WhatsApp voice note. Running time: 14 minutes. Sent to: עומר, אורי, יותם, ישי and 8 others. World leaders have been notified. The UN is "reviewing."

**Card G3 — Analyst bio card**
> **ALON** | Senior Geopolitical Analyst
> Age: 16 | Experience: 6 years (started at 10)
> Credentials: 2 years US residency, Israeli directness, 4,000 hours of internet
> Specialty: Being right before it's obvious
> Fee: Free. Whether you asked or not.

**Card G4 — Expanding brain**
- 🧠 Reading the news
- 🧠🧠 Having strong opinions about the news
- 🧠🧠🧠 Explaining to adults why they're wrong
- 🌌 Getting genuinely annoyed they're *still* not getting it

**Card G5 — Fake Israeli TikTok comment section**
> **@alonthinks** · just dropped the most important geopolitical take of 2026
> 📍 Tel Aviv 🇮🇱🇺🇸 · 847K views
> 💬 "שכויח אחיי 🔥" — 12.4K likes
> 💬 "לא מכבד לדעת הכל בגיל 16 😂" — 8.1K likes
> 💬 "בן 16 ומסביר לאו"ם מה לעשות 💀" — 6.2K likes

**Card G6 — Fake UN observer bio**
> UNITED NATIONS — YOUTH OBSERVER
> Alon, 16, Israel / USA
> *"Has submitted 14 unsolicited position papers since age 13. Irritatingly, 11 were correct. The Assembly is concerned."*

**Card G7 — Fake Trump quote card**
> *"Alon is sixteen — sixteen! — and he already understands geopolitics better than most senators. Very smart. Some people are saying the smartest sixteen-year-old, maybe ever. I would know."*
> — Donald J. Trump, completely unprompted

**Card G8 — This Is Fine (text meme)**
> 🐶🔥 Alon. Age 16. Completely calm.
> [Room labeled: "UN hypocrisy" · "Big Tech power grabs" · "VAR decisions" · "Man City's 115 charges"]
> שכויח.

**Card G9 — Fake WhatsApp voice note card**
> 🎙️ Voice note — 14:32
> Sent to: **The boys** (עומר, אורי, יותם, ישי, טל, נווה, אסף + 3 others)
> Alon: full geopolitical breakdown of why everyone is wrong
> 👂 Listened to by: 3 of 10
> אורן: *still hasn't listened*

**Card G10 — Breaking News: Big Tech / Trump**
> BREAKING: Meta, X, and Google have all quietly dismantled their DEI departments this year.
> Alon has been predicting this since age 14.
> He has not said "I told you so."
> He has implied it. Every single day.
> *(This is the only DEI reference in Theme 1.)*

---

### ⚽ Theme 2: Liverpool / Soccer (10 cards)

**Card S1 — Sky Sports Transfer Breaking News**
> 🚨 SKY SPORTS EXCLUSIVE
> LIVERPOOL FC confirm ALON, 16, as Head of Tactical Analysis
> Slot: *"He's been doing the job from his sofa for years. We made it official."*
> Contract: Until 2040, or until he's wrong once — whichever comes first.

**Card S2 — Drake meme**
- ❌ Man City — 6 Premier League titles, 115 financial fair play charges, and Pep's coat collection
- ✅ Liverpool — Istanbul 2005. Enough said.

**Card S3 — Sky Sports stats card**
> ⚽ ALON — CAREER STATS (to age 16)
> Matches watched: 312 · Correct predictions: 68%
> Wrong predictions: 32% — *all officially blamed on the referee*
> Times Man City benefitted from a suspicious call: *"All of them. Every single one."*
> Times accepted a VAR decision against Liverpool: **0**

**Card S4 — The Anfield Wrap pod card**
> **THE ANFIELD WRAP** — Ep. 1,016
> *"Is Alon Ready to Stop Explaining Football to People Who Were Watching Before He Was Born?"*
> Special guest: אורן (Oren) — his brother, who supports Man City just to wind him up
> Panel verdict: No. Probably never.
> ★★★★★ *"He's not wrong though."* — @FLC

**Card S5 — This Means More parody**
> **THIS MEANS MORE.**
> Alon turns 16 today. 16 years of Liverpool. 16 years of post-match analysis nobody asked for. 16 years of loathing Manchester City with a purity that honestly borders on spiritual.
> You'll Never Walk Alone.
> *(Unless you support City. In which case — לא מכבד.)*

**Card S6 — Fake Guardian match report**
> **The Guardian — Football**
> Liverpool 4–1 Manchester City
> *"In scenes described as 'inevitable' by Alon, 16, who had predicted this exact scoreline, Liverpool ran out comfortable winners. Post-match, Alon was reportedly 'calm' and 'not smug at all,' according to absolutely no one."*

**Card S7 — Expanding brain**
- 🧠 Watch a Liverpool game
- 🧠🧠 Analyse the game out loud to whoever is nearby
- 🧠🧠🧠 Message Arne Slot tactical suggestions via social media
- 🌌 Conclude the root cause of all problems is Man City existing

**Card S8 — Liverpool.com official style**
> **LIVERPOOL FC — OFFICIAL** 🔴
> Happy 16th Birthday, Alon.
> One of the most committed Reds we know.
> Has never once — not once — extended even basic courtesy to Pep Guardiola.
> We respect that deeply.
> **YNWA.**

**Card S9 — Fake @FLC post**
> **@FLC** · 47s
> Shoutout to Alon who turns 16 today 🔴
> Been watching Liverpool longer than some of our academy players have been training.
> Still hasn't forgiven the ref from *that* game. You know the one.
> cc: עומר, יותם — you know he's right
> שכויח אח. YNWA. 🔴
> ❤️ 6.2K

**Card S10 — Quote card**
> *"Man City haven't actually won anything. They bought it. There's a difference."*
> — Alon, 16
> *(To everyone. Always. Without being asked.)*

---

### 💻 Theme 3: Business / Tech (10 cards)

**Card T1 — Fake LinkedIn post**
> 🔵 **Alon** · Founder @ Being 16 | ex-Age 15
> Thrilled to announce I'm moving to v16.
> Key reflections from the past year:
> → Big Tech and the White House are now the same meeting. I called it.
> → Liverpool should have signed that striker in January.
> → אורן still doesn't understand the offside rule.
>
> Open to: rigorous debate, disruptive ideas, gym
> ❤️ 3.1K · 💬 יותם: "שכויח אח 🔥" · אסף: "לא מכבד שלא הזמנת אותי"

**Card T2 — Drake meme**
- ❌ Spending years building credentials before having opinions on Big Tech
- ✅ Being 16, Israeli, and already knowing exactly what's wrong with Silicon Valley

**Card T3 — Fake Forbes 30 Under 30**
> **FORBES — 30 UNDER 30, 2026**
> *Technology & Business*
> **ALON, 16** — Tel Aviv / New York
> *"Has identified 9 trillion-dollar market opportunities. Built: 0. Thinking about it: constantly."*
> Mentor quote: *"He explained our own company's strategy back to us better than we could. Unnerving."*
> Runner-up: אלנתן, 16 — *"strong application, lost on tiebreaker"*

**Card T4 — Expanding brain**
- 🧠 Using AI to finish homework
- 🧠🧠 Using AI to win arguments with your parents
- 🧠🧠🧠 Using AI to brief yourself on Big Tech's relationship with the Trump administration
- 🌌 Becoming the AI

**Card T5 — Y Combinator response card**
> **YCombinator** — Re: Alon, Age 16
> Status: **DEFERRED** *(age grounds only)*
> Partner notes: *"Too confident. Too specific. Too correct about the distribution layer problem. Predicted Big Tech's political pivot two years before it happened. We didn't listen. We're listening now."*
> — Garry Tan, YC President
> Also reviewed: אסף's competing application — *"promising, but he's not Alon"*
> **Reapply: 2028. Or sooner if you figure out the age thing.**

**Card T6 — Fake Zuckerberg post**
> **Mark Zuckerberg @finkmaster**
> A 16-year-old just explained Big Tech's relationship with the Trump administration better than my entire policy team.
> His name is Alon.
> I've sent him a connection request.
> He has not accepted.
> ❤️ 82K · 💬 14K

**Card T7 — Product spec sheet (Alon v16.0)**
> **ALON™ — v16.0 RELEASE NOTES**
> ─────────────────────────────
> Build: Israeli / American hybrid
> Core processor: Infinite hot takes
> Storage: Full. Mostly geopolitics.
> Languages: Hebrew, English, Fluent Sarcasm
> Gym mode: ✅ Active
> Liverpool alert system: ✅ Real-time
> Big Tech radar: ✅ Always on
> Known bugs: Still right when he shouldn't be
> Patch notes v16: +1 year, same energy
> ─────────────────────────────
> 🎂 Happy 16th, Alon.

**Card T8 — Fake App Store review**
> ★★★★★ **Being 16** — Verified Review
> *"Massive upgrade from v15. The geopolitical analysis and Big Tech tracking features alone are worth it. Gym mode is smooth. Main complaint: adults still don't listen to the correct opinions. Will update to v17 if the patch fixes that."*
> — Alon, Verified User, Feb 21 2026
> 👍 Helpful · אורן found this review: "not helpful"

**Card T9 — Fake angel investor pitch card**
> **PITCH DECK — Alon, 16**
> Problem: Adults think they understand politics, tech, and football. They don't.
> Solution: Alon.
> Market size: Everyone who is wrong (est. 7.9 billion)
> Traction: Consistently right since approximately 2019.
> Ask: Respect. And maybe a YC intro.
> Advisory board: עומר, אורי, ישי, טל (none of them agreed to this)
> שכויח.

**Card T10 — Two buttons meme**
> 😰 [Man sweating at two buttons]
> Button A: A world where Big Tech is regulated by people who understand it
> Button B: A world where it's regulated by people who definitely don't
>
> **Alon, 16, who has been telling both sides exactly what to do since 2022.**

---

## DEI Reference Policy
- **Max 2 references across all 30 cards**
- Current usage: Card G10 (subtle, in Big Tech context) + Card T7 removed, Card T1 removed
- Do not add more. The character is established without leaning on it.

---

## Build Checklist (for when ready)

- [ ] `public/index.html` — single page, one button, card display area
- [ ] `public/style.css` — dark base, per-theme card styles, all meme format styles
- [ ] `public/script.js` — random card picker (no repeats until all shown), card renderer
- [ ] `public/photos/` — folder for Alon's childhood photos (parent to populate)
- [ ] No server, no npm install, no API key — open `index.html` directly

### Photo cards (build when photos are provided)
- Placeholder cards T_PHOTO1, T_PHOTO2 ready to activate once filenames known
- Format: image + funny caption underneath
- Suggested caption style: *"Age [X]. Already had opinions."* or *"Tel Aviv → New York → World domination."*

---

## Sources Referenced in Cards

| Source | Used in |
|---|---|
| Sky Sports | S1 (transfer news), S3 (stats card) |
| The Anfield Wrap | S4 |
| @FLC on X | S4, S9 |
| Liverpool.com | S8 |
| The Guardian — Football | S6 |
| Forbes | T3 |
| YCombinator | T5 |
| Instagram/TikTok format | G5 |
| BBC Breaking News style | G2 |
