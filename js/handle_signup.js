const signupForm = document.getElementById('signupForm');
const usersKey = 'users'; // Key to store user data
const currentUserKey = 'currentUser'; // Key to track logged-in user

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newUsername = document.getElementById('newUsername').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (!newUsername || !newPassword || !confirmPassword) {
            alert('All fields are required!');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        let users = JSON.parse(localStorage.getItem(usersKey)) || {};

        if (users[newUsername]) {
            alert('Username already exists!');
            return;
        }

        // Store user credentials
        users[newUsername] = newPassword;
        localStorage.setItem(usersKey, JSON.stringify(users));

        // Set the current user
        localStorage.setItem(currentUserKey, newUsername);

        alert('Signup successful! You are now logged in.');
        window.location.href = 'login.html'; // Redirect to the dashboard
    });
}
