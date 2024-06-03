// misClases.js

import fetchFromApi from './fetchAPI.js';
import { getLoggedInUser } from './auth.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Página cargada');
    try {
        const user = getLoggedInUser();
        const userApi = await fetch(`http://localhost:3001/users/${user.id}`);
        const userData = await userApi.json();
        const clases = await fetchFromApi('activites');
        console.log('Clases obtenidas:', clases);
        const clasesInscritas = clases.filter(clase => userData.registration.includes(clase.id));
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
            <td class="border px-6 py-4">
                <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300" data-clase-id="${clase.id}">Desapuntarse</button>
            </td>
        `;

        const unregisterButton = claseRow.querySelector('button');

        unregisterButton.addEventListener('click', async (event) => {
            const claseId = parseInt(event.target.dataset.claseId, 10);
            console.log('Desapuntarse de la clase con ID:', claseId);

            try {
                const userLocal = getLoggedInUser();
                console.log('Usuario local:', userLocal);
                const response = await fetch(`http://localhost:3001/users/${userLocal.id}`);
                const userData = await response.json(); // Extraer los datos del cuerpo de la respuesta
                console.log('Datos del usuario obtenidos:', userData);
                const updatedRegistrations = userData.registration.filter(id => id !== claseId);
                console.log('updatedRegistrations:', updatedRegistrations);
                userData.registration = updatedRegistrations;
                await fetch(`http://localhost:3001/users/${userLocal.id}`, {
                    method: "PUT",
                    body: JSON.stringify(userData),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log(`Usuario desapuntado de la clase con ID ${claseId}.`);
                window.location.reload(); // Recargar la página para mostrar los cambios
            } catch (error) {
                console.error('Error al desapuntarse de la clase:', error);
            }
        });

        clasesListContainer.appendChild(claseRow);
    });
}
