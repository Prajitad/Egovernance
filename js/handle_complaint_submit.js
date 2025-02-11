const userForm = document.getElementById('userForm');
const complaintsKey = 'complaints'; // Key to store complaints
const currentUserKey = 'currentUser'; // Key to track logged-in user

let currentEditIndex = null; // To track which complaint is being edited

// Function to get the currently logged-in user
function getCurrentUser() {
  return localStorage.getItem(currentUserKey);
}

// Function to load and display complaints for the logged-in user
function loadComplaints() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    alert('No user logged in!');
    window.location.href = 'login.html'; // Redirect if no user is logged in
    return;
  }

  const userComplaintsKey = `${complaintsKey}_${currentUser}`;
  const complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];
  const complaintsList = document.getElementById('complaintsList');
  complaintsList.innerHTML = ''; // Clear previous list

  complaints.forEach((complaint, index) => {
    const complaintDiv = document.createElement('div');
    complaintDiv.classList.add('complaint-item');

    const complaintText = document.createElement('p');
    complaintText.textContent = complaint;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => editComplaint(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => deleteComplaint(index);

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    complaintDiv.appendChild(complaintText);
    complaintDiv.appendChild(buttonContainer);

    complaintsList.appendChild(complaintDiv);
  });
}

// Handle Complaint Submission (Add or Save)
if (userForm) {
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const complaint = document.getElementById('complaint').value.trim();
    const currentUser = getCurrentUser();

    if (!currentUser) {
      alert('User not logged in!');
      return;
    }

    const userComplaintsKey = `${complaintsKey}_${currentUser}`;
    let complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];

    if (currentEditIndex !== null) {
      complaints[currentEditIndex] = complaint;
      currentEditIndex = null;
      alert('Complaint updated!');
    } else {
      complaints.push(complaint);
      alert('Complaint submitted!');
    }

    localStorage.setItem(userComplaintsKey, JSON.stringify(complaints));

    document.getElementById('complaint').value = ''; // Clear input
    loadComplaints(); // Reload complaints after submission

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = 'Submit Complaint';
  });
}

// Edit Complaint
function editComplaint(index) {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const userComplaintsKey = `${complaintsKey}_${currentUser}`;
  const complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];
  const complaint = complaints[index];

  document.getElementById('complaint').value = complaint;

  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = 'Save Complaint';

  currentEditIndex = index;
}

// Delete Complaint
function deleteComplaint(index) {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const userComplaintsKey = `${complaintsKey}_${currentUser}`;
  let complaints = JSON.parse(localStorage.getItem(userComplaintsKey)) || [];
  complaints.splice(index, 1);
  localStorage.setItem(userComplaintsKey, JSON.stringify(complaints));
  loadComplaints();
}

// Initial Load
window.onload = loadComplaints;
