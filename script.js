const form = document.getElementById('jobForm');
const tableBody = document.querySelector('#jobTable tbody');

// Load jobs from localStorage
function getJobs() {
  return json.parse(localStorage.getItem('jobs')) || [];
}

// Save jobs
function saveJobs(jobs) {
  localStorage.setItem('jobs', json.stringify(jobs));
}

// Render table
function renderJobs() {
  const jobs = getJobs();
  tableBody.innerHTML = '';

  jobs.forEach(job => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.role}</td>
      <td class="status ${job.status.toLowerCase()}">${job.status}</td>
      <td>${job.dateApplied}</td>
      <td>${job.notes}</td>
      <td><a href="${job.link}" target="_blank">View</a></td>
    `;

    tableBody.appendChild(row);
  });
}

// Handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newJob = {
    company: document.getElementById('company').value,
    role: document.getElementById('role').value,
    status: document.getElementById('status').value,
    dateApplied: document.getElementById('dateApplied').value,
    notes: document.getElementById('notes').value,
  };

  const jobs = getJobs();
  jobs.push(newJob);
  saveJobs(jobs);

  form.reset();
  renderJobs();
});

// Initial load
renderJobs();
