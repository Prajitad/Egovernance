const userForm = document.getElementById('userForm');
const complaintsKey = 'complaints'; // Key to store complaints

let currentEditIndex = null; // To track which complaint is being edited

// Function to load and display complaints
function loadComplaints() {
  const complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
  const complaintsList = document.getElementById('complaintsList');
  complaintsList.innerHTML = ''; // Clear previous list

  complaints.forEach((complaint, index) => {
    const complaintDiv = document.createElement('div');
    complaintDiv.classList.add('complaint-item');

    const complaintText = document.createElement('p');
    complaintText.textContent = complaint;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => editComplaint(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => deleteComplaint(index);

    complaintDiv.appendChild(complaintText);
    complaintDiv.appendChild(editButton);
    complaintDiv.appendChild(deleteButton);
    
    complaintsList.appendChild(complaintDiv);
  });
}

// Handle Complaint Submission (Add or Save)
if (userForm) {
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const complaint = document.getElementById('complaint').value.trim();

    if (complaint) {
      let complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
      
      if (currentEditIndex !== null) {
        // Editing an existing complaint
        complaints[currentEditIndex] = complaint;
        currentEditIndex = null; // Reset edit index after saving
        alert('Complaint updated!');
      } else {
        // Adding a new complaint
        complaints.push(complaint);
        alert('Complaint submitted!');
      }

      // Save updated complaints list to localStorage
      localStorage.setItem(complaintsKey, JSON.stringify(complaints));

      document.getElementById('complaint').value = ''; // Clear input
      loadComplaints(); // Reload complaints after submission or update

      // Reset button text
      const submitButton = document.querySelector('button[type="submit"]');
      submitButton.textContent = 'Submit Complaint';
    }
  });
}

// Edit Complaint
function editComplaint(index) {
  const complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
  const complaint = complaints[index];

  // Set complaint to the textarea for editing
  document.getElementById('complaint').value = complaint;

  // Change the submit button to save the edited complaint
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = 'Save Complaint';

  // Set the index of the complaint being edited
  currentEditIndex = index;
}

// Delete Complaint
function deleteComplaint(index) {
  let complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
  complaints.splice(index, 1); // Remove the complaint
  localStorage.setItem(complaintsKey, JSON.stringify(complaints));
  loadComplaints(); // Reload complaints after deletion
}

// Initial Load
window.onload = loadComplaints;
