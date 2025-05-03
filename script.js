const coin = document.getElementById('coin');
const button = document.getElementById('flipBtn');

const message = document.createElement('div');
message.textContent = "¡!";
message.classList.add('reveal-message');
message.style.display = "none";
document.querySelector('.container').appendChild(message);

let currentRotation = 0;

button.addEventListener('click', () => {
  coin.style.animation = 'none';
  void coin.offsetWidth;

  // Para terminar en la cruz: +180
  currentRotation += 720 + 180;

  coin.style.transition = 'transform 5s ease-out';
  coin.style.transform = `rotateY(${currentRotation}deg)`;

  setTimeout(() => {
    message.style.display = "block";
    message.classList.remove('reveal-message');
    void message.offsetWidth;
    message.classList.add('reveal-message');
  }, 5000);
});