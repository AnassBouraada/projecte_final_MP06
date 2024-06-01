// index.js

import fetchFromApi from './fetchAPI.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const clases = await fetchFromApi('activites');
        mostrarClases(clases);
    } catch (error) {
        console.error('Error al obtener las clases:', error);
        // Aquí podrías mostrar un mensaje de error en la página si lo deseas
    }
});

function mostrarClases(clases) {
    const clasesListContainer = document.getElementById('clases-list');

    // Limpiar cualquier contenido previo en el contenedor
    clasesListContainer.innerHTML = '';

    // Crear elementos HTML para cada clase y agregarlos al contenedor
    clases.forEach(clase => {
        const claseRow = document.createElement('tr');
        claseRow.innerHTML = `
            <td class="border px-6 py-4">${clase.name}</td>
            <td class="border px-6 py-4">${clase.duration}</td>
            <td class="border px-6 py-4">${clase.type}</td>
            <td class="border px-6 py-4">${clase.isIndividual ? 'Individual' : 'Grupal'}</td>
            <td class="border px-6 py-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">Apuntarse</button>
            </td>
        `;
        clasesListContainer.appendChild(claseRow);
    });
}
