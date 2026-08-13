self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('raja-sifir-cilik-store').then((cache) => cache.addAll(['/']))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
