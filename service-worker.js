self.addEventListener("install", (event) => {
    console.log("📦 Service Worker: Installing...");
  
    event.waitUntil(
      caches.open("app-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/192.png",
          "/512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("activate", (event) => {
    console.log("🔄 Service Worker: Activated");
  
    // Optionally clear old caches
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== "app-cache") {
              console.log("🗑 Removing old cache:", cache);
              return caches.delete(cache);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

  
