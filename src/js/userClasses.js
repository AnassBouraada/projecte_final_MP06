import fetchFromApi from './fetchAPI.js';
import { getLoggedInUser } from './auth.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Página cargada');
    try {
        const user = getLoggedInUser();
        const clases = await fetchFromApi('activites');
        console.log('Clases obtenidas:', clases);
        const clasesInscritas = clases.filter(clase => user.registration.includes(clase.id));
        console.log('Clases inscritas:', clasesInscritas);
        mostrarClases(clasesInscritas);
    } catch (error) {
        console.error('Error al obtener las clases:', error);
    }
});

function mostrarClases(clases) {
    const clasesListContainer = document.getElementById('clases-list');
    console.log('clasesListContainer', clasesListContainer);
    if (!clasesListContainer) {
        console.error('No se encontró el contenedor de la lista de clases');
        return;
    }

    clasesListContainer.innerHTML = '';

    clases.forEach(clase => {
        const claseRow = document.createElement('tr');
        claseRow.innerHTML = `
            <td class="border px-6 py-4">${clase.name}</td>
            <td class="border px-6 py-4">${clase.duration}</td>
            <td class="border px-6 py-4">${clase.type}</td>
            <td class="border px-6 py-4">${clase.isIndividual ? 'Individual' : 'Grupal'}</td>
        `;
        clasesListContainer.appendChild(claseRow);
    });
}
