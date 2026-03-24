async function loadJobs() {
  const response = await fetch('jobs.json');
  const jobs = await response.json();

  const tableBody = document.querySelector('#jobTable tbody');
  tableBody.innerHTML = '';

  jobs.forEach(job => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${job.company}</td>
      <td>${job.role}</td>
      <td class="status ${job.status.toLowerCase()}">${job.status}</td>
      <td>${job.dateApplied}</td>
      <td>${job.notes}</td>
    `:

    tableBody.appendChild(row);
  });
}

loadJobs();
