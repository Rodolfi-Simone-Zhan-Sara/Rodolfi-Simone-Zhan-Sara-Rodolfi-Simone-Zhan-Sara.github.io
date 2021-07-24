function play(){
    var audios = [];
    const eCommerciale = "/risorse/&_-.mp3";
    const più = "/risorse/+++.mp3";
    const a = ["/risorse/A_ammirazione.mp3","/risorse/A_baby.mp3","/risorse/A_buo.mp3","/risorse/A_buoo.mp3","/risorse/A_cosa.mp3","/risorse/A_dolore_disperazione.mp3","/risorse/A_donna.mp3","/risorse/A_uomo.mp3","/risorse/A_urlo.mp3","/risorse/A_voc.mp3","/risorse/A_volpe.mp3"];
    const è = "/risorse/Accento_E.mp3";
    const ì = "/risorse/Accento_I.mp3";
    const b = ["/risorse/B_bad.mp3","/risorse/B_bocca.mp3","/risorse/B_cassa.mp3","/risorse/B_ospedale.mp3","/risorse/B_robot.mp3","/risorse/B_sveglia.mp3","/risorse/B_uomo.mp3"];
    const c = ["/risorse/C_microfono.mp3","/risorse/C_nicki.mp3","/risorse/C_tosse.mp3","/risorse/C_uomo.mp3"];
    const d = ["/risorse/D_campana.mp3","/risorse/D_clarinetto.mp3","/risorse/D_piano.mp3","/risorse/D_treno.mp3","/risorse/D_uomo.mp3","/risorse/D_uomo.mp3","/risorse/D_zombie.mp3"];
    const e = ["/risorse/E_lungo.mp3","/risorse/E_metal.mp3","/risorse/E_panda.mp3","/risorse/E_pecora.mp3","/risorse/E_robot.mp3","/risorse/E_scam.mp3","/risorse/E_voc.mp3"];
    const interrogativo = ["/risorse/DOMANDA.mp3","/risorse/DOMANDA2.mp3","/risorse/DOMANDA3.mp3","/risorse/DOMANDA4.mp3","/risorse/DOMANDA5.mp3","/risorse/DOMANDA6.mp3"];
    const esclamativo = ["/risorse/ESCLAMAZIONE1.mp3","/risorse/ESCLAMAZIONE2.mp3"];
    const valuta = ["/risorse/EURO_DOLLARI_STERLINE.mp3", "/risorse/EURO_ECC.mp3"];
    const f = ["/risorse/F_aspirapolvere.mp3","/risorse/F_fischio.mp3","/risorse/F_tosse.mp3"];
    const g = ["/risorse/G_giao.mp3","/risorse/G_metal.mp3","/risorse/G_uomo.mp3"];
    const h = ["/risorse/H_catarro.mp3","/risorse/H_covid.mp3","/risorse/H_sorriso.mp3","/risorse/H_uomo.mp3"];
    const i = ["/risorse/I_bambina.mp3","/risorse/I_cirillico.mp3","/risorse/I_meme.mp3","/risorse/I_paradiso.mp3","/risorse/I_rutto.mp3","/risorse/I_uccello.mp3","/risorse/I_uomo.mp3","/risorse/I_voc.mp3"];
    const j = ["/risorse/J_basso.mp3","/risorse/J_francese.mp3","/risorse/J_sing.mp3","/risorse/J_uomo.mp3","/risorse/J_video.mp3"];
    const k = ["/risorse/K_papera.mp3","/risorse/K_pappagallo.mp3","/risorse/K_risata.mp3","/risorse/K_vino.mp3","/risorse/K_vocale.mp3"];
    const l = ["/risorse/L_acuto.mp3","/risorse/L_lazy.mp3","/risorse/L_meme.mp3"];
    const m = ["/risorse/M_buo.mp3","/risorse/M_canzone.mp3","/risorse/M_mucca1.mp3","/risorse/M_mucca2.mp3","/risorse/M_uomo.mp3"];
    const n = ["/risorse/N_donna.mp3","/risorse/N_no.mp3","/risorse/N_uomo.mp3","/risorse/N_voice.mp3"];
    const o = ["/risorse/O_baby.mp3","/risorse/O_buo.mp3","/risorse/O_errore.mp3","/risorse/O_metal.mp3","/risorse/O_paradiso.mp3","/risorse/O_rana.mp3","/risorse/O_uomo.mp3"];
    const punto = "/risorse/PUNTO.mp3";
    const p = ["/risorse/P_bambino.mp3","/risorse/P_donna.mp3","/risorse/P_forte.mp3","/risorse/P_period.mp3","/risorse/P_uomo.mp3"];
    const q = ["/risorse/Q_donna.mp3","/risorse/Q_orchestra.mp3","/risorse/Q_papera.mp3"];
    const r = ["/risorse/R_cardi.mp3","/risorse/R_papera.mp3","/risorse/R_rrr.mp3","/risorse/R_russo.mp3"];
    const s = ["/risorse/S_buo.mp3","/risorse/S_donna.mp3","/risorse/S_ragazza.mp3","/risorse/S_silenzio.mp3","/risorse/S_slide.mp3","/risorse/S_spray.mp3","/risorse/S_taci.mp3","/risorse/S_tappo.mp3"];
    const tilde = ["/risorse/TILDE.mp3", "/risorse/TILDE2.mp3", "/risorse/TILDE3.mp3"];
    const t = ["/risorse/T_depresso.mp3","/risorse/T_paradiso.mp3","/risorse/T_polizia.mp3","/risorse/T_sputo.mp3"];
    const u = ["/risorse/U_caduta.mp3","/risorse/U_cibo.mp3","/risorse/U_clarinetto.mp3","/risorse/U_giraffa.mp3","/risorse/U_musicale.mp3","/risorse/U_polizia.mp3","/risorse/U_sonno.mp3","/risorse/U_sorpreso.mp3","/risorse/U_video.mp3","/risorse/U_zanzara.mp3"];
    const silenzio = "/risorse/VIRGOLA_SPAZIO_PUNTOVIRGOLA_DUEPUNTI.mp3";
    const v = ["/risorse/V_bimba.mp3","/risorse/V_have.mp3","/risorse/V_sound.mp3"];
    const w = ["/risorse/W_donna.mp3","/risorse/W_felice.mp3","/risorse/W_perche.mp3","/risorse/W_uomo.mp3","/risorse/W_vino.mp3"];
    const x = ["/risorse/X_aprire.mp3","/risorse/X_bambina.mp3","/risorse/X_eco.mp3"];
    const y = ["/risorse/Y_bambina.mp3","/risorse/Y_yellow.mp3"];
    const z = ["/risorse/Z_imita_zanzara.mp3","/risorse/Z_uomo.mp3","/risorse/Z_uomo2.mp3","/risorse/Z_voc.mp3","/risorse/Z_vocale.mp3"];
    const virgolette = "/risorse/virgolette.mp3";

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",'""',","," ",";",":","~",".","£","€","$","!","?","ì","è","é","ù","ò","à","+","&","-"];
    const sound = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, w, x, y, z,virgolette,silenzio,silenzio,silenzio,silenzio,tilde,punto,valuta,valuta,valuta,esclamativo,interrogativo,ì,è,è,u,o,a,più,eCommerciale,eCommerciale];

    const egg = ["/risorse/Egg_ayayay.mp3","/risorse/Egg_bolle_bocca.mp3","/risorse/Egg_compleanno.mp3","/risorse/Egg_fortuna.mp3","/risorse/Egg_haha_canzone.mp3","/risorse/Egg_hehehe.mp3","/risorse/Egg_kling.mp3","/risorse/Egg_maialone_voc.mp3","/risorse/Egg_meditazione.mp3","/risorse/Egg_morte.mp3","/risorse/Egg_mostro.mp3","/risorse/Egg_natale.mp3","/risorse/Egg_orologio.mp3","/risorse/Egg_polizia_sirena.mp3","/risorse/Egg_rompiscatole.mp3","/risorse/Egg_tamburello.mp3","/risorse/Egg_ttt.mp3","/risorse/Egg_wow_donna.mp3","/risorse/Egg_www_uomo.mp3","/risorse/Egg_yay_funny.mp3","/risorse/Egg_ysml_song.mp3"];
    const egg_nome = ["ayayay","pop","compleanno","mi sento fortunato","sorridi","hehehe","pulito","sclero","meditazione","mood di oggi","studio","natale","tic tac","sirena","dolce armonia","tamburello","minigun","wow","www","yay","ysml"];
 
    let text = "abcdjgahkjgfaj g";
    text = text.trim();
    text = text.toLowerCase();

    for (let e of text) {
        for(let l of alphabet) {
            if (e == l) {
                console.log(l);
                let index = alphabet.indexOf(l);
                let i = Math.floor(Math.random() * sound[index].length);
                let list =  sound[index]
                audios.push(list[i]);
                console.log(list[i])
            }
        }
        console.log("ciclato")        
    }

    var indice = 1;

    audio= new Audio(audios[0]);
    audio.play();

    audio.onended = function() {
        if(indice < audios.length){
            audio.src = audios[indice];
            audio.play();
            indice++;
        }
    }

}