// sw.js (เวอร์ชันใหม่ที่ไม่ออฟไลน์)

// 1. ติดตั้งทันที ไม่ต้องรอ
self.addEventListener('install', () => {
  self.skipWaiting();
});

// 2. เมื่อถูกเรียกใช้งาน
self.addEventListener('activate', event => {
  // สั่งให้ Service Worker ตัวใหม่ควบคุมหน้าทันที
  event.waitUntil(self.clients.claim());
});

// 3. เมื่อมีการเรียกไฟล์ (fetch)
self.addEventListener('fetch', (event) => {
  // บังคับให้ไปที่ Network เสมอ (ไม่ใช้ Cache)
  event.respondWith(fetch(event.request));
});