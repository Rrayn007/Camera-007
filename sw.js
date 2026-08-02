// File: sw.js (Kích hoạt PWA Standalone trên iOS/Android)
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
