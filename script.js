import hymns from "./hymns.js";

const searchInput = document.getElementById('search-input');
const hymnsGrid = document.getElementById('hymns-grid');

// Função para renderizar os hinos
function renderHymns(hymnsToRender) {
  hymnsGrid.innerHTML = '';
  
  if (hymnsToRender.length === 0) {
    hymnsGrid.innerHTML = '<div class="no-results">Nenhum hino encontrado</div>';
    return;
  }
  
  hymnsToRender.forEach(hymn => {
    const card = document.createElement('div');
    card.className = 'hymn-card';
    card.innerHTML = `
      <div class="hymn-number">${hymn.number}</div>
      <div class="hymn-title">${hymn.title}</div>
    `;
    hymnsGrid.appendChild(card);
  });
}

// Função para filtrar hinos
function filterHymns(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  if (term === '' || term === 'harpa cristã') {
    return hymns;
  }
  
  return hymns.filter(hymn => {
    const numberMatch = hymn.number.toString().includes(term);
    const titleMatch = hymn.title.toLowerCase().includes(term);
    return numberMatch || titleMatch;
  });
}

// Event listener para o input de pesquisa
searchInput.addEventListener('input', (e) => {
  const filteredHymns = filterHymns(e.target.value);
  renderHymns(filteredHymns);
});

// Renderizar todos os hinos inicialmente
renderHymns(hymns);
