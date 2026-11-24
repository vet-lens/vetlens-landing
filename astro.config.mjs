import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
const excludedSitemapPaths = new Set(['/descarga', '/changelog', '/roadmap']);
export default defineConfig({
  site: 'https://vetlens.es', output: 'static', trailingSlash: 'never', build: { format: 'file' },
  adapter: netlify({ devFeatures: { edgeFunctions: false } }), session: false,
  vite: { resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } },
  redirects: {
    // Activar redirecciones cuando la app se publique.
    // '/android': { destination: 'https://play.google.com/store/apps/details?id=TODO', status: 302 },
    // '/ios': { destination: 'https://apps.apple.com/app/idTODO', status: 302 },
  },
  integrations: [sitemap({ filter: (page) => { const pathname = new URL(page).pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/'; return !excludedSitemapPaths.has(pathname); } })],
});
