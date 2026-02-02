const CACHE_NAME = 'harpa-crista-v1';
const STATIC_CACHE_NAME = 'harpa-crista-static-v1';

// Recursos essenciais para cache
const STATIC_RESOURCES = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache aberto');
        return cache.addAll(STATIC_RESOURCES);
      })
      .then(() => {
        console.log('Service Worker: Recursos estáticos em cache');
        return self.skipWaiting();
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('Service Worker: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Ativado');
      return self.clients.claim();
    })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Estratégia: Cache First para recursos estáticos
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            console.log('Service Worker: Servindo do cache:', request.url);
            return cachedResponse;
          }

          // Se não estiver no cache, buscar da rede
          return fetch(request)
            .then((response) => {
              // Verificar se a resposta é válida
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clonar a resposta
              const responseToCache = response.clone();

              // Adicionar ao cache
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return response;
            })
            .catch(() => {
              // Se offline e não estiver no cache, retornar página offline
              if (request.destination === 'document') {
                return caches.match('/');
              }
            });
        })
    );
  }
});

// Mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificação de atualização
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});