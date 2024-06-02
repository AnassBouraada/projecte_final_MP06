import fetchFromApi from './fetchAPI.js';

export async function login(username, password) {
  console.log('Login of user', username);
  // Fetch all users
  const users = await fetchFromApi('users');

  console.log('users', users);


  // Find the user with the matching username
  const user = users.find((user) => user.username === username);

  // If the user exists and the password is correct
  if (user && user.password === password) {
    console.log(user);
    // Store user data in localStorage
    user.isLoggedIn = true;
    // Add user to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  throw new Error('Login failed');
}

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.href = 'login.html';
}

export function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.isLoggedIn === true;
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function updateUserRegistrations(updatedUser) {
  localStorage.setItem('user', JSON.stringify(updatedUser));
}
