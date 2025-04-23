function mostrar(id, botonId) {
  // Ocultar todas las secciones de datos de criptomonedas
  const secciones = document.querySelectorAll('.crypto-data');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  // Mostrar la sección correspondiente
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.style.display = 'block';
  } else {
    console.error(`No se encontró la sección con ID: ${id}`);
    return;
  }

  // Quitar la clase 'active' de todos los botones
  const botones = document.querySelectorAll('.crypto-selector li a');
  botones.forEach(boton => {
    boton.classList.remove('active');
  });

  // Agregar la clase 'active' al botón correspondiente
  const botonActivo = document.getElementById(botonId);
  if (botonActivo) {
    botonActivo.classList.add('active');
  } else {
    console.error(`No se encontró el botón con ID: ${botonId}`);
  }
}

function copiarAlPortapapeles(idElemento) {
  const elemento = document.getElementById(idElemento);
  if (elemento) {
    const texto = elemento.innerText;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Código copiado al portapapeles.");
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  } else {
    console.error(`No se encontró el elemento con ID: ${idElemento}`);
  }
}