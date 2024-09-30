const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let imageIndex = 0; // Índice de la imagen actual
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Lista de imágenes

// Lee el índice de imagen desde la base de datos
db.ref('imageIndex').on('value', (snapshot) => {
    imageIndex = snapshot.val() || 0;
    const widgetImage = document.getElementById('widgetImage');
    widgetImage.src = images[imageIndex];
});

function changeImage() {
    // Cambia la imagen al siguiente índice en la lista
    imageIndex = (imageIndex + 1) % images.length;

    // Actualiza el índice en la base de datos
    db.ref('imageIndex').set(imageIndex);
}
