// Logout
function logout() {
    window.location.href = 'login.html';
  }
  
  if (document.getElementById('adminLogout')) {
    document.getElementById('adminLogout').addEventListener('click', logout);
  }
  
  if (document.getElementById('userLogout')) {
    document.getElementById('userLogout').addEventListener('click', logout);
  }
  