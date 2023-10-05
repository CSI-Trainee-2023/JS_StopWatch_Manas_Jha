
//element ids from html documnet 
let hours = document.getElementById("hours-text");
let minutes = document.getElementById("minutes-text");
let seconds = document.getElementById("seconds-text");
let milli_seconds = document.getElementById("milli_seconds-text");

let start_button = document.getElementById('start-btn');
let stop_button = document.getElementById('stop-btn');
//-------------------------------------------------

// time variables
let hours_num = 0;
let minutes_num = 0;
let seconds_num = 0;
let milliseconds_num = 0;
// let run ;

start_button.addEventListener('click' , function(){
    run = true;
    timer();
});

stop_button.addEventListener("click" , function(){
    run = false
});





function timer(run){
    while(run){
        milliseconds_num++;

        if(milliseconds_num>60){
            milliseconds_num = 0;
            seconds_num++;
        }
        if(seconds_num > 60){
            seconds_num = 0;
            minutes_num++;
        }

        if(minutes_num > 60){
            minutes_num = 0;
            hours_num++;
        }

        milli_seconds.innerHTML = "" + milliseconds_num;
        seconds.innerHTML = "" + seconds_num;
        minutes.innerHTML = "" + minutes_num;
        hours.innerHTML = "" + hours_num;
        

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