// Initialize QR code generation when the page loads for the default section (Bitcoin)
document.addEventListener('DOMContentLoaded', () => {
  mostrar('btc', 'btcBtn'); // Show Bitcoin section by default
});

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
    return;
  }

  // Generar el código QR para la dirección correspondiente
  const codeMap = {
    btc: 'btcCode',
    usdt: 'usdtCode',
    eth: 'ethCode',
    pi: 'piCode'
  };
  const qrMap = {
    btc: 'btcQR',
    usdt: 'usdtQR',
    eth: 'ethQR',
    pi: 'piQR'
  };

  const codeElement = document.getElementById(codeMap[id]);
  const qrElement = document.getElementById(qrMap[id]);

  if (codeElement && qrElement) {
    const address = codeElement.innerText;
    // Limpiar el contenedor QR antes de generar uno nuevo
    qrElement.innerHTML = '';
    
    // Verificar si QRCode está definido
    if (typeof QRCode !== 'undefined') {
      try {
        new QRCode(qrElement, {
          text: address,
          width: 150,
          height: 150,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H // Alta corrección de errores
        });
        console.log(`QR code generado para ${id}: ${address}`);
      } catch (err) {
        console.error(`Error al generar QR para ${id}:`, err);
        qrElement.innerHTML = '<p>Error al generar el código QR. Por favor, copia la dirección manualmente.</p>';
      }
    } else {
      console.error('QRCode.js no está cargado');
      qrElement.innerHTML = '<p>Error: No se pudo cargar el generador de QR. Por favor, copia la dirección manualmente.</p>';
    }
  } else {
    console.error(`No se encontró el elemento de código o QR para ID: ${id}`);
    qrElement.innerHTML = '<p>Error: No se pudo generar el código QR.</p>';
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