// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// const firebaseConfig = {
//     apiKey: "AIzaSyBOG_Yg-2kKeH1a0sdjc_zBvn_p7A_WaJE",
//     authDomain: "wedlock-4f698.firebaseapp.com",
//     databaseURL: "https://wedlock-4f698-default-rtdb.firebaseio.com",
//     projectId: "wedlock-4f698",
//     storageBucket: "wedlock-4f698.appspot.com",
//     messagingSenderId: "539956268610",
//     appId: "1:539956268610:web:f01a4dbc2ced2e96c027db",
//     measurementId: "G-95Z5LR49PG",
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(async (payload) => {
//     console.log("[firebase-messaging-sw.js] Received background message", payload);

//     const notificationTitle = `${payload.data.title} from ${payload.data.senderName}`;
//     const notificationOptions = {
//         body: payload.body,
//         icon: payload.data.senderImage,
//         data: {
//             receiverId: payload.data.receiverId,
//             receiverFCM: payload.data.receiverFCM,
//             senderId: payload.data.senderId,
//             senderFCM: payload.data.senderFCM,
//             senderName: payload.data.senderName,
//         },
//     };

//     console.log(payload)


//     // Show notification
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });


// In firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyCWu-erLUsLXFSxbD-xKLbS0j3Sd5veNFQ",
    authDomain: "vaidikvibah.firebaseapp.com",
    databaseURL: "https://vaidikvibah-default-rtdb.firebaseio.com",
    projectId: "vaidikvibah",
    storageBucket: "vaidikvibah.firebasestorage.app",
    messagingSenderId: "46448607357",
    appId: "1:46448607357:web:f4601196fab75bfacd7114",
    measurementId: "G-BFY5SQQT5J"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(async (payload) => {
    console.log("[firebase-messaging-sw.js] Received background message", payload);

    const notificationTitle = `${payload.data.title} from ${payload.data.senderName}`;
    const notificationOptions = {
        body: payload.body,
        icon: payload.data.senderImage,
        data: {
            receiverId: payload.data.receiverId,
            receiverFCM: payload.data.receiverFCM,
            senderId: payload.data.senderId,
            senderFCM: payload.data.senderFCM,
            senderName: payload.data.senderName,
        },
    };

    console.log(payload)


    // Show notification
    self.registration.showNotification(notificationTitle, notificationOptions);
});
