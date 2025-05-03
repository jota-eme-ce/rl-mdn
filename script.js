const coin = document.getElementById('coin');
const button = document.getElementById('flipBtn');

const message = document.createElement('div');
message.innerHTML = "<span class='typing-text'>¡El año que viene habrá un capillo rojo más!</span>";
message.classList.add('reveal-message');
message.style.textAlign = "center";
message.style.display = "none";
document.querySelector('.container').appendChild(message);

let currentRotation = 0;

button.addEventListener('click', () => {
  coin.style.animation = 'none';
  void coin.offsetWidth;

  // Para terminar en la cruz: +180
  currentRotation += 720;

  coin.style.transition = 'transform 7s ease-out';
  coin.style.transform = `rotateY(${currentRotation}deg)`;

  setTimeout(() => {
    message.style.display = "block";
    const textSpan = message.querySelector('.typing-text');
    textSpan.style.animation = 'typing 3s steps(40, end) forwards, blink-caret 0.75s step-end infinite';
  }, 5000);
});