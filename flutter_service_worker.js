'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6c4d1aa1d1d6e957b10a2eb5a228130f",
"assets/assets/fonts/Bungee-Regular.ttf": "a6e5229e1bf3b61efbf981b9b4e3a115",
"assets/assets/fonts/Helvetica-Regular.ttf": "2f1ce6eb4f4f735776cf117e0aa8662b",
"assets/assets/images/016-megaphone@1x.png": "ff09c3bd150ef8de528a2e4284869b41",
"assets/assets/images/017-brain@1x.png": "c9204e3150d910e8376594ac671f2e13",
"assets/assets/images/021-stopwatch@1x.png": "8a554c8415525686279af925d0815731",
"assets/assets/images/026-learning@1x.png": "d795e251ef060ef6166625ec7184d164",
"assets/assets/images/032-idea@1x.png": "7ee6f4a7236215eb443be881b10c3f37",
"assets/assets/images/047-growth@1x.png": "fab73ae8d6f7f3b9b219c09223a869a2",
"assets/assets/images/102664555-e8d1c380-4137-11eb-85c0-ef3511b2aa6b@1x.png": "1f84d2652250b6f4a8ee9b7aec468566",
"assets/assets/images/1476.gif": "3b1d5b712b7c1d1ed9a841c42f8c7df3",
"assets/assets/images/152843@1x.png": "6618868778088039549fedf66b48c852",
"assets/assets/images/97-docker-logo-logos-512@1x.png": "27b82521f2965540168f8b0864490268",
"assets/assets/images/android@1x.png": "28b1929d882ff6353a441f32e7b4e32a",
"assets/assets/images/apeslogo-@1x.png": "a98addf5bca6cac4470a7a2d04fd189d",
"assets/assets/images/apple-853-675472@1x.png": "90711ea57a556b3daecccdf2e50c1ad8",
"assets/assets/images/apple-touch-icon-114x114.png": "12c6cf93085f69fddf9748c9914362ed",
"assets/assets/images/apple-touch-icon-120x120.png": "853b06c833a5dc3ee08efb271e8c3385",
"assets/assets/images/apple-touch-icon-144x144.png": "dc9934d05d91d9aae919d4ac75bacdb2",
"assets/assets/images/apple-touch-icon-152x152.png": "edbdb1bdcf4e3358bba79a80c8ffa6d4",
"assets/assets/images/apple-touch-icon-180x180.png": "9acf51f837d7ea154468d924d7cee347",
"assets/assets/images/apple-touch-icon-57x57.png": "86ec2312c7647f646da80b7366467818",
"assets/assets/images/apple-touch-icon-72x72.png": "3ff21af7b1218f7c6accb95463e21e54",
"assets/assets/images/apple-touch-icon-76x76.png": "bade7fb4a061b6e5edcd06fab303dba2",
"assets/assets/images/apple-touch-icon.png": "86ec2312c7647f646da80b7366467818",
"assets/assets/images/favicon.ico": "0822071b5899a15d32ff92aaee20f22d",
"assets/assets/images/firebase-512@1x.png": "02d46f90d481b51dca9c82f58c4b0385",
"assets/assets/images/flutterLogo.png": "2160afacf4eca8e549c0b64e541ba3a7",
"assets/assets/images/google-play-2-555322@1x.png": "b02901f534b675498667dba69ff766d2",
"assets/assets/images/group-2-1@1x%2520-%2520Cropped.png": "1749683e2b315c33f2e978fbca6838ff",
"assets/assets/images/group-2-1@1x.png": "9662cadaa9ec7cfd1025229eba180f54",
"assets/assets/images/group-2-4@1x.png": "4a86020225b6839dd6b5b39490067320",
"assets/assets/images/group-2@1x%2520-%2520Cropped.png": "387a2379875cded1a2531017e7fc8852",
"assets/assets/images/group-2@1x.png": "a912ebb6437fd2906050887a1d2509ea",
"assets/assets/images/instagram@1x.png": "34d4ab3f390d098652981de5408d87ce",
"assets/assets/images/lightbulb@1x.png": "0df0fb5443f1f29f20d322389c99ba54",
"assets/assets/images/monkey-1@1x.png": "e3a062a12d97016f09d358c97777f717",
"assets/assets/images/monkey@1x.png": "5400850289b83b5576f12931ae14a610",
"assets/assets/images/paint@1x.png": "6196dbfa6f46239aaeb60565a42fc8f9",
"assets/assets/images/path-1-1@1x.png": "ddc2acb8b783a945d65588d48c0f655f",
"assets/assets/images/path-1-3@1x.png": "92d4729ce8a4884287586443235cfd5f",
"assets/assets/images/path-2-1@1x.png": "268ffe0f95197466faa7fdda3532350f",
"assets/assets/images/path-2@1x.png": "48b5cb2448ab72f3f165313d4b4e0c3f",
"assets/assets/images/path-3@1x.png": "cb0f2a96dc5d7e4c43354275da9b6e04",
"assets/assets/images/path-4@1x.png": "8d1447faa818b78058af43f33ff7257a",
"assets/assets/images/path-5@1x.png": "be394eafcec4b98b080ee1f104bbfc42",
"assets/assets/images/path-6@1x.png": "6c7d34564fe5d4804049242b8d5e97b0",
"assets/assets/images/path-7@1x.png": "827d7c4e9846b41b415707054f7314aa",
"assets/assets/images/path-8@1x.png": "3b46d01486c91ba7f52a79de61e9539d",
"assets/assets/images/react-1543566-1306069@1x.png": "6f16788a36d1b43ef2965201995e31d3",
"assets/assets/images/startup@1x.png": "8bff757b89be74439c3683b9bcd4f3d4",
"assets/assets/images/swift-15-761717@1x.png": "6ca0bd8abd857a06b22b68f08887df6c",
"assets/assets/images/untitled-1-1@1x.png": "6066998a14056e430c8feca53e35ef05",
"assets/assets/images/untitled-1-2@1x.png": "b71dbc6bdfaec25978686b61fbd6a48f",
"assets/assets/images/untitled-1@1x.png": "6845b57445c8dbadf7a70a4b47d7caad",
"assets/assets/images/untitled-2-1@1x.png": "2cd94e081626c87e8d4643e8550c4c7d",
"assets/assets/images/untitled-2@1x.png": "df4fc27c09abfb30af8d875df6cc2fef",
"assets/assets/images/virtual-reality@1x.png": "279270c3292b3cb80f3583daa61afe0b",
"assets/assets/images/xmlid-827-@1x.png": "8015509986735fbdcecd912e45d396a7",
"assets/assets/images/xmlid-835-@1x.png": "af07ea1d523c48c5c5116507ce3005af",
"assets/FontManifest.json": "5cdab47c31f6ae146883a73a7144565c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/Language/ar.json": "4ccd74b5e2c721125be9adffc8e143ae",
"assets/lib/Language/en.json": "25419acc4d28c76b9d6d172a29baa5a0",
"assets/NOTICES": "69951380742a63460261383ad3d821a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0de5ec0dd9c70a8a8790d4e3ae30f1a9",
"/": "0de5ec0dd9c70a8a8790d4e3ae30f1a9",
"main.dart.js": "05df68a2b3c2b7e373307f029486a82b",
"manifest.json": "b4e6f4f8414450117eeb4efc8d645311",
"version.json": "7ee0ab853bc9e2779bb9d66f6cc1086e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
