import { isAuthenticated, logout } from './auth.js';
import header from '../js/components/navbar.js';

document.addEventListener("DOMContentLoaded", () => {

    // Agrega el encabezado al inicio del body
    document.body.insertAdjacentHTML('afterbegin', header);

    const loginButton = document.getElementById("login");
    const logoutButton = document.getElementById("logout");
    const misClasesLink = document.getElementById("misclases");
    const llistaClassesLink = document.getElementById("llistaClasses");

    if (isAuthenticated()) {
        loginButton.classList.add("hidden");
        logoutButton.classList.remove("hidden");
    } else {
        loginButton.classList.remove("hidden");
        logoutButton.classList.add("hidden");
    }

    document.getElementById("logout").addEventListener("click", () => {
        logout();
        window.location.href = "index.html";
    });

    // Comprobamos si la ruta es index.html para mostrar el botón "Enrere"
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        document.getElementById("backButton").classList.add("hidden");

        if (isAuthenticated()) {
            misClasesLink.classList.remove("hidden");
        } else {
            misClasesLink.classList.add("hidden");
        }

    }

    // Event listener para el botón "Enrere"
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        window.history.back();
    });

    // Event listener para el botón "Login"
    loginButton.addEventListener('click', () => {
        window.location.href = 'quiSom.html';
    });

    

});
