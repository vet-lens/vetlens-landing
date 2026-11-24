import vetlensIcon from '@/assets/icons/vetlens.svg?no-inline';
const manifest = { name: 'VET lens', short_name: 'VET lens', description: 'Información oficial sobre medicamentos veterinarios. App próximamente.', start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#008B8B', icons: [{ src: vetlensIcon, sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] };
export const GET = () => new Response(JSON.stringify(manifest), { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
