importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDUfMS-eV20sA6Q-ebAlt_IFFlVCUQxSN0",
    authDomain: "webpush-b181a.firebaseapp.com",
    databaseURL: "https://webpush-b181a.firebaseio.com",
    projectId: "webpush-b181a",
    storageBucket: "webpush-b181a.appspot.com",
    messagingSenderId: "948572014501",
    appId: "1:948572014501:web:47bb0ab627fae70fb78a4c",
    measurementId: "G-RV47N7Z648"
});

let firebaseMessaging = firebase.messaging();