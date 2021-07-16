var audios = ["/risorse/&_-.mp3","/risorse/+++.mp3"]
var i = 1;

audio= new Audio(audios[0])
audio.play();

audio.onended = function() {
    if(i < audios.length){
        audio.src=audios[i];
        audio.play();
        i++;
    }
};
