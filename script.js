// Configuración de Firebase
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

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const imageRef = db.ref('NOTIONBUTTON/currentImage');

let imageIndex = 0;
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Lista de imágenes

// Función para cambiar la imagen en Firebase
function changeImage() {
    imageIndex = (imageIndex + 1) % images.length;
    imageRef.set(imageIndex); // Actualizar la imagen en la base de datos
}

// Escuchar cambios en la base de datos y actualizar la imagen para todos los usuarios
imageRef.on('value', (snapshot) => {
    const index = snapshot.val();
    const widgetImage = document.getElementById('widgetImage');
    widgetImage.src = images[index]; // Cambiar la imagen localmente cuando se actualice en Firebase
});
