let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrlIcon.classList.contains("pause")){
        song.pause();
        ctrlIcon.classList.remove("pause");
        ctrlIcon.classList.add("play");
    } else {
        song.play();
        ctrlIcon.classList.add("pause");
        ctrlIcon.classList.remove("play");
    }    
}