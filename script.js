// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpK7adqhBEKtJ231JJhAQDSZyJ8f2rUaQ",
  authDomain: "notionbutton.firebaseapp.com",
  databaseURL: "https://notionbutton-default-rtdb.firebaseio.com",
  projectId: "notionbutton",
  storageBucket: "notionbutton.appspot.com",
  messagingSenderId: "593095627631",
  appId: "1:593095627631:web:52e0977e28e94af011ce9a",
  measurementId: "G-7K81PV38KG"
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
