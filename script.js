function mostrar(id, botonId) {
    const secciones = document.querySelectorAll('.crypto-data');
    secciones.forEach(seccion => seccion.style.display = 'none');
  
    document.getElementById(id).style.display = 'block';
  
    const botones = document.querySelectorAll('.crypto-selector li a');
    botones.forEach(boton => {
      boton.classList.remove('active-btc', 'active-usdt', 'active-eth');
    });
  
    const botonActivo = document.getElementById(botonId);
    if (id === 'btc') {
      botonActivo.classList.add('active-btc');
    } else if (id === 'usdt') {
      botonActivo.classList.add('active-usdt');
    } else if (id === 'eth') {
      botonActivo.classList.add('active-eth');
    }
  }
  
  function copiarAlPortapapeles(idElemento) {
    const texto = document.getElementById(idElemento).innerText;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Código copiado al portapapeles.");
    });
  }
  