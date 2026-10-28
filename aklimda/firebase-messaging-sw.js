// Aklımda yeni adrese taşındı; eski adresteki bildirim çalışanı kendini kaldırır.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: "window" });
  cs.forEach(c => c.navigate("https://aklimda-ca59b.web.app/"));
})()));
