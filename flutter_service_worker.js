'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0da66e1393683cdfddcfa93114d5506e",
"assets/AssetManifest.bin.json": "2a8fba6acf43bb26d3e78d017fefab5d",
"assets/AssetManifest.json": "5cbefb4c6f8aa1ea11213973af4d0381",
"assets/assets/fonts/Cairo-Black.ttf": "d1956a3e1901ba6a5b927f5b6d35fe79",
"assets/assets/fonts/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "6469ba6c1b59b4f2b07e49f516ccf664",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "b95de133534ef622c7594cd0c94dfc25",
"assets/assets/fonts/Cairo-Light.ttf": "fa2b785b431fa365329cfbf3955f1b88",
"assets/assets/fonts/Cairo-Medium.ttf": "cbf0e8f4625a63746797ef8709167c44",
"assets/assets/fonts/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/fonts/Cairo-SemiBold.ttf": "d24823f3136e983e632a2d8e11c822b4",
"assets/assets/images/1.png": "7695279f85d6c5f5ba6615e004c054a0",
"assets/assets/images/10.png": "983340a09b6a54b44c5e3e33bf9c5e2b",
"assets/assets/images/11.png": "098311676ddddd7ce8588f3c569a897f",
"assets/assets/images/12.png": "533651ea8d046c884486dffbf8d31151",
"assets/assets/images/13.jpg": "9946510f2826971db1f877ec1450e5cd",
"assets/assets/images/14.jpg": "5e31e10301665a14f2bca42c059362ec",
"assets/assets/images/15.jpg": "a0f737fabee094fa8d951333b222bd80",
"assets/assets/images/16.jpg": "e0847fce9d3b2bfd0393ffcfb10b655b",
"assets/assets/images/17.jpg": "b5fdd10ab95cd56501a8ee5e3de83845",
"assets/assets/images/18.jpg": "c026af36172786cedee61499e888e374",
"assets/assets/images/19.jpg": "c69332a529ed8084ebf7d7642824d095",
"assets/assets/images/2.png": "4538f7924c48ed1a6b8c9baecd409799",
"assets/assets/images/20.jpg": "e29c34ed1546365bbc47e9709693e2a3",
"assets/assets/images/21.jpg": "d471b1e69221d352913bd4ed731c7003",
"assets/assets/images/22.jpg": "e16c412b2ea5a8d7374cee823eafcb30",
"assets/assets/images/23.jpg": "2716899881006bc3821aa7e778565ff2",
"assets/assets/images/24.jpg": "addeaa28ebc2af6028059326ab342ed2",
"assets/assets/images/3.png": "181a0ba0be99bedf1f3d6920d5624003",
"assets/assets/images/4.png": "de99c106f95018f880d916cecb10003b",
"assets/assets/images/5.png": "e1a14dbff17ca03e5e2d5c8f5948bfb5",
"assets/assets/images/6.png": "bb33ed6be257e2cb8e95ed7b38c65ffb",
"assets/assets/images/7.png": "dd035f87658f8b7460338102c4283ecb",
"assets/assets/images/8.png": "33a603052cc71de30c1a4c3d68412452",
"assets/assets/images/9.png": "dfe8f336191f5bff14082e0e94a3bc93",
"assets/FontManifest.json": "e113f41b9e769c1921dc33c791b1d7a6",
"assets/fonts/MaterialIcons-Regular.otf": "1b59c5a3ac6852f8921eeb054c6b6c5b",
"assets/NOTICES": "1d08f995edd349981fd5ed2b854460f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3959aac788d1892508a786d91eb56b52",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b94310d0871c42a69bc1c9aac57d3563",
"/": "b94310d0871c42a69bc1c9aac57d3563",
"main.dart.js": "e059c7c3456dcfb9d8129d56a9ea71d7",
"manifest.json": "5006a01da42fc5e85302d052570dca96",
"version.json": "de7667b2841bf0165255e350da6384b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
