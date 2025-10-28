const CACHE_NAME = 'stock-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // คุณสามารถเพิ่มไฟล์ CSS หรือ JS อื่นๆ ที่นี่ในอนาคต
];

// 1. ตอนติดตั้ง (Install)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. ตอนเรียกหน้าเว็บ (Fetch)
// (นี่คือส่วนที่แก้ไขแล้ว)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // ถ้ามีใน Cache ก็คืนค่าจาก Cache
      if (response) {
        return response;
      }
      // ถ้าไม่มี ก็ไป fetch จาก network
      return fetch(event.request);
    }) // <-- .then() ปิดตรงนี้
  ); // <-- event.respondWith() ปิดตรงนี้
}); // <-- addEventListener() ปิดตรงนี้