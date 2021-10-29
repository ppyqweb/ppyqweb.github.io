'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "303353b944b2d97c11efd18d9b856d86",
"index.html": "e12408a798ac9a0501c4066e477a6ced",
"/": "e12408a798ac9a0501c4066e477a6ced",
"main.dart.js": "8f18fa2ad08093656c85effb8b068931",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "22accd6d64fead75ed656287bba64b91",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "34b7ebf006167850f6117777209a381e",
"assets/AssetManifest.json": "43436b926dba0e7a5ff42b1ff0b5f080",
"assets/NOTICES": "394025e8adb5e873a1c09383219b0fb8",
"assets/FontManifest.json": "91a8d354b558323850a3048e219b3632",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/w_popup_menu/images/right_gray.png": "daf3401c91e11d83bb6141649f7decda",
"assets/packages/w_popup_menu/images/left_gray.png": "f830c2ced16bac0396789cb6e2c16eed",
"assets/packages/w_popup_menu/images/left_white.png": "147b5d5205468a6c41f79a1bc59fb152",
"assets/packages/w_popup_menu/images/right_white.png": "e1a7d1af4460308dc17e29623db66ec0",
"assets/packages/heytea_kit/images/keting.svg": "3971f50ed4cfd387516accb4394c6a44",
"assets/packages/heytea_kit/images/yanzhengma.svg": "00af74ba6a13bed6684e1c49a91c1674",
"assets/packages/heytea_kit/images/shebeitianjia.svg": "417c2fbcfd755d6baaec389c3a01a0d0",
"assets/packages/heytea_kit/images/xianshi.svg": "8c7ecde0988aa8e62720a20b92e15fc4",
"assets/packages/heytea_kit/images/wdl-sc.svg": "4cc6effa7ae438a01c70dd68073ed42f",
"assets/packages/heytea_kit/images/canting.svg": "bf9f423e3da3562a8748f1fcd04a1b95",
"assets/packages/heytea_kit/images/h-fanhui.svg": "a8ab23fb63ceb03f7352e58ca1650cdd",
"assets/packages/heytea_kit/images/wd-shezhi.svg": "2ff8d40bf82956666623ae55a867d432",
"assets/packages/heytea_kit/images/dizhibianji.svg": "3517cea6487e6d8c98be2fe3c4a10465",
"assets/packages/heytea_kit/images/gengduo.svg": "26269d70ec0ca4cdd744c9de940d1a72",
"assets/packages/heytea_kit/images/cp-guan2.svg": "94b4f9790c24e524b579da02fb833672",
"assets/packages/heytea_kit/images/dl-sc.svg": "5fdde65128be5ba11ce8dffbfe6ceecc",
"assets/packages/heytea_kit/images/shouji.svg": "747f56db9272831ab690b4b409b5c979",
"assets/packages/heytea_kit/images/quxiao.svg": "afc75b85634d6b1c5621e1ed0746101e",
"assets/packages/heytea_kit/images/cp-kai2.svg": "04345650bab0f3a22659cad4177a6418",
"assets/packages/heytea_kit/images/x-quxiao.svg": "4aaa915060dd68684f3c17d1801b1686",
"assets/packages/heytea_kit/images/shufang.svg": "0055b061136695c785f3dc857b1493cf",
"assets/packages/heytea_kit/images/tishi.svg": "53e4013fdfba26019dd727b9a89d996f",
"assets/packages/heytea_kit/images/weishengjian.svg": "f2c8d14bfe6a3f7229507e3e1f013559",
"assets/packages/heytea_kit/images/woshi.svg": "cb3353c265ecaf721982b25ac8f9446e",
"assets/packages/heytea_kit/images/tupiantianjia.svg": "c4081d95a0881d3ea7b45bf96eabcd14",
"assets/packages/heytea_kit/images/chongxi.svg": "a09078857f5386dcef7a2118d938bb29",
"assets/packages/heytea_kit/images/queding.svg": "1b3f44017662bdec9aea48268a05a0a0",
"assets/packages/heytea_kit/images/baoxiu.svg": "80f5b33af494e5972da036940248efa4",
"assets/packages/heytea_kit/images/status_warning.png": "167c5c6a54819c71da98bbb20e50bf14",
"assets/packages/heytea_kit/images/b-tianjia.svg": "3fd9c230030d450544f0719bc2531777",
"assets/packages/heytea_kit/images/scgouxuan.svg": "a75544a28a056456052d02d2c8bd7cfe",
"assets/packages/heytea_kit/images/wancheng.svg": "153803966b76df105080d78da5cc1bc5",
"assets/packages/heytea_kit/images/hh-jinru.svg": "920e7fe87d296120f23188d75d7c1fd9",
"assets/packages/heytea_kit/images/shanchu.svg": "00c3af8765e57c146662ce9f00a7b53d",
"assets/packages/heytea_kit/images/yangtai.svg": "eb197d607d94ccb475023d5cfe94c4db",
"assets/packages/heytea_kit/images/cp-kai.svg": "16312edaab928bce000b88e2ad14f8dd",
"assets/packages/heytea_kit/images/weigouxuan.svg": "33f333471db3877a36bc8fd7b2237103",
"assets/packages/heytea_kit/images/b-fanhui.svg": "00e06aee8c5c12006aeacd3244c0a44d",
"assets/packages/heytea_kit/images/zhanshibanben.svg": "ca7544b747b639550b24ad21eab5c92c",
"assets/packages/heytea_kit/images/wd-xiaoxizx.svg": "8782040a7414ee55830fb6f84ba9adec",
"assets/packages/heytea_kit/images/WiFi.svg": "1a1d079ddd4c89a610d5d993683c6d5d",
"assets/packages/heytea_kit/images/dl-wode.svg": "553a6fbe9793d9131f7d224af6d89a19",
"assets/packages/heytea_kit/images/wd-jiatinggl.svg": "1b22a543bcee8dc65536699674f52065",
"assets/packages/heytea_kit/images/yierfang.svg": "aa4a79909ce53538ff6c3f658688085e",
"assets/packages/heytea_kit/images/zidingyi.svg": "edf4d0720385c840b0123269f049b584",
"assets/packages/heytea_kit/images/gengxinzhong.svg": "24c2321607fe0770ffba8937b7cb8d7d",
"assets/packages/heytea_kit/images/yingc.svg": "5fdcf9b33d8c91451f963bc11d73d537",
"assets/packages/heytea_kit/images/saomatj.svg": "363b09c145101cbf865df6e354aa0326",
"assets/packages/heytea_kit/images/tupianshanchu.svg": "22ba5a72f994d7dd670b126fccdfcde0",
"assets/packages/heytea_kit/images/check_box.png": "018185266ca3805cbddbed99172d4008",
"assets/packages/heytea_kit/images/wd-czshouce.svg": "ee20c295c8f3734a841d56f3a317e78b",
"assets/packages/heytea_kit/images/chufang.svg": "12436a306c8e5f9c001f2473917c2deb",
"assets/packages/heytea_kit/images/jiazaiwanc.svg": "20cee1cb10059cd0c7d5337e04000817",
"assets/packages/heytea_kit/images/gouxuan.svg": "07c49ea3b1e135a7b30b3e5f15335744",
"assets/packages/heytea_kit/images/zhengzaigengx.svg": "61b834f5f4ec9a2bcc3efffab65ddc90",
"assets/packages/heytea_kit/images/tianjia.svg": "9cfc1a4266b3a525b60daf6fab0215c3",
"assets/packages/heytea_kit/images/h-jinru.svg": "f84af6864abde3c3603526bfd862b318",
"assets/packages/heytea_kit/images/wdl-wd.svg": "ce321084b7e8a5aa02d85e39af933914",
"assets/packages/heytea_kit/images/status_pending.png": "277660dc7b8f51dd0b5de81265905066",
"assets/packages/heytea_kit/images/wd-bangzhu.svg": "7e3f7b171bacd42e9027f58d9cff6c5e",
"assets/packages/heytea_kit/images/jiancejiazai.svg": "91a4c8282365c022bdab4f263c3c987a",
"assets/packages/heytea_kit/images/cp-guan.svg": "0a2540a1afff27f1573f3bc0e6c70ef0",
"assets/packages/heytea_kit/images/meitifang.svg": "51c009c917eaff9a534ca5a7efee59df",
"assets/packages/heytea_kit/images/fanhuijt.svg": "46be740b9bd1864184af7e9cb3d7f374",
"assets/packages/heytea_kit/images/check_box_checked.png": "d417671b24d16d08735012297085b9a0",
"assets/packages/heytea_kit/images/morentouxiang.svg": "467125925cc41a0ab482a3a0b2a5a6d5",
"assets/packages/heytea_kit/images/dl-sy.svg": "4260a6deb402c80e47b58dc4afa040b1",
"assets/packages/heytea_kit/images/status_completed.png": "9a934668af3e3ca85d4d8d1e48f9735a",
"assets/packages/heytea_kit/images/xiangxiajt.svg": "8bd7691cb1e8f587e1fbdb327ba5ed1a",
"assets/packages/heytea_kit/images/qh-guan.svg": "51a51f3d1fdeb78e6f8896e9b24faa35",
"assets/packages/heytea_kit/images/xiangshangjt.svg": "f12b3ecf5a5d12ce3eb58d81fee14dde",
"assets/packages/heytea_kit/images/ertongfang.svg": "40f201913d1b3c89bebcac8228b20280",
"assets/packages/heytea_kit/images/wdl-sy.svg": "29737636c5d5b5463d20fac97e493d33",
"assets/packages/heytea_kit/images/jiazaiz.svg": "c1f1b3075db75ba00b5a387b2b09d79d",
"assets/packages/heytea_kit/images/yushi.svg": "9af9422536a7eb3ad9bc3333556ccdd2",
"assets/packages/heytea_kit/images/yulefang.svg": "95725028b9465079930bc46111999895",
"assets/packages/heytea_kit/images/qh-kai.svg": "f54a27157a76832d9d8a23fefa2fb80d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/goods_detail/details_share.png": "54eb3ffc78ceb9faca9a439f5ab58b21",
"assets/assets/images/goods_detail/details_back2.png": "a623b965f9b1c190f620636d133f62b9",
"assets/assets/images/goods_detail/details_back.png": "dbdfeb657aeb87b9bb8115ae6cca3bf5",
"assets/assets/images/goods_detail/details_more.png": "bbb3407799d24437c2b8476edc4992cb",
"assets/assets/images/goods_detail/details_more2.png": "8bfafbafb1f401517085b59509ab441a",
"assets/assets/images/goods_detail/details_share2.png": "1fda7c64476a6074de320cb96f00a7df",
"assets/assets/images/icon_sale_logistics_up.png": "bd0e142591c01f8959dae86c02be34d4",
"assets/assets/images/pay_alipay.png": "49ed03a6411cb133bf3bb2d708c3dc5e",
"assets/assets/images/me_order_evaluate.png": "6ac4b493c3849d75423668c4c23fed58",
"assets/assets/images/goods_sort/sort_array.png": "d4b5ef8fd4dbad2e21b17f9a48e25b31",
"assets/assets/images/goods_sort/filter_price_normal.png": "f3840a6b1e9891fd0db70ce5f94cd8f0",
"assets/assets/images/goods_sort/filter_price_up.png": "371ee1c589835434baf0b8c4ca32566f",
"assets/assets/images/goods_sort/filter_price_dowm.png": "f2218315474a98ba27d6a086c3c4921d",
"assets/assets/images/goods_sort/sort_array_1.png": "6c4b51e71401f34d2c04899458851f36",
"assets/assets/images/icon_sale_refund_photo.png": "c720263a6efacb03c85ceea321e7ed24",
"assets/assets/images/me_order_ship.png": "1f275f153b6a15842018b2295c890283",
"assets/assets/images/order_details_receipt_map.png": "63c27dac9aa71e7fb07bd6be038be017",
"assets/assets/images/shipping_address/red_tick.png": "447950a172e41fa36eb01ee1b0062cd6",
"assets/assets/images/shipping_address/location.png": "26347ab36a0b27cbaeecca4b1b728a6d",
"assets/assets/images/user_avatar.png": "479a0dfd35a62314d60a3128beb01566",
"assets/assets/images/home_more_message.png": "ef88bceeef36a5a3c6e53f916fc5a640",
"assets/assets/images/home_more_share.png": "8262218529bbd2be1cef6d46c82781fd",
"assets/assets/images/me_order_service.png": "94c4deff586bde04531ee642b9c6b789",
"assets/assets/images/oder_veins.png": "498d1e7e6f302c6a56e4e5fea9cd4b67",
"assets/assets/images/seckill_image.png": "129630c08d2aa0a6932f61db28a67476",
"assets/assets/images/pay_dove_diamond.png": "1add86568582de49c1d58dffa6190196",
"assets/assets/images/me_order_recei.png": "9e208b32dfb5e5a9fac6de8ae73476fe",
"assets/assets/images/icon_sale_logistics.png": "c94504401da8559085dec9dfe983f9be",
"assets/assets/images/order_details_close.png": "804fa4028ef60a5ac963471bef8e8222",
"assets/assets/images/coupon/coupon_down.png": "42968a2bcbaacb32d2919c4e67d95ac4",
"assets/assets/images/coupon/coupon_up.png": "eb2e043cc11266c60b00a08438431c58",
"assets/assets/images/coupon/coupon_expired.png": "4c9e80438309750b656541c4cfaa5de0",
"assets/assets/images/coupon/coupon_used.png": "3fdcdd22c32a9fedf2d6bd9c5d661e69",
"assets/assets/images/coupon/coupon_orange.png": "b72c42ab6b5d5e871891557ea53624bb",
"assets/assets/images/coupon/coupon_gray.png": "150025de866e6b2ee5b238889c3a4c07",
"assets/assets/images/coupon/coupon_red.png": "2ac4d814851d9046483e775d132fa3a0",
"assets/assets/images/order_details_receipt_expre.png": "0f717dd02011ac7013f2b01416c14a34",
"assets/assets/images/icon_sale_after_refund_goods.png": "e440c0396eac11f301e5f49fc9c3f928",
"assets/assets/images/icon_address_edit.png": "46f6968b11c7ec07ca5eeaf2776985fb",
"assets/assets/images/icon_sale_after_refund_money.png": "bfdf99f7ed791421f0936c917e4d0aee",
"assets/assets/images/home_more_service.png": "119d0829804869f5e29a1e4ac4c1a90b",
"assets/assets/images/ad_1.png": "039b0d60a9558b8adba00e9ac82b0740",
"assets/assets/images/order_details_receipt.png": "68c4b7b4478849409f59a5f7701a3b16",
"assets/assets/images/common/cart_select.png": "0bcf3efaeeb88f6be448b010fabb9104",
"assets/assets/images/common/cart_select_normal.png": "7ed80e9de29544ddf4b034de2a3e1c34",
"assets/assets/images/common/nav_back.png": "5aef41915056abc14a0cb95d97c6a4f1",
"assets/assets/images/common/nav_more.png": "050ed92cedd7150a622e4cc400394a15",
"assets/assets/images/common/nav_cart.png": "81ee0f7a39b20de936b03986d6cd1463",
"assets/assets/images/common/article_mall_icon.png": "30da3618f68ef6ab95c4c7a62f822316",
"assets/assets/images/icon_select_media_delete.png": "baa9a7912efc86211bf3b787a390eaa8",
"assets/assets/images/ad_3.png": "9e3be61b9d708fff93e286bdaf25567a",
"assets/assets/images/goods_cart/cart_empty.png": "f6e66c88a4d16cee5faca5aca84fe912",
"assets/assets/images/pay_wxpay.png": "c2766b6b316be735d41ed1e7b790ce45",
"assets/assets/images/ad_2.png": "352729c6f50bf6b8163d7d5977c72526",
"assets/assets/images/me_avator_bg.png": "82b0ca526690d9976801d4560a1bd19c",
"assets/assets/images/icon_record_cart.png": "379e580d7f7dac98d07f26ae89cee2aa",
"assets/assets/images/me_order_pay.png": "deedb8abe2b554112b1bc056444c68d0",
"assets/assets/images/icon_sale_logistics_down.png": "ff1d8c51244e2628213042a6469b2f7e",
"assets/assets/images/order_details_waite.png": "12ad0dc86c3728e71539ba22d054dfef",
"assets/assets/images/ad_4.png": "459848f4f1171f709695c7a8bfb082ec",
"assets/assets/images/order_details_complete.png": "cf71c3c7ca2b1d2513432c37a0b9c245",
"assets/assets/images/store_home/coupon_received.png": "f13c54b461b29337b72e5c955b280d7f",
"assets/assets/images/store_home/coupon_left.png": "deb40cdb89f61d25943422698e0340a0",
"assets/assets/images/store_home/coupon_right.png": "98226f8cece06b0c1ba3fb51df5a9592",
"assets/assets/images/mall_sort.png": "3a5481d4b54f8e991d86168cbef67f71",
"assets/assets/images/home_more_me.png": "0732672027294c6f517f35a209e694ed",
"assets/assets/images/loading.png": "5612152e211e3872e32206ec14beea84",
"assets/assets/images/nav_me_message.png": "1b12e07dd6f99d26fb1115ed3dbffcf7",
"assets/assets/images/bottom_navigation_bar/tab_me_selected.png": "35c99c54ca828da4843bb6179be4cc68",
"assets/assets/images/bottom_navigation_bar/tab_sort_selected.png": "1ac6ed0df61643b06723eabd970590b0",
"assets/assets/images/bottom_navigation_bar/tab_me_normal.png": "8e80ca1dd901b53e1041152a5e51115f",
"assets/assets/images/bottom_navigation_bar/tab_sort_normal.png": "0082d8bc6e21297b9164175c7db4d9e1",
"assets/assets/images/bottom_navigation_bar/tab_home_normal.png": "c0205ef25772693adb3d2f5afe4ae5e9",
"assets/assets/images/bottom_navigation_bar/tab_cart_selected.png": "26a8df17e379a0ed6972dbba29b77f78",
"assets/assets/images/bottom_navigation_bar/tab_cart_normal.png": "9eb6ee39c534c87c9179b9b2289322ed",
"assets/assets/images/bottom_navigation_bar/tab_home_selected.png": "03787c30b6f23b383a15a03a395412f8",
"assets/assets/fonts/iconfont.ttf": "7c7f19d4f474ae75f44ea400b1e46567"
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
