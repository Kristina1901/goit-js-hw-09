const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;
const body = document.body;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let color;
startBtn.addEventListener("click", (event) => {
  timerId = setInterval(() => {
      color = body.style.backgroundColor = getRandomHexColor()
  }, 1000);
    if (startBtn === event.currentTarget) {
        startBtn.setAttribute('disabled', false);
        stopBtn.removeAttribute('disabled');
      }
});


stopBtn.addEventListener("click", (event) => {
  clearInterval(timerId);
    body.style.backgroundColor = color;
     if (stopBtn === event.currentTarget) {
        stopBtn.setAttribute('disabled', false);
        startBtn.removeAttribute('disabled');
      }
});
