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
  });// Instalación del Service Worker
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Cache abierto');
          return cache.addAll(ASSETS); // Precaching de los recursos
        })
    );
  });
  
  // Estrategia Cache-First con actualización en segundo plano (Stale-While-Revalidate)
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request) // Busca en la caché
        .then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            // Actualiza la caché con la nueva respuesta
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          });
  
          // Devuelve la respuesta de la caché mientras se actualiza en segundo plano
          return cachedResponse || fetchPromise;
        })
    );
  });
  
  // Eliminar caches antiguos al activar el Service Worker
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName); // Elimina caches antiguos
            }
          })
        );
      })
    );
  });