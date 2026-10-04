import type { APIRoute } from 'astro';
import QRCode from 'qrcode';

/**
 * QR code du guide d'accueil, généré au build à partir de l'URL du site (astro.config `site`).
 * Imprimable tel quel : /qr/guide.svg — ou via la planche /qr/.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('http://localhost:4321');
  const target = new URL('/guide/?utm_source=qr&utm_medium=room', base).toString();
  const svg = await QRCode.toString(target, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    color: { dark: '#2b2522', light: '#00000000' },
  });
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
  });
};
