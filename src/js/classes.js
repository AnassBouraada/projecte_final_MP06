// misClases.js

import fetchFromApi from './fetchAPI.js';
import { isAuthenticated, getLoggedInUser } from './auth.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Página cargada');
    try {
        const clases = await fetchFromApi('activites');
        console.log('Clases obtenidas:', clases);
        mostrarClases(clases);
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
            <td class="border px-6 py-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300" data-clase-id="${clase.id}">Registrar</button>
            </td>
        `;
        claseRow.querySelector('button').addEventListener('click', async (event) => {
            const claseId = parseInt(event.target.dataset.claseId);
            console.log('Registrar clase con ID:', claseId);

            if (!isAuthenticated()) {
                window.location.href = 'paginaPrincipal.html';
                return;
            }

            try {
                const user = getLoggedInUser();
                if (!user.registration.includes(claseId)) {
                    user.registration.push(claseId);
                    await fetchFromApi(`users/${user.id}`, {
                        method: 'PATCH', // Use PATCH to update only the registration field
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ registration: user.registration }),
                    });
                    mostrarClases(clases); // Update the UI after registration
                } else {
                    console.log('El usuario ya está registrado en esta clase');
                }
            } catch (error) {
                console.error('Error al registrar la clase:', error);
            }
        });
        clasesListContainer.appendChild(claseRow);
    });
}
