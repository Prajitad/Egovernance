const complaintsList = document.getElementById('complaintsList');

const complaintsKey = 'complaints'; // Key to store complaints

// Load Complaints for Admin
function loadComplaints() {
    const complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
    complaintsList.innerHTML = '';
    complaints.forEach((complaint, index) => {
      const li = document.createElement('li');
      li.textContent = complaint;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => deleteComplaint(index));
  
      li.appendChild(deleteBtn);
      complaintsList.appendChild(li);
    });
  }
  if (complaintsList) {
    loadComplaints();
  }
  
  // Delete Complaint
function deleteComplaint(index) {
  let complaints = JSON.parse(localStorage.getItem(complaintsKey)) || [];
  complaints.splice(index, 1);
  localStorage.setItem(complaintsKey, JSON.stringify(complaints));
  loadComplaints();
}