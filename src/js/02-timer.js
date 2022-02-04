// commonjs
// const flatpickr = require("flatpickr");

// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";
// Описан в документации
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector("[data-start]");
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
       let number = options.defaultDate.getTime()
       let numberSecond = selectedDates[0].getTime()
       let ms = selectedDates[0] - this.defaultDate
       if (number > numberSecond) {
           window.alert('Please choose a date in the future')
           startBtn.setAttribute('disabled', false);
      }
       if (number < numberSecond) {
          startBtn.removeAttribute('disabled');
      }
      
        
    },
  
};
flatpickr("input#datetime-picker", options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
