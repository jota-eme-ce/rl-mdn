const coin = document.getElementById('coin');
const button = document.getElementById('flipBtn');

let currentRotation = 0;

const lanzarMoneda = () => {
  // Detener el giro infinito
  coin.style.animation = 'none';
  void coin.offsetWidth; // forzar reflujo

  // Calcular nueva rotación (720º más para cada lanzamiento)
  currentRotation += 720;

  // Lanzar animación que termina siempre en la cara (0º)
  coin.style.transition = 'transform 5s ease-out';
  coin.style.transform = `rotateY(${currentRotation}deg)`;
};

button.addEventListener('click', lanzarMoneda);