var ms = 0 , s = 0 , m = 0 ;
var timer = 0 ;

var stopwatchEl = document.querySelector('.stopwatch') ;
var lapsContainer = document.querySelector('.laps') ;

function start(){
    if (!timer){
        timer = setInterval(run, 10);
    }
}

function getTimer(){
    return (m < 10? "0"+m : m ) + ":" + (s < 10? "0"+s: s) + ":" + (ms < 10? "0"+ms : ms) ;
}

function run(){
    stopwatchEl.textContent = getTimer();
    ms++;
    if (ms == 100 ){
        ms = 0 ;
        s++;
    }
    if (s == 60){
        s = 0;
        m++;
    }
}

function stopTimer(){
    clearInterval(timer);
    timer = false;
}

function pause(){
    stopTimer();
}

function stop(){
    stopTimer();
    ms = 0;
    s = 0 ; 
    m = 0;
    stopwatchEl.textContent = getTimer();
}

function restart(){
    stop();
    start();
    resetLaps();
}

n = 0
function lap(){
    if (timer) {
        n++;
        var li = document.createElement('li');
        li.innerText = n +") "+getTimer();
        lapsContainer.appendChild(li);
    }
}

function resetLaps(){
    lapsContainer.innerHTML = '';
    n = 0;
}