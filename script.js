// fetching elements
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// needed variables
let hr = 00;
let min = 00;
let sec = 00;
let timer = false;


// event perform when click on start button
start.addEventListener('click', () => {
    start.style.background = 'grey';
    start.style.color = 'black';
    timer = true;
    stopWatch();
});

// event perform when click on stop button
stop.addEventListener('click', () => {
    stop.style.background = 'grey';
    stop.style.color = 'black';
    start.style.background = 'rgb(6, 6, 60)';
    start.style.color = 'yellow';
    setTimeout(() => {
        stop.style.background = 'rgb(6, 6, 60)';
        stop.style.color = 'yellow';
    }, 200);
    timer = false;
});

// event perform when click on reset button 
reset.addEventListener('click', () => {
    reset.style.background = 'grey';
    reset.style.color = 'black';
    start.style.background = 'rgb(6, 6, 60)';
    start.style.color = 'yellow'; 
    setTimeout(() => {
        reset.style.background = 'rgb(6, 6, 60)';
        reset.style.color = 'yellow';
    }, 200);
    timer = false;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    hr = 00;
    min = 00;
    sec = 00;
});

let stopWatch = () => {
    if(timer){
        sec++;
        if(sec == 60) {
            min++;
            sec = 0;
        }

        if(min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        // using string for proper visible by adding below 10 number 0
        // some variabls to help in 
        let hr_Out = hr;
        let min_Out = min;
        let sec_Out = sec;

        if(hr < 10) {
            hr_Out = `0${hr}`; 
        }

        if(min < 10){
            min_Out = `0${min}`;
        }

        if(sec < 10){
            sec_Out = `0${sec}`;
        }

        hour.innerHTML = hr_Out;
        minute.innerHTML = min_Out;
        second.innerHTML = sec_Out;

        // every second of interval function get call
        setTimeout(stopWatch, 1000);
    }
}