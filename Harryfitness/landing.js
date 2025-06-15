


let timeLeft = 1800; // in seconds
const timerDisplay = document.getElementById("timer");

const timerInterval = setInterval(() => {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  timerDisplay.textContent = `${mins}:${secs}`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
  }
}, 1000);

