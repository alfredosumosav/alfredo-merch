const doCache=!1,CACHE_NAME="pwa-cache";self.addEventListener("activate",(e=>{const t=[CACHE_NAME];e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>t.includes(e)?e:(console.log(`Deleting cache: ${e}`),caches.delete(e))))))))})),self.addEventListener("install",(e=>{})),self.addEventListener("fetch",(e=>{}));