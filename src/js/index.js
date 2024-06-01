import { isAuthenticated, logout } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
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
});
