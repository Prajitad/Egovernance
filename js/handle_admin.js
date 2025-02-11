const complaintsList = document.getElementById('complaintsList');
const usersKey = 'users'; // Users storage key

// Load Complaints for Admin
function loadComplaints() {
    complaintsList.innerHTML = '';
    let users = JSON.parse(localStorage.getItem(usersKey)) || {}; // Get all users

    Object.keys(users).forEach(username => {
        let userComplaintsKey = `complaints_${username}`; // User-specific complaints key
        let complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];

        complaints.forEach((complaint, index) => {
            const li = document.createElement('li');
            li.textContent = `${username}: ${complaint}`; // Show which user submitted the complaint

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deleteComplaint(username, index));

            li.appendChild(deleteBtn);
            complaintsList.appendChild(li);
        });
    });
}

// Delete Complaint
function deleteComplaint(username, index) {
    let userComplaintsKey = `complaints_${username}`;
    let complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];
    
    complaints.splice(index, 1); // Remove the selected complaint
    localStorage.setItem(userComplaintsKey, JSON.stringify(complaints)); // Update storage

    loadComplaints(); // Reload complaints after deletion
}

// Load complaints when the page loads
if (complaintsList) {
    loadComplaints();
}
