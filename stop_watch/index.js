const timerEl = document.querySelector('.timer');
const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
const resetEl = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;


const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.innerHTML = formateTime(elapsedTime);
    },10);
    startEl.disabled = true;
    stopEl.disabled = false;
    
} 


const formateTime = (elapsedTime) => { 
    let miliSec = Math.floor((elapsedTime % 1000)/10);
    let seconds = Math.floor((elapsedTime % (1000*60)) /1000);
    let minutes = Math.floor((elapsedTime % (1000*60*60)) /(1000*60));
    let hours = Math.floor((elapsedTime % (1000*60*60)) /(1000*60*60));

    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    miliSec = miliSec >9 ? miliSec : '0' + miliSec; 
    return hours+" : "+ minutes+" : " + seconds+"."+miliSec;
}

const stopTimer = () => {
    clearInterval(timerInterval);
    startEl.disabled = false;
    stopEl.disabled = true;
}

const resetTimer = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.innerHTML = formateTime(elapsedTime); 
    startEl.disabled = false;
    stopEl.disabled = true;
}


startEl.onclick = () => {
  startTimer();
}

stopEl.onclick = () => {
    stopTimer();
}

resetEl.onclick = () => {
    resetTimer();
}