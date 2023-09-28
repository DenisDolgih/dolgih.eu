// service-worker.js

const CACHE_NAME = 'my-vue-app-cache-v1';
const CACHE_FILES = [
  '/', // Cache the root URL
  '/index.html', // Cache your main HTML file
  '/manifest.json',
  /\.css$/,
  /\.js$/,
  /\.svg$/,
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            // Delete old caches if they exist
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache-first strategy: serve from cache if available, otherwise fetch from the network
      return response || fetch(event.request);
    })
  );
});
