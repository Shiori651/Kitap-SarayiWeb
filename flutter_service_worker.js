'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "6d9a75420de62f28b84e72b99f086b15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3385f71de77609c45847d4d031ac7f7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a7fd6f1b8b75fe13e29099483a58c88",
".git/logs/refs/heads/main": "76e5d24e0c78e20e1b2e3027ddec7092",
".git/logs/refs/remotes/origin/main": "8cee79b35a56b2894c5b791e01da732b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/5ae33615a59ad38e1068a073656aab0afef9e6": "7d22bdc40c2fd4509935ba741c6f29ee",
".git/objects/08/8265e30ee553a0bbea185df4e8d9c7ade34615": "5003afb8217c6b75de6b693aa0dacf3f",
".git/objects/0a/52dacb1ff491302bb435e19396a05e8405e6bd": "73255cf72ff76fc7a5b511a0767387a8",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/11/02a9b6fc4db0a774f423613374822246977b3e": "6c3a54f510e38fdd1c2bcfd49bb78b52",
".git/objects/13/2a2f8e42df7387fcfb8b41e193e0522b24d5a2": "c5eed4958e7d84e9c586695774091243",
".git/objects/13/fb1d18874572ec244a4b305b89a9d203b03446": "d9043b0b5c71ed7741732f8232711dba",
".git/objects/1c/31360140bf5bebead70faeb2989fcb66708a93": "0943120f0bec98fa5b1f972b0e7e521f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/25/6bbabfade91f45720c5b645eac1240dae5ea0e": "6852229401c7acf5328a85709baab5a7",
".git/objects/26/c6f3e6de1b47af5977eecdf2ca20c2c051f492": "62d24d172ab962ab0c9d5fc4123fb47f",
".git/objects/2a/a5555026cfdce1f4d52fd60692a54a500ec942": "7a5f454b84691f4e2db50b7dda3513a1",
".git/objects/2e/7e974cbf887f88293a37faf3788b4a5853c04f": "8fe7d2899f0f47d0ebd17e4c24f5a83f",
".git/objects/30/d99e8801b3830f9072650d811b686db81eb1d7": "3c57ec1e3967adbf9724e67be5493b1b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/3e5f6839903959baa1b77486a5f00af539afc3": "f27b8e9979d03156ebbb3b7d7f8686b2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/f4cb0433836b3db298604a754cf8e359b12b31": "09ff74ea333ac93102d92016eddfb195",
".git/objects/46/0420c881a4b6336d398fb0218f409d63b5818e": "e784cb2c39be176aa7247c2ef8ca5514",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/eb49f2e0e5c4b58d9aca400768dd063f4fd721": "bce745a8b20de6947d292da99b3fe4d9",
".git/objects/4a/3766b06d25f149d22511c92b07867ee74c6f34": "3ccd233ac9337a3e8287dcfda16e0c74",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/56/14768c18d214b6872b30902e78b45ab5078daa": "58742fb5c66149a1188888524b63add0",
".git/objects/57/2f3596c78d13304a2558cee459db2e817c3f15": "3fc4551e6eeada10ea344550d64361b1",
".git/objects/5d/e2c4ed3ec37aea45208b225e4691e839a367d1": "71a479def80090abd404a4962d9106ba",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/2193b23002a3d4f064000650b1c124544bc924": "68b0beea62c98c13c77bf0fa020e551a",
".git/objects/66/1b8802d1eb69bd4c389429d1f80bfbe0842564": "6c47b2eda093b4a5997f44c17b74ee95",
".git/objects/67/65309f89a8c79c9b13941d726336fa8495d934": "01588b9103095e11bb20f6fc7ee29431",
".git/objects/69/f511e4fa855a1250668930f5a669dde6e3be96": "2ae3f01e7201ef3e11502ad284a3786d",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6b/883fa20bda8675d1fa020fa5202e7917f9a9a9": "83932b456daba65025da624c0dc11545",
".git/objects/6c/4317865207529c6cc19738d5e3fb356fb4a620": "dee4e8afea528be5187ae5212c587c5f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/93f4c8d9ab841ca436b6bb01ad469be01fb021": "0a364d25cea5d24c2837138a8458c266",
".git/objects/72/cc1654f558d2469a413d9426c539032dbac456": "47bf023b6637d0ae6300758e1f851b4c",
".git/objects/74/e890ef1453c491254b5484109e1d99b0ccb353": "7db3ae5a027d48977c3d242e03159e52",
".git/objects/77/6abd20f5208200154103941e623a24b9a20812": "16dd3506592f21f50fa849d0c0cda01c",
".git/objects/7e/042ce4aa0f19f63c0feead186155aa0576ab1f": "ec5ea535668086216f17fd928b9ae460",
".git/objects/7f/cb765e3a0319c51e744680ae84f03101b4555b": "c1ad10a24bd1b7e99433bda85bebf093",
".git/objects/82/a5f0401ee82b1b7c56b0030bd4d78ecd9805d6": "2b5df707bedc0069f68b85960c5c3bf3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/b2d87c55ce7cac17a3c2811f0c4716b0ddecff": "02f4d72237fd6f4c756eb8085f9193cf",
".git/objects/96/2ace54c5f63f054b6c817b0029fca468dacba1": "1af1114c3a07f9be1fc3412411b2df07",
".git/objects/96/42b638c992a2ba32ee881bae9fd34db916cfca": "6ac50bea01704d3399a52dd45e0d8d43",
".git/objects/96/ba5208344fd8131b3ebef01fd4a5eaa8104ee1": "b7bca63879b15b0c284e31259f6fa091",
".git/objects/ac/32ca27f197309b43b9eccb69fdb0db53728055": "38150237dd6f5f1d46ac9b28ce986f77",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/5093fbae4dd8376510d5a1e33212008767741c": "dd28e9e53c717dd4976bce7bf4ade12d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5da7a52efa7605c89367f57cfda278336b16f8": "8f0c87d5f2854ba37aafc89b911efd69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ca0c3d6da188a3bde731c86438a20da78a06e8": "5a45997d45186c3f2d197493159b0828",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/ca2fd69aba071449bcb841a755045b12f640d4": "3855d4a5aa5b1050433e2d56fd8a4bd8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/283f09ab0d0f76f666e7f75f8febbf4106b8ba": "e707d78368304660bd42345a8c94d6bf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/810c79a3488b7ccb55ab4f4faa866f5ae978ce": "56b3fa85af53e295ce6ebcbec9a776fd",
".git/objects/d9/ca032ad360772dc720c7b20e598973767023b3": "71519ced5b298e2d48c1488095fa89c5",
".git/objects/e7/f74ae92b18dfd27a1bbf39c97accba953f382f": "0f1a3346a3aad16bd4824031feef4db2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "805f34972d369fea52703357fb813931",
".git/refs/remotes/origin/main": "805f34972d369fea52703357fb813931",
"assets/AssetManifest.bin": "3d26af30ed790351ffdc4595dfd920c9",
"assets/AssetManifest.json": "94dd029561496afc0930341055ef217b",
"assets/assets/appicon/app_icon.png": "a90004d1ef6fd69691b5d9be7d11dd34",
"assets/assets/fonts/Belanosima-SemiBold.ttf": "f56774b13535a9a8bb6b04b16cc02ded",
"assets/assets/fonts/CrimsonText-SemiBoldItalic.ttf": "6fa4572b778d9dea7b50acc4b2f0b558",
"assets/assets/fonts/Dosis-VariableFont_wght.ttf": "d89d7b6e9073e444a9859a9f7ea8bd17",
"assets/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf": "95393d9faf957406807a05d8fba3f4fc",
"assets/assets/Icons/ic_bookdelete.png": "ce1585747fc835dce0340a96953a9592",
"assets/assets/Icons/ic_importexcel.png": "672d9794f81664d996b39549de88f4ca",
"assets/assets/Icons/ic_popularbooks.png": "9de33952d0087d06fa9ccb7647aca0ff",
"assets/assets/Icons/ic_singleadd.png": "2ad229ec561a99b14d16df4656a154ef",
"assets/assets/Icons/ic_versionChecking.png": "c0caff01f26cff7f9d80d996aa479159",
"assets/assets/Logo/ic_bilimkurgu.jpg": "6e1f4ff450dc44fdcc76121d4de4d7a8",
"assets/assets/Logo/ic_bilimkurgu1.jpg": "d67dd5b3ded0576e7c1a4f1b45620a1a",
"assets/assets/Logo/ic_dunyaroman.jpg": "3cd3646709e78250a274113e848e7642",
"assets/assets/Logo/ic_fantastik.jpg": "98a035eb059d0381f2006893b54a4053",
"assets/assets/Logo/ic_korkugerilim.jpg": "b6904db95e678d06c1bd2ea3094b9ca3",
"assets/assets/Logo/ic_macera.jpg": "38b406857f92687ffaf4156a941ef5ba",
"assets/assets/Logo/ic_polisiye.jpg": "c553e18e6e94a28908229e9b0eb6349a",
"assets/assets/Logo/ic_romantik.jpg": "6b62adb994d74148326a1bdff6d81ae8",
"assets/assets/Logo/ic_turkklasikler.jpg": "3659b5d4064dd77c569686d45fdcb953",
"assets/assets/Logo/ic_turkroman.jpg": "4e08ecc17b1ce6168644cfc289e9bfce",
"assets/assets/Logo/selcuklogo.jpg": "313d45d8915eea14f0fe700cf582cbec",
"assets/FontManifest.json": "df86c6411d613d5b3917a37d88879a7f",
"assets/fonts/MaterialIcons-Regular.otf": "71511db082afa7352dcb940771dede89",
"assets/NOTICES": "1aee3c3844c6f2be42565ccc87b29ce5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/kartal/assets/placeholder.json": "fdbf3ef28e924d76fe7951860de81195",
"assets/packages/kartal/assets/placeholder_false.json": "29bd0e7ec0fa4d4a0f36d58ed0aa5cd4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "501d6a923849e269f692b5442203eef9",
"/": "501d6a923849e269f692b5442203eef9",
"main.dart.js": "ee5444c5c80528eae9aadc4ca3bbce64",
"manifest.json": "4d6b48619b94253cb6adb342ab0e9194",
"version.json": "76d3bcc961a621fc03304dde41a87ed8"};
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
