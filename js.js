function play(){
    var audios = [];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    const a = ["/risorse/A_ammirazione.mp3", "/risorse/A_baby.mp3", "/risorse/A_buo.mp3", "/risorse/A_buoo.mp3",
        "/risorse/A_cosa.mp3", "/risorse/A_dolore_disperazione.mp3", "/risorse/A_donna.mp3", "/risorse/A_uomo.mp3",
        "/risorse/A_urlo.mp3", "/risorse/A_voc.mp3", "/risorse/A_volpe.mp3"];
    const b = ["/risorse/B_bad.mp3", "/risorse/B_bocca.mp3", "/risorse/B_cassa.mp3", "/risorse/B_ospedale.mp3",
        "/risorse/B_robot.mp3", "/risorse/B_sveglia.mp3", "/risorse/B_uomo.mp3"];
    const sound = [a, b];
    let text = "     a    bBAabababababbababaBbB          ";
    text = text.trim();
    text = text.toLowerCase();

    for (let e of text) {
        for(let l of alphabet) {
            if (e == l) {
                let index = alphabet.indexOf(l);
                let i = Math.floor(Math.random() * sound[index].length);
                let m = sound[index];
                audios.push(m[i]);
            }
        }
    }

    var i = 1;

    audio= new Audio(audios[0]);
    audio.play();

    audio.onended = function() {
        if(i < audios.length){
            audio.src=audios[i];
            audio.play();
            i++;
        }
    }

}