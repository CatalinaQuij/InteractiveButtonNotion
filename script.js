let isOccupied = true;

function toggleStatus() {
    const statusButton = document.getElementById('statusButton');
    isOccupied = !isOccupied;
    statusButton.textContent = isOccupied ? 'Ocupado' : 'Disponible';
    statusButton.classList.toggle('available', !isOccupied);

    // Actualiza la base de datos Firebase con el nuevo estado
    firebase.database().ref('NOTIONSTATUS').set({
        status: isOccupied ? 'Ocupado' : 'Disponible'
    });
}

// Escucha los cambios en la base de datos y actualiza el botón en consecuencia
firebase.database().ref('NOTIONSTATUS').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && data.status !== undefined) {
        const statusButton = document.getElementById('statusButton');
        isOccupied = data.status === 'Ocupado';
        statusButton.textContent = data.status;
        statusButton.classList.toggle('available', !isOccupied);
    }
});
