import fetchFromApi from './fetchAPI.js';
import { isAuthenticated, getLoggedInUser } from './auth.js';

// Selectores de filtro
const tipoGrupoSelect = document.getElementById('tipoGrupo');

// Agregar event listeners de tipo 'change' a los selectores de filtro
tipoGrupoSelect.addEventListener('change', () => filtrarClases());


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

async function mostrarClases(clases) {
    const clasesListContainer = document.getElementById('clases-list');
    console.log('clasesListContainer', clasesListContainer);
    if (!clasesListContainer) {
        console.error('No se encontró el contenedor de la lista de clases');
        return;
    }

    clasesListContainer.innerHTML = ''; // Limpiar el contenedor de la lista de clases

    try {
        const user = getLoggedInUser();
        if (!isAuthenticated()) {
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
            return;
        } else {
            document.getElementById('acciones').classList.remove('hidden');
        }
        const userApi = await fetchFromApi(`users/${user.id}`);
        clases.forEach(clase => {
            const claseRow = document.createElement('tr');
            claseRow.innerHTML = `
                <td class="border px-6 py-4">${clase.name}</td>
                <td class="border px-6 py-4">${clase.duration}</td>
                <td class="border px-6 py-4">${clase.type}</td>
                <td class="border px-6 py-4">${clase.isIndividual ? 'Individual' : 'Grupal'}</td>
                <td class="border px-6 py-4">
                    <button class="py-2 px-4 rounded transition duration-300" data-clase-id="${clase.id}">
                        ${userApi.registration.includes(clase.id) ? 'Ya está inscrito' : 'Registrar'}
                    </button>
                </td>
            `;

            const registerButton = claseRow.querySelector('button');

            if (userApi.registration.includes(clase.id)) {
                registerButton.classList.add('bg-green-500', 'text-white', 'cursor-not-allowed');
                registerButton.disabled = true;
            } else {
                registerButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white');
                registerButton.addEventListener('click', async (event) => {
                    const claseId = parseInt(event.target.dataset.claseId, 10);
                    console.log('Registrar clase con ID:', claseId);

                    try {
                        userApi.registration.push(claseId);
                        console.log('Usuario actualizado con la clase registrada:', userApi);
                        await fetch(`http://localhost:3001/users/${user.id}`, {
                            method: "PUT",
                            body: JSON.stringify(userApi), // Actualiza el usuario con el objeto completo
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        console.log(`Clase con ID ${claseId} registrada exitosamente para el usuario.`);
                        window.location.href = 'userClasses.html';
                    } catch (error) {
                        console.error('Error al registrar la clase:', error);
                    }
                });
            }

            clasesListContainer.appendChild(claseRow);
        });
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}
    // Función para filtrar las clases según los selectores de filtro
    async function filtrarClases() {

        const clases = await fetchFromApi('activites');

        const tipoGrupoSeleccionado = tipoGrupoSelect.value;

        console.log('Filtrar clases por tipo de grupo:', tipoGrupoSeleccionado);

        console.log('Clases originales:', clases);

        if (tipoGrupoSeleccionado === 'individual') {
            const clasesFiltradas = clases.filter(clase => clase.isIndividual);
            console.log('Clases filtradas:', clasesFiltradas);
            mostrarClases(clasesFiltradas);
        } else if (tipoGrupoSeleccionado === 'grupal') {
            const clasesFiltradas = clases.filter(clase => !clase.isIndividual);
            console.log('Clases filtradas:', clasesFiltradas);
            mostrarClases(clasesFiltradas);
        } else {
            console.log('Clases filtradas:', clases);
            mostrarClases(clases);
        }
    }