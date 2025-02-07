async function fetchData() {
    const response = await fetch('https://api.example.com/points'); // Replace with your API endpoint
    const data = await response.json();
    return data;
}

function updateLeaderboard(data) {
    const tbody = document.querySelector('#leaderboard tbody');
    tbody.innerHTML = ''; // Clear existing rows

    data.teams.forEach(team => {
        team.members.forEach(member => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.name}</td>
                <td>${member.name}</td>
                <td>${member.points}</td>
                <td>${team.goal}</td>
                <td>${member.change}</td>
            `;
            tbody.appendChild(row);
        });
    });
}

async function updateData() {
    const data = await fetchData();
    updateLeaderboard(data);
}

// Update the leaderboard every hour
setInterval(updateData, 3600000);

// Initial update
updateData();