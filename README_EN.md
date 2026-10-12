# YiFeng Portfolio

[Website](https://yindfeng.github.io/) · [中文说明](README.md)

A personal Astro website with a portfolio, Markdown blog, about page, and a browser-based Snake game. The game supports WASD and touch controls, music, and local high scores. Supabase powers an optional online visitor counter; it is not required for static pages or the game.

## Development

Use Node.js 22.12+ (CI uses Node 22) and npm.

```sh
npm ci
cp .env.example .env
npm run dev
npm run build
npm run preview
```

On PowerShell use `Copy-Item .env.example .env`. Build runs Astro checks before generating `dist/`.

## Deployment

Push to main to trigger the GitHub Pages workflow. Set Pages source to GitHub Actions. Production URL: https://yindfeng.github.io/. Optional repository Actions variables: PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY. Only browser-safe publishable/anon keys may be used. Never commit real environment files or service-role keys.

Edit src/data for navigation and cards, src/content/blog for posts, and src/pages for standalone pages. See [maintenance guide](项目说明.md) for details.

## Credits

Based on [Ricocc/public-portfolio-site](https://github.com/ricocc/public-portfolio-site), under the retained MIT license. Existing Fariat game credit is retained. Articles, photographs, audio, and third-party assets may carry separate rights.
