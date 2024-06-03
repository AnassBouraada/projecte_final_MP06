document.getElementById('crearClaseForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombreClase = document.getElementById('nombreClase').value;
    const duracionClase = document.getElementById('duracionClase').value;
    const tipoClase = document.getElementById('tipoClase').value;
    const individualClase = document.getElementById('individualClase').value === 'true';

    try {
        // Obtener las clases existentes para determinar el nuevo ID
        const response = await fetch('http://localhost:3001/activites');
        const clases = await response.json();

        // Obtener el máximo ID existente y sumar 1 para el nuevo ID
        const maxId = Math.max(...clases.map(clase => parseInt(clase.id, 10)));
        const newId = (maxId + 1).toString();

        // Crear el objeto para la nueva clase
        const nuevaClase = {
            id: newId,
            name: nombreClase,
            duration: duracionClase,
            type: tipoClase,
            isIndividual: individualClase
        };

        // Enviar la nueva clase a la API
        const postResponse = await fetch('http://localhost:3001/activites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaClase)
        });

        if (postResponse.ok) {
            window.location.href = 'llistaClasses.html';
        } else {
            throw new Error('Error al crear la clase');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al crear la clase. Por favor, inténtalo de nuevo.');
    }
});
