
//element ids from html documnet 
let hours_time = document.getElementById('hours-text');
let minutes_time = document.getElementById('minutes-text');
let seconds_time = document.getElementById('seconds-text');
let milli_seconds_time = document.getElementById('milli_seconds-text');

let start_button = document.getElementById('start-btn');
let stop_button = document.getElementById('stop-btn');
//-------------------------------------------------

// time variables
let hours_num = 0;
let minutes_num = 0;
let seconds_num = 0;
let milliseconds_num = 0;
// ------------------------------------------------

var run = false;  // boolean variable for stopwatch control

start_button.addEventListener('click' , start)

stop_button.addEventListener("click" , stop)

function start(){
    run = true;
    timer();
}

function stop(){
    run = false;
}



function timer(){
    if(run){
        milliseconds_num++;

        if(milliseconds_num == 60){
            milliseconds_num = 0;
            seconds_num++;
        }
        if(seconds_num == 60){
            seconds_num = 0;
            minutes_num++;
        }

        if(minutes_num == 60){
            minutes_num = 0;
            seconds_num = 0;
            hours_num++;
        }

        milli_seconds_time.innerHTML = "" + milliseconds_num;
        seconds_time.innerHTML = "" + seconds_num;
        minutes_time.innerHTML = "" + minutes_num;
        hours_time.innerHTML = "" + hours_num;

        // document.getElementById('hours-text').innerHTML = "" + hours_num;
        // document.getElementById('minutes-text').innerHTML = "" + minutes_num;;
        // document.getElementById('seconds-text').innerHTML = "" + seconds_num;;
        // document.getElementById('milli_seconds-text').innerHTML = "" + milliseconds_num;

        setTimeout("timer()" ,10);
    }

}





/*
->start button ---> pause button ---> resume button
->stop button ---> lap button ---> reset button
-> hours element
-> minute element
-> seconds element
-> miliseconds element
*/