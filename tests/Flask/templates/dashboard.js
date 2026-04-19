const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
const days7  = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

// 1. Yield prediction
new Chart(document.getElementById('yieldChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { label: 'Blé dur', data: [0,0,1.2,2.8,4.2,5.2,5.1,0,0,0,0,0], borderColor: '#2d8f52', backgroundColor: 'rgba(45,143,82,.08)', fill: true, tension: .4, borderWidth: 2.5, pointRadius: 3, pointBackgroundColor: '#2d8f52' },
      { label: 'Maïs', data: [0,0,0,0.5,2.1,5.0,8.2,9.1,8.5,0,0,0], borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,.06)', fill: true, tension: .4, borderWidth: 2.5, pointRadius: 3, pointBackgroundColor: '#f59e0b', borderDash: [5,3] },
      { label: 'Tomates', data: [0,0,0,0,1.8,18,34,38,32,12,0,0], borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,.06)', fill: true, tension: .4, borderWidth: 2.5, pointRadius: 3, pointBackgroundColor: '#3b82f6', borderDash: [2,4] },
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { boxWidth: 10, boxHeight: 10, font: { size: 12 }, padding: 16 } }, tooltip: { mode: 'index', intersect: false } },
    scales: {
      x: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 } } },
      y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 }, callback: v => v + ' t/ha' }, beginAtZero: true }
    }
  }
});

// 2. Soil radar
new Chart(document.getElementById('soilChart'), {
  type: 'radar',
  data: {
    labels: ['pH','Azote','Phosphore','Potassium','Mat. org.','CE'],
    datasets: [
      { label: 'Score actuel', data: [82, 55, 28, 74, 70, 65], borderColor: '#2d8f52', backgroundColor: 'rgba(45,143,82,.15)', pointBackgroundColor: '#2d8f52', borderWidth: 2 },
      { label: 'Optimal', data: [80, 80, 80, 80, 80, 80], borderColor: 'rgba(0,0,0,.12)', backgroundColor: 'rgba(0,0,0,.03)', borderDash: [4,4], pointRadius: 0, borderWidth: 1 }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 25, font: { size: 9 } }, grid: { color: 'rgba(0,0,0,.06)' }, pointLabels: { font: { size: 11 } } } }
  }
});

// 3. Water usage
new Chart(document.getElementById('waterChart'), {
  type: 'bar',
  data: {
    labels: days7,
    datasets: [
      { label: 'Prévu', data: [420, 380, 510, 290, 440, 320, 180], backgroundColor: 'rgba(59,130,246,.18)', borderRadius: 5 },
      { label: 'Réel', data: [380, 350, 480, 0, 410, 280, 160], backgroundColor: '#3b82f6', borderRadius: 5 }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { boxWidth: 8, boxHeight: 8, font: { size: 11 }, padding: 12 } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 }, callback: v => v + ' m³' }, beginAtZero: true }
    }
  }
});

// 4. Disease risk
new Chart(document.getElementById('diseaseChart'), {
  type: 'doughnut',
  data: {
    labels: ['Mildiou','Pucerons','Rouille','Autre','Sain'],
    datasets: [{ data: [32, 18, 8, 6, 36], backgroundColor: ['#dc2626','#f59e0b','#d97706','#3b82f6','#2d8f52'], borderWidth: 0, hoverOffset: 6 }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'right', labels: { boxWidth: 10, boxHeight: 10, font: { size: 11 }, padding: 10 } } },
    cutout: '65%'
  }
});

// 5. Finance chart
new Chart(document.getElementById('financeChart'), {
  type: 'bar',
  data: {
    labels: months,
    datasets: [
      { label: 'Revenus', data: [12000,8000,18000,24000,32000,42000,48000,38000,30000,18000,8000,6000], backgroundColor: 'rgba(45,143,82,.75)', borderRadius: 5 },
      { label: 'Dépenses', data: [8000,12000,22000,18000,16000,24000,20000,18000,14000,12000,6000,6000], backgroundColor: 'rgba(59,130,246,.6)', borderRadius: 5 },
      { label: 'Bénéfice', type: 'line', data: [4000,-4000,-4000,6000,16000,18000,28000,20000,16000,6000,2000,0], borderColor: '#f59e0b', backgroundColor: 'transparent', borderWidth: 2.5, tension: .4, pointRadius: 3, pointBackgroundColor: '#f59e0b' }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 }, callback: v => (v/1000).toFixed(0) + 'k €' } }
    }
  }
});

// 6. Carbon sparkline
new Chart(document.getElementById('carbonChart'), {
  type: 'line',
  data: {
    labels: ['J','F','M','A','M','J','J','A','S','O','N','D'],
    datasets: [{ data: [8,10,14,18,16,14,18,16,12,8,6,8], borderColor: '#0d9488', backgroundColor: 'rgba(13,148,136,.1)', fill: true, tension: .5, pointRadius: 0, borderWidth: 2 }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false, beginAtZero: true } }
  }
});

// 7. Crop rotation
new Chart(document.getElementById('rotationChart'), {
  type: 'bar',
  data: {
    labels: ['Parcelle A1','Parcelle B3','Parcelle C2','Parcelle D4','Parcelle E1'],
    datasets: [
      { label: '2023', data: [4, 2, 3, 1, 2], backgroundColor: '#a8e8c0', borderRadius: 4 },
      { label: '2024', data: [2, 3, 1, 4, 3], backgroundColor: '#3db36a', borderRadius: 4 },
      { label: '2025 (IA)', data: [3, 1, 4, 2, 1], backgroundColor: '#133d24', borderRadius: 4 },
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { boxWidth: 10, boxHeight: 10, font: { size: 11 }, padding: 12 } },
      tooltip: { callbacks: { label: ctx => {
        const map = {1:'Blé dur',2:'Tomates',3:'Maïs',4:'Luzerne'};
        return ' ' + ctx.dataset.label + ': ' + (map[ctx.raw] || ctx.raw);
      }}}
    },
    scales: {
      x: { display: false },
      y: { grid: { display: false }, ticks: { font: { size: 12 } } }
    }
  }
});

// 8. Irrigation schedule
new Chart(document.getElementById('irrigChart'), {
  type: 'bar',
  data: {
    labels: days7,
    datasets: [
      { label: 'A1 Blé', data: [120, 80, 110, 0, 130, 0, 0], backgroundColor: '#2d8f52', borderRadius: 4, stack: 'a' },
      { label: 'B3 Tomates', data: [60, 40, 0, 0, 70, 0, 0], backgroundColor: '#3b82f6', borderRadius: 4, stack: 'a' },
      { label: 'D4 Oliviers', data: [200, 180, 200, 200, 0, 0, 0], backgroundColor: '#f59e0b', borderRadius: 4, stack: 'a' },
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { boxWidth: 8, boxHeight: 8, font: { size: 11 }, padding: 10 } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: 'rgba(0,0,0,.04)' }, ticks: { font: { size: 11 }, callback: v => v + ' m³' }, beginAtZero: true }
    }
  }
});

// Tab interactivity
document.querySelectorAll('.tab-pill').forEach(pill => {
  pill.addEventListener('click', function() {
    this.closest('.tab-pills').querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});