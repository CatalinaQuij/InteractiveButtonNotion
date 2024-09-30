let imageIndex = 0; // Índice de la imagen actual
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Lista de imágenes

function changeImage() {
    const widgetImage = document.getElementById('widgetImage');
    
    // Cambia la imagen al siguiente índice en la lista
    imageIndex = (imageIndex + 1) % images.length;
    widgetImage.src = images[imageIndex];
}
