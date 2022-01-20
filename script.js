var out=document.getElementById("bpm");
var p1=false;
function metronome(){
    var bpm = document.getElementById("metronome").value;
    out.innerHTML = bpm;
    var status = document.getElementById("btn_play");
    if(status.src="icons8-stop-circled-50.png")
    {
        clearInterval(timer);
        p1 = true;
        play();
    }
    p1 = false;
}
function plus(){
    var bpm = document.getElementById("metronome");
    bpm.stepUp();
    out.innerHTML = bpm.value;
}
function minus(){
    var bpm = document.getElementById("metronome");
    bpm.stepDown();
    out.innerHTML = bpm.value;
}
var audio = new Audio("metronome.wav");
var p = false;
function sound(){
    var bpm = document.getElementById("metronome");
    var status = document.getElementById("btn_play");
    audio.play();
}
var timer;
function play(){
    var status = document.getElementById("btn_play");
    var bpm = document.getElementById("metronome").value;
    if(!p || p1)
    {
        timer = setInterval(sound, 60000 / bpm);
        status.src= "icons8-stop-circled-50.png";
        p = true;
    }
    else
    {
        clearInterval(timer);
        status.src= "icons8-circled-play-50.png";
        p = false;
    }
}

