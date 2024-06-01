// Importar les funcions necessàries des de fetchAPI.js i auth.js
import { login } from '../auth.js';

// Funció per gestionar el login
export function handleLogin(event) {
  event.preventDefault(); // Evita el comportament per defecte de l'enviament del formulari

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar les credencials amb la funció d'autenticació
  login(username, password)
    .then(user => {
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error('Error durant el procés de login:', error);
      alert('Credencials incorrectes. Torna-ho a intentar.');
    });
}

// Associar la funció handleLogin() amb l'event "submit" del formulari
document.getElementById('login-form').addEventListener('submit', handleLogin);
