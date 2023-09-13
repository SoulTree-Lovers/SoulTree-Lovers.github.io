'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "49cd40d05324f3e12586088558b7fd3b",
"index.html": "23279b8a0f8e8e79e212b9e573c942c7",
"/": "23279b8a0f8e8e79e212b9e573c942c7",
"main.dart.js": "ccba28e3d8ea3348209c03bb54b30ba3",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dd0406704df93377351a1dea359a7357",
"assets/AssetManifest.json": "630cba15f93463b223fd35d125b5cfa0",
"assets/NOTICES": "23d5a89be3b00c27a77d15fa08dd0246",
"assets/FontManifest.json": "d88698bae0503ace33ac6292aebbda4b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ce4249dbc1b2ea81ac341d143955f3b0",
"assets/fonts/MaterialIcons-Regular.otf": "784e5e9f91fda8bbf4626b96ea65c99d",
"assets/assets/images/pink_post_it.png": "63b947a3ffd17249b6da103ddfbb35c0",
"assets/assets/images/blue_post_it.png": "4697fbb2b0f416142fd85edcd209fd95",
"assets/assets/images/login_logo.png": "1da91122da506a27609279a2496f68a8",
"assets/assets/images/info_images/hands_up_man.png": "ae07461b601c057d19a7868b01eb61a5",
"assets/assets/images/info_images/arrow_right.png": "e4dfddb0029769e32ef6cd2e2b986e56",
"assets/assets/images/info_images/phone_in_hand.png": "1e1dbed094cdaad74cf387d7de68057a",
"assets/assets/images/info_images/%25EC%259C%25A0%25EC%259D%2598%25EC%2582%25AC%25ED%2595%25AD.png": "3f8b9ab90906dfe5b4e72d2cc390aea0",
"assets/assets/images/info_images/ssu_festival.png": "feee3f0242d6295068257dd6ec5d965c",
"assets/assets/images/info_images/festival.png": "89a2ec428d8bcff00168363bafa1aef6",
"assets/assets/images/info_images/blush.png": "e089d2eb7721e752e7219cc85391b66f",
"assets/assets/images/info_images/%25EC%25BD%2594%25EC%259D%25B8%25EC%25A7%2580%25EA%25B8%2589.png": "274904506b9979a2d5dfda7fa3edf914",
"assets/assets/images/info_images/lovestruck.png": "0667f256ccd4ca2ede8fa8810facbb4b",
"assets/assets/images/info_images/smartphone_man.png": "8835494c30e1c5ac5cc0e319e71ac711",
"assets/assets/images/info_images/%25ED%258F%25AC%25EC%258A%25A4%25ED%258A%25B8%25EC%259E%2587.png": "8c5ce0e3e32e8aff734c8b90713c4bd9",
"assets/assets/images/info_images/%25EA%25B5%25AC%25EC%259E%2585%25ED%2595%259C%25ED%258F%25AC%25EC%258A%25A4%25ED%258A%25B8%25EC%259E%2587.png": "b5a43e11fbbc925cb329cf61152c0a1f",
"assets/assets/images/info_images/%25EA%25B5%25AC%25EB%25A7%25A4%25ED%2595%2598%25EA%25B8%25B0.png": "66b48d752c0cae767608dba2716cbe4d",
"assets/assets/images/info_images/%25EB%25A9%2594%25EC%259D%25B8.png": "da4fade9575abfb5a5eccc7f9a9ba63c",
"assets/assets/images/info_images/awake.png": "75a6a72235341f3ae79a83f022791d21",
"assets/assets/images/info_page_icon.png": "09f0f06c741ea8fe1490af929a1a85f0",
"assets/assets/images/is_sold.png": "7d2a340f9584ef0d22d82843bab481a0",
"assets/assets/images/pink_yellow.png": "6b3e95399f8052d0e61d16181758b2ae",
"assets/assets/images/home_page_icon.png": "d492f3189765fdd6c2d0b55cd6b37922",
"assets/assets/images/my_page_icon.png": "ccbcba630bccc2a0887d2ac5bfe7f78c",
"assets/assets/images/paper_background.png": "fcba71843a9950c985d6933eaf1758b8",
"assets/assets/images/tape.png": "189867a24e98dad950962c74702c941b",
"assets/assets/images/mypage_images/my_post_it_icon.png": "6bbf24788a10983af98e3e62f8fb174a",
"assets/assets/images/mypage_images/coin_icon.png": "afdfa4aeba50a4f8a392741d2952b3a9",
"assets/assets/images/mypage_images/logout.png": "1a3e0a7cd9a0d0da3290d93771a18854",
"assets/assets/images/mypage_images/modify.png": "520206cb986977d5445eb0c2c884ecb1",
"assets/assets/images/mypage_images/mypage_profile.png": "c0dc3e3a50ea6c95aa88266fb0ed217b",
"assets/assets/images/mypage_images/registered.png": "7f20aa3379fa78fe2cf6d3fd4b01771f",
"assets/assets/images/mypage_images/purchased.png": "adf23f91a82aaaae3e2f90d9af95102c",
"assets/assets/images/rectangle.png": "c3d4b8f496ceb7253ecb2e6fa0f270f3",
"assets/assets/images/document_duplicate.png": "2b2d8fa7e98d091364ceabed2f4b1216",
"assets/assets/images/yellow_post_it.png": "312a990495bf0675483dc3b4f8b20375",
"assets/assets/images/heart.png": "b2d0c1e9ce4a8de23c41bebcd31e5f03",
"assets/assets/images/currency_dollar.png": "817789fb4ebc9d1dece9838fa65f1b62",
"assets/assets/images/post_it_with_tape/pink_tape.png": "d61fe5bd30303dc5d2a4904c6cdfe196",
"assets/assets/images/post_it_with_tape/yellow_tape.png": "b483ef70dee7e6c323f163da5ead419e",
"assets/assets/images/splash_page_images/paper_background.png": "ea009158b0e62e986b0178d7ae498d47",
"assets/assets/images/splash_page_images/ssu_meet.png": "255b180547efca6301797cc43a646760",
"assets/assets/images/splash_page_images/heart.png": "367e9fa0db73b02f374238774677cc6e",
"assets/assets/images/vertical_line.png": "bdd47c24e50800dea72cfc3442ccbe07",
"assets/assets/images/chevron_down.png": "e9a4b66abe7472fb42563d55f89c8038",
"assets/assets/images/tape2.png": "4febe4f0c5ba542179c7708bb31efa6e",
"assets/assets/images/images2/paper.png": "f0b571db41b76387bfa0f396f52b2882",
"assets/assets/images/images2/short_tape.png": "08740b1e468c288aa6212857c2796337",
"assets/assets/images/images2/submit2.png": "907cfe632fe85971d3f26d5e1af126e6",
"assets/assets/images/images2/box1.png": "8fabf8fc134e37d17d3b1099b31347cb",
"assets/assets/images/images2/yellowpostit.png": "7cb686cf2b8e6fdb09c30d9b3184bbf2",
"assets/assets/images/images2/sparkle.png": "7d2320b49b4c63855a7cff67fa30533d",
"assets/assets/images/images2/home.png": "e686a57299f3a0af0af88441769d416c",
"assets/assets/images/images2/appbar.png": "a5918c5db6903f86964e259ab0e460e1",
"assets/assets/images/images2/tape10.png": "189867a24e98dad950962c74702c941b",
"assets/assets/images/images2/whiteheart2.png": "b827ae7981c6fe445c6d3211fa8d853c",
"assets/assets/images/images2/long_tape.png": "ef86aef9e70a7852fe64c01414e8126f",
"assets/assets/images/images2/submit3x.png": "058618c910d72e95b854fc786c76a553",
"assets/assets/images/images2/document-text.png": "b71046eb4a60ad42aab14acae34d28ee",
"assets/assets/images/images2/Rectangle10.png": "187f724f99bb7383245b957f3289083b",
"assets/assets/images/images2/yellowpostit2.png": "aa048f956f16fe9d913ce7669fab7c47",
"assets/assets/images/tape1.png": "4488de0e0d958f4d7c5722aae55aadbc",
"assets/assets/images/top_button.png": "f14c5b5047b8050a9de1f84788071065",
"assets/assets/images/ssu_meet_logo.png": "c2588c2446c94dc4493a241080cd95db",
"assets/assets/images/green_post_it.png": "a783beec41da6ff668f753e0bf560a86",
"assets/assets/json/post_it_json.json": "11c9ac950d14e42aee312dcec1ab17f9",
"assets/assets/json/old_profile.json": "aaeed23a5818bd3d06b5595aee7cfc84",
"assets/assets/fonts/Nanum_Ogbice.ttf": "997db65be30e295f82070f02bbc84924",
"assets/assets/fonts/Ongeul.ttf": "2d09bfd4c187b8682270b9038b6d95de",
"assets/assets/fonts/Nanum_5.ttf": "fd17e0315a4f2abac9ffdf3715bd7d6d",
"assets/assets/fonts/Nanum_4.ttf": "93071092ae8f863a8b90a547c76dd48b",
"assets/assets/fonts/Nanum_6.ttf": "4237e5ecd8445ac1f43446ded1ce0995",
"assets/assets/fonts/Nanum_7.ttf": "ad3e97a68cf124ba7519c416c4349319",
"assets/assets/fonts/NanumSquare/NanumSquare_acR.ttf": "0e1f2365ab61e1ea88d2fbdef3952fdb",
"assets/assets/fonts/NanumSquare/NanumSquareRoundB.ttf": "ecc61bfabe0637e8367a734e718a4f8e",
"assets/assets/fonts/NanumSquare/NanumSquare_acB.ttf": "a70857e6e4e14337824725c15f2a5e34",
"assets/assets/fonts/NanumSquare/NanumSquareRoundR.ttf": "4ba97a2a508f59611d45c41e7414ba66",
"assets/assets/fonts/Nanum_3.ttf": "0f686b37a85f2d7f1e8f77e668443c3d",
"assets/assets/fonts/Nanum_2.ttf": "37e9b5b6ad959dfe2622c06e284aead6",
"assets/assets/fonts/Nanum_1.ttf": "f0595a13fb42f3c22a04d19ab9d1cedb",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "a52e51594bca8bf549112366548bb975",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "5b369b91846c2a633a110e2b3962dcfd",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "d0e395bff394f10b3e20c7b87abb444c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
