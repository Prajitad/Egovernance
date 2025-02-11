const signupForm = document.getElementById('signupForm');


// Simulated database (localStorage for simplicity)
const usersKey = 'users'; // Key to store user data

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const newUsername = document.getElementById('newUsername').value.trim();
      const newPassword = document.getElementById('newPassword').value.trim();
  
      if (newUsername && newPassword) {
        let users = JSON.parse(localStorage.getItem(usersKey)) || {};
        if (users[newUsername]) {
          alert('Username already exists!');
        } else {
          users[newUsername] = newPassword;
          localStorage.setItem(usersKey, JSON.stringify(users));
          alert('Signup successful! Please log in.');
          window.location.href = 'login.html';
        }
      }
    });
  }
  