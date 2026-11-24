// Service worker mínimo: no guarda copias, siempre carga la versión más nueva.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<meta name="viewport" content="width=device-width"><body style="background:#121212;color:#ececea;font-family:sans-serif;padding:24px"><h2>Sin conexión</h2><p>Conéctate a internet y vuelve a abrir Evolution Power.</p></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
