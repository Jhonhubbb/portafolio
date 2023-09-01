const verMasButton = document.getElementById('verMas');
const contenidoAdicional = document.getElementById('contenidoAdicional');

verMasButton.addEventListener('click', () => {
  contenidoAdicional.classList.toggle('hidden');
  if (contenidoAdicional.classList.contains('hidden')) {
    verMasButton.textContent = 'Ver más';
  } else {
    verMasButton.textContent = 'Ocultar';
  }
});

