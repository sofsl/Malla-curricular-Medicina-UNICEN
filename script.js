const malla = document.getElementById('malla');

function renderMaterias() {
  malla.innerHTML = '';
  materias.forEach(materia => {
    const div = document.createElement('div');
    div.classList.add('materia');
    div.setAttribute('data-id', materia.id);
    div.innerHTML = `<h3>${materia.nombre}</h3><p>Semestre: ${materia.semestre}</p>`;

    const aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');
    const habilitada = !materia.prereq || materia.prereq.every(id => aprobadas.includes(id));

    if (aprobadas.includes(materia.id)) {
      div.classList.add('aprobada');
    } else if (habilitada) {
      div.classList.add('habilitada');
      div.addEventListener('click', () => aprobarMateria(materia.id));
    }

    malla.appendChild(div);
  });
}

function aprobarMateria(id) {
  let aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');
  if (!aprobadas.includes(id)) {
    aprobadas.push(id);
    localStorage.setItem('aprobadas', JSON.stringify(aprobadas));
    renderMaterias();
  }
}

renderMaterias();