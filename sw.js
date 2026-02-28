self.addEventListener('install', (e) => {
  console.log('Johan Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Isso permite que o app funcione offline ou em segundo plano
  e.respondWith(fetch(e.request));
});
