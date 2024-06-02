import { isAuthenticated, logout } from './auth.js';
import header from '../js/components/navbar.js';

document.addEventListener("DOMContentLoaded", () => {

    // Agrega el encabezado al inicio del body
    document.body.insertAdjacentHTML('afterbegin', header);


    const loginButton = document.getElementById("login");
    const logoutButton = document.getElementById("logout");
    const classesButton = document.getElementById("classes");
    const misClasesLink = document.getElementById("misclases");

    if (isAuthenticated()) {
        loginButton.classList.add("hidden");
        logoutButton.classList.remove("hidden");
        classesButton.classList.remove("hidden");
        misClasesLink.classList.remove("hidden");
    } else {
        loginButton.classList.remove("hidden");
        logoutButton.classList.add("hidden");
        classesButton.classList.add("hidden");
        misClasesLink.classList.add("hidden");
    }

    document.getElementById("logout").addEventListener("click", () => {
        logout();
        window.location.href = "index.html";
    });

    //comprovem si la ruta es index.htnml per mostrar el botó enrere
    if (window.location.pathname === "/index.html") {
        document.getElementById("backButton").classList.add("hidden");
    }

    // Event listener per el botó "Enrere"
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        window.history.back();
    });
    
    // Event listener per el botó "Login"
    loginButton.addEventListener('click', () => {
        window.location.href = 'quiSom.html';
    });
    
    

});
