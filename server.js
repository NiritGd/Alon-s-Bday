import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ERROR: ANTHROPIC_API_KEY environment variable is not set.');
  process.exit(1);
}

const app = express();
const client = new Anthropic();

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());

const SYSTEM_PROMPT = `You are writing a funny, lovingly roast-y birthday message for Alon, a brilliant 16-year-old Israeli boy.
He is genuinely smart, English-oriented after spending 2 years in the US when he was younger, passionate and opinionated about geopolitics, obsessed with Premier League soccer, and fascinated by technology.
Your humor must be affectionate and playful — like a close friend or cool family member who knows him well and loves him.
Never be mean-spirited. Keep it SHORT and PUNCHY — 2 to 4 sentences maximum. Be original and genuinely surprising.
Write only the message. No preambles, no "Here's the message:", just the content itself.`;

const THEMES = {
  geopolitics: {
    emoji: '🌍',
    label: 'BREAKING NEWS — Geopolitics Edition',
    cssClass: 'geo-theme',
    prompt: `Write a breaking news-style birthday message for Alon's 16th birthday themed around geopolitics.
Format it exactly like a BBC Breaking News or CNN BREAKING alert — start with "🔴 BREAKING:" or "BREAKING NEWS:".
Lovingly roast him for being a 16-year-old who has confidently hot takes on every geopolitical conflict from the Middle East to European politics, and who genuinely believes he could solve them if only world leaders would consult him.
Weave in his Israeli background and time in the US as what makes him an "internationally certified expert."
2-3 punchy sentences only.`
  },
  soccer: {
    emoji: '⚽',
    label: 'SKY SPORTS — Premier League Edition',
    cssClass: 'soccer-theme',
    prompt: `Write a birthday message for Alon's 16th birthday formatted as a Sky Sports BREAKING transfer news alert.
Start with "🚨 TRANSFER BREAKING:" or "⚽ SKY SPORTS EXCLUSIVE:" energy.
He is turning 16 and is absolutely obsessed with the Premier League, with very passionate and sometimes completely unhinged opinions about clubs.
Roast his intense soccer opinions — the kind of kid who will genuinely argue with adults about football for hours and never back down.
2-3 punchy sentences only.`
  },
  tech: {
    emoji: '💻',
    label: 'PRODUCT LAUNCH — Tech Edition',
    cssClass: 'tech-theme',
    prompt: `Write a birthday message for Alon's 16th birthday formatted as a major tech product launch announcement for "Alon v16.0".
Start with something like "📢 ANNOUNCING: Alon v16.0" or "🚀 RELEASE NOTES: Alon 16.0.0".
Include 2-3 brief and funny "patch notes" or "changelog" entries about his personality — e.g. bugs, new features, known issues.
He is a tech-obsessed Israeli kid who thinks and speaks American but has strong Israeli energy. Roast him warmly.
2-4 punchy sentences total.`
  }
};

const THEME_KEYS = Object.keys(THEMES);

app.get('/api/generate', async (req, res) => {
  const requestedTheme = req.query.theme;
  const themeKey = THEME_KEYS.includes(requestedTheme)
    ? requestedTheme
    : THEME_KEYS[Math.floor(Math.random() * THEME_KEYS.length)];

  const theme = THEMES[themeKey];

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });

  const send = (data) => res.write(`data: ${JSON.stringify(data)}\n\n`);

  send({ type: 'theme', theme: themeKey, emoji: theme.emoji, label: theme.label, cssClass: theme.cssClass });

  try {
    const stream = client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 350,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: theme.prompt }]
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        send({ type: 'text', text: event.delta.text });
      }
    }

    send({ type: 'done' });
  } catch (err) {
    console.error('Claude API error:', err.message);
    send({ type: 'error', message: 'Something went wrong generating your message. Try again!' });
  }

  res.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🎂  Alon's Birthday Site → http://localhost:${PORT}\n`);
});
