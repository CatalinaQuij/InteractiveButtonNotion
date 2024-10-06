let imageIndex = 0; // Índice de la imagen actual
const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Lista de imágenes

function changeImage() {
    const widgetImage = document.getElementById('widgetImage');

    // Cambia la imagen al siguiente índice en la lista
    imageIndex = (imageIndex + 1) % images.length;
    widgetImage.src = images[imageIndex];
    
    // Actualiza la base de datos Firebase con el nuevo índice de la imagen
    firebase.database().ref('NOTIONBUTTON').set({
        imageIndex: imageIndex
    });
}

// Escucha los cambios en la base de datos y actualiza la imagen en consecuencia
firebase.database().ref('NOTIONBUTTON').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && data.imageIndex !== undefined) {
        const widgetImage = document.getElementById('widgetImage');
        imageIndex = data.imageIndex;
        widgetImage.src = images[imageIndex];
    }
});
