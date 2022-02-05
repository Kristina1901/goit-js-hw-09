import flatpickr from 'flatpickr';
require("flatpickr/dist/themes/dark.css");
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';


const dayVl = document.querySelector('[data-days]');
const hourVl = document.querySelector('[data-hours]');
const minVl = document.querySelector('[data-minutes]');
const secVl = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute('disabled', 'disabled');
const timeInput = document.querySelector('#datetime-picker');


Notiflix.Notify.info('Pick a date');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {   
    if(selectedDates[0]-options.defaultDate>0){
        const THE_DATE = selectedDates[0];
        startBtn.removeAttribute('disabled'); 

        startBtn.addEventListener('click', ()=>{
        startBtn.setAttribute('disabled', 'disabled');
          Notiflix.Notify.success('Date successfully selected.Commencing the countdown');
         
        setInterval(()=>{
          const diff = THE_DATE.getTime()-Date.now();
            if(diff>=0){
              const {days, hours, minutes, seconds } = convertMs(diff);
              dayVl.textContent = days, hourVl.textContent = hours, minVl.textContent = minutes, secVl.textContent = seconds;
            } else {
              btn.removeAttribute('disabled'); 
              return};

          },1000);
           
        })}   

    else{
      Notiflix.Notify.failure("Please choose a date in the future");
    } 
  },
};
flatpickr(timeInput, options);
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addedZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addedZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes =addedZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addedZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };

  }
  function addedZero (value){
   return value.toString().padStart(2, 0);
  }
