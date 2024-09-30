let isImageOne = true;

function changeImage() {
    const widgetImage = document.getElementById('widgetImage');
    
    if (isImageOne) {
        widgetImage.src = 'imagen2.jpg'; // Cambia a la segunda imagen
    } else {
        widgetImage.src = 'imagen1.jpg'; // Cambia de vuelta a la primera imagen
    }
    
    isImageOne = !isImageOne; // Cambia el estado
}
