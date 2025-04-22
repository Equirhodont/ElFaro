// script.js - El Faro

// Contador de artículos
let contador = 3;

// Función para mostrar reloj y fecha en vivo con formato completo
function iniciarReloj() {
  const reloj = document.getElementById('reloj');
  if (reloj) {
    setInterval(() => {
      const ahora = new Date();
      const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const fecha = ahora.toLocaleDateString('es-CL', opcionesFecha);
      const hora = ahora.toLocaleTimeString('es-CL');
      reloj.textContent = `${fecha} - ${hora}`;
    }, 1000);
  }
}

// Esperar a que el DOM cargue
window.addEventListener('DOMContentLoaded', () => {
  iniciarReloj();

  // Manejo del formulario de carga dinámica
  const form = document.getElementById('formulario');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const titulo = document.getElementById('titulo').value;
      const contenido = document.getElementById('contenido').value;

      if (titulo && contenido) {
        const nuevaColumna = document.createElement('div');
        nuevaColumna.className = 'col';
        nuevaColumna.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
              <p class="card-text">${contenido}</p>
              <a href="#" class="btn btn-sm btn-outline-primary">Leer</a>
            </div>
          </div>
        `;
        document.querySelector('.row.row-cols-1.row-cols-md-3')?.appendChild(nuevaColumna);

        contador++;
        alert(`Artículo agregado exitosamente. Total: ${contador}`);

        form.reset();
      } else {
        alert('Por favor completa todos los campos.');
      }
    });
  }
});
