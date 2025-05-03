const coin = document.getElementById('coin');
const button = document.getElementById('flipBtn');

let currentRotation = 0;

button.addEventListener('click', () => {
  // Detener animación infinita
  coin.style.animation = 'none';
  void coin.offsetWidth;

  // Siempre terminar en la cara (0°)
  currentRotation += 720 + 180;

  // Animar giro hasta la cara
  coin.style.transition = 'transform 5s ease-out';
  coin.style.transform = `rotateY(${currentRotation}deg)`;
});