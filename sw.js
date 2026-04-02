const CACHE_NAME = 'anime-cristao-v4';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './story_data.js',
  './manifest.json',
  './assets/audio/bg_music.mp3',
  './assets/images/heaven_bg.png',
  './assets/images/lucifer_angel.png',
  './assets/images/lucifer_fallen.png',
  './assets/images/christ_character.png',
  './assets/images/war_heaven.png',
  './assets/images/god_throne.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
