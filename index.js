const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const milliseconds = now.getMilliseconds().toString().padStart(3, 0)
  const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  clock.textContent = time;
}

updateClock();
setInterval(updateClock, 100);
