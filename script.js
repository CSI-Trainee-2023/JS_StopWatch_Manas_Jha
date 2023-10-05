
//element ids from html documnet 
let hours_time = document.getElementById('hours-text');
let minutes_time = document.getElementById('minutes-text');
let seconds_time = document.getElementById('seconds-text');
let milli_seconds_time = document.getElementById('milli_seconds-text');

let start_button = document.getElementById('button1');
let stop_button = document.getElementById('button2');
//-------------------------------------------------

// time variables
let hours_num = 0;
let minutes_num = 0;
let seconds_num = 0;
let milliseconds_num = 0;
// ------------------------------------------------

var run = false;  // boolean variable for stopwatch control
//-------------------------------------------------

var start_btn = true; // boolean for start button 
var pause_btn = false; // boolean for pause button
var resume_btn = false; // boolean for resume button
var reset_btn = true; // boolean for stop button



start_button.addEventListener('click' , function(){
    if(start_btn==true){
        start_timer();// calling start function
    }
    else if (pause_btn == true){
        pause_timer(); // calling pause function

    }
    else if(resume_btn == true){
        resume_timer(); // calling resume function
    }
});

stop_button.addEventListener("click" , function(){
    if(reset_btn == true){
        reset_timer();
    }

})

function start_timer(){
    run = true; 
    start_btn = false; // start button state->off
    pause_btn = true; // pause button state-> on
    reset_btn = false; // stop button state-> off

    start_button.innerHTML = "pause"; // 'start' text -> 'puase' text
    stop_button.innerHTML = "Lap"; // 'stop' text -> 'Lap' text

    timer();
}

function reset_timer(){
    run = false;

    start_btn = true ; // start button state -> on
    
    start_button.innerHTML = "Start"; // 'resume' text -> 'start' text
    
    hours_num=0;
    minutes_num=0;
    seconds_num=0;
    milliseconds_num=0;
    milli_seconds_time.innerHTML = "" + milliseconds_num;
    seconds_time.innerHTML = "" + seconds_num;
    minutes_time.innerHTML = "" + minutes_num;
    hours_time.innerHTML = "" + hours_num;
}

function pause_timer(){
    run = false;

    pause_btn = false; // pause button state -> off
    resume_btn = true; // resume button state -> on
    reset_btn = true; // stop button state -> on

    start_button.innerHTML = "resume"; // 'pause' text -> 'resume' text
    stop_button.innerHTML = "reset"; // 'Lap' text -> 'Reset' text
}

function resume_timer(){
    run = true;

    pause_btn = true; // pause button state -> on
    resume_btn = false; // resume button state -> off\
    stop_btn = false; // stop button state -> off

    start_button.innerHTML = "pause"; // 'resume' text -> 'pause' text
    stop_button.innerHTML = "Lap"; // 'reset' text -> 'Lap' text

    timer();
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