importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBIh29HVxC4XozWLP7Hx9Yb7-NbnvzLzWM",
  authDomain: "b4s-teleradio.firebaseapp.com",
  projectId: "b4s-teleradio",
  storageBucket: "b4s-teleradio.firebasestorage.app",
  messagingSenderId: "586519224072",
  appId: "1:586519224072:web:29630b02673cb5c50bd6bd
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Отримано фонове повідомлення:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});