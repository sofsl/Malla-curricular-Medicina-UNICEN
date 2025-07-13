const contenedor = document.getElementById('contenedor-semestres');

function agruparPorSemestre(lista) {
  const resultado = {};
  lista.forEach(materia => {
    if (!resultado[materia.semestre]) resultado[materia.semestre] = [];
    resultado[materia.semestre].push(materia);
  });
  return resultado;
}

function renderMaterias() {
  contenedor.innerHTML = '';
  const aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');
  const materiasPorSemestre = agruparPorSemestre(materias);

  for (let semestre in materiasPorSemestre) {
    const bloque = document.createElement('div');
    bloque.classList.add('semestre');
    bloque.innerHTML = `<h2>Semestre ${semestre}</h2>`;
    const grid = document.createElement('div');
    grid.classList.add('grid');

    materiasPorSemestre[semestre].forEach(materia => {
      const div = document.createElement('div');
      div.classList.add('materia');
      div.setAttribute('data-id', materia.id);
      div.innerHTML = `<h3>${materia.nombre}</h3><p>Créditos: ${materia.creditos}</p>`;

      const habilitada = !materia.prereq || materia.prereq.every(id => aprobadas.includes(id));

      if (aprobadas.includes(materia.id)) {
        div.classList.add('aprobada');
      } else if (!habilitada) {
        div.classList.add('bloqueada');
      } 
      if (habilitada) {
        div.addEventListener('click', () => toggleMateria(materia.id));
      }

      grid.appendChild(div);
    });

    bloque.appendChild(grid);
    contenedor.appendChild(bloque);
  }
}

function toggleMateria(id) {
  let aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');
  if (aprobadas.includes(id)) {
    aprobadas = aprobadas.filter(m => m !== id);
  } else {
    aprobadas.push(id);
  }
  localStorage.setItem('aprobadas', JSON.stringify(aprobadas));
  renderMaterias();
}

renderMaterias();

document.getElementById('resetear').addEventListener('click', () => {
  localStorage.removeItem('aprobadas');
  renderMaterias();
});
