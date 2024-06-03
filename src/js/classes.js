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
            const claseId = parseInt(event.target.dataset.claseId, 10);
            console.log('Registrar clase con ID:', claseId);

            if (!isAuthenticated()) {
                window.location.href = 'quiSom.html';
                return;
            }

            try {
                const userLocal = getLoggedInUser();
                const user = await fetchFromApi(`users/${userLocal.id}`);
                if (!user.registration.includes(claseId)) {
                    user.registration.push(claseId);
                    console.log('Usuario actualizado con la clase registrada:', user);
                    await fetch(`http://localhost:3001/users/${user.id}`, {
                        method: "PUT",
                        body: JSON.stringify(user), // Actualiza el usuario con el objeto completo
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    console.log(`Clase con ID ${claseId} registrada exitosamente para el usuario.`);
                    window.location.href = 'userClasses.html';
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
