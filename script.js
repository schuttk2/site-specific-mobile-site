let startTime;
let count = 0;

const button = document.getElementById('challengeButton');
const resultText = document.getElementById('result');

button.addEventListener('click', () => {
  if (!startTime) {
    startTime = new Date().getTime();
    count = 0;
    resultText.textContent = 'Challenge in progress...';
    button.textContent = 'Press Me!';
    startCountdown();
  } else {
    count++;
    button.textContent = `Pressed ${count} times`;
  }
});

function startCountdown() {
  setTimeout(() => {
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; // in seconds
    const pressesPerSecond = (count / elapsedTime);

    resultText.innerHTML = `
      <p>Challenge completed!</p>
      <p>You pressed the button ${count} times in 60 seconds.</p>
      <p>Average presses per second: ${pressesPerSecond.toFixed(2)}</p>
    `;

    startTime = null;
  }, 60000); // 1 minute
}