
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCTT1Jdogyz2zoWLPyYJwLGrF5NAxxRKNc",
  authDomain: "raquel-ravetti.firebaseapp.com",
  projectId: "raquel-ravetti",
  storageBucket: "raquel-ravetti.firebasestorage.app",
  messagingSenderId: "484822429376",
  appId: "1:484822429376:web:1c0e95538955ab5db08725"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle =
    payload.notification?.title || 'Raquel Ravetti';

  const notificationOptions = {
    body: payload.notification?.body || 'Tens um lembrete na tua agenda.',
    icon: './icon.png'
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
