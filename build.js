const fs = require('fs');
let html = fs.readFileSync('index.template.html', 'utf8');

html = html.replace('__GEMINI_KEY__', process.env.GEMINI_KEY || '');
html = html.replace('__FB_API_KEY__', process.env.FB_API_KEY || '');
html = html.replace('__FB_DATABASE_URL__', process.env.FB_DATABASE_URL || '');
html = html.replace('__FB_PROJECT_ID__', process.env.FB_PROJECT_ID || '');
html = html.replace('__FB_APP_ID__', process.env.FB_APP_ID || '');
html = html.replace('__FB_MESSAGING_ID__', process.env.FB_MESSAGING_ID || '');

fs.writeFileSync('index.html', html);
console.log('✅ Built index.html with env vars injected');
