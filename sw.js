self.addEventListener('push', function(event) {
    let data = { title: '⚡️ БЧС Нагадування', body: 'Потрібно надіслати звіт!' };
    if (event.data) {
        data = event.data.json();
    }
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./index.html')
    );
});