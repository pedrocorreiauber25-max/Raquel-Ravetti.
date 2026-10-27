
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCTT1Jdogyz2zoWLPyYJwLGrF5NAxxRKNc",
  authDomain: "raquel-ravetti.firebaseapp.com",
  projectId: "raquel-ravetti",
  storageBucket: "raquel-ravetti.firebasestorage.app",
  messagingSenderId: "484822429376",
  appId: "1:484822429376:web:b40bc682b199919ab08725"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Raquel Ravetti';
  const options = {
    body: payload.notification?.body || 'Tens um lembrete na tua agenda.',
    icon: './icon.png'
  };

  return self.registration.showNotification(title, options);
});
