const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours ++;
        };
    };

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    };

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    };

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    };


    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

}
  //window.setInterval(stopWatch, 1);

startBtn.addEventListener('click', function() {

      if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch, 100);
        startBtn.innerHTML = `<div class="pause-btn">
        <input type="button" value="Pause">
        </div>`;
        timerStatus = 'started';
      }else{
        window.clearInterval(timerInterval);
        startBtn.innerHTML = `<div class="resume-btn">
        <input type="button" value="Resume">
        </div>`;
        timerStatus = 'stopped';
      }

});

resetBtn.addEventListener('click', function() {

     if(timerStatus = 'started'){
        startBtn.innerHTML = `<div class="start-btn">
        <input type="button" value="Start">
        </div>`;
        timerStatus = 'stopped';
     }

     window.clearInterval(timerInterval);
     seconds = 0;
     minutes = 0;
     hours = 0;

     document.getElementById('timer').innerText = '00:00:00';
});