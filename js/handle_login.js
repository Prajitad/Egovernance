// DOM Elements
const loginForm = document.getElementById('loginForm');

// Simulated database (localStorage for simplicity)
const usersKey = 'users'; // Key to store user data

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      const users = JSON.parse(localStorage.getItem(usersKey)) || {};
  
      if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin_dashboard.html';
      } else if (users[username] && users[username] === password) {
        window.location.href = 'user_dashboard.html';
      } else {
        alert('Invalid credentials!');
      }
    });
  }