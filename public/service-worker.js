const CACHE_NAME = 'blue-hospital-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/images/doctor-portada.jpg'
];


self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
      self.skipWaiting();
    }
  });
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
          console.log('Cache abierto');
          return cache.addAll(ASSETS);
        })
    );
  });
  
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response; //Cache First
          }
          //Solo intenta cargar recursos si la solicitud es válida
          if (event.request.url.startsWith('http')) {
            return fetch(event.request); //Network Fallback
          }
        })
    );
  });