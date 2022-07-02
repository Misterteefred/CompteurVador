const bouttonPlus = document.querySelector('#bouttonPlus')
const bouttonMoins = document.querySelector('#bouttonMoins')
const compteur = document.querySelector('#compteur')
const inputInc = document.querySelector('#inputInc')
const inputDec = document.querySelector('#inputDec')
const reset = document.querySelector('#reset')
const zoneDeClic = document.querySelector('#zoneDeClic')
const inputLimiteHaute = document.querySelector ('#inputLimiteHaute')
const inputLimiteBasse = document.querySelector ('#inputLimiteBasse')
const notification = document.querySelector ('.notification')
const notificationTexte = document.querySelector ('#notification-texte')
const bouttonTuto = document.querySelector('#bouttonTuto')
const tuto = document.querySelector('#tuto')
const tutoCroix = document.querySelector('#tutoCroix')



let compteurDeClics = 0


function modifierCompteur(nouvelleValeur){
    if (nouvelleValeur >= inputLimiteHaute.value){
        compteurDeClics = inputLimiteHaute.value;
        compteur.textContent = compteurDeClics;
        notificationLimiteHaute()                


    } else if (nouvelleValeur <= inputLimiteBasse.value){
        compteurDeClics = Number(inputLimiteBasse.value);
        compteur.textContent = compteurDeClics;
        notificationLimiteBasse()

    } else{        
        compteurDeClics = nouvelleValeur;
        compteur.textContent = compteurDeClics;
        compteur.classList.remove('limite-atteinte');
    }    
}
/* Fonction de la notification*/
function notificationLimiteHaute(){  
    notificationTexte.textContent = `Limite haute ${inputLimiteHaute.value} atteinte`    
    notificationTemporaire()
}
function notificationLimiteBasse(){  
    notificationTexte.textContent = `Limite basse ${inputLimiteBasse.value} atteinte`    
    notificationTemporaire()
}

function notificationTemporaire(){
    notification.classList.add('afficher');
    window.setTimeout(function() {
        notification.classList.remove('afficher');
      }, 3000);
    compteur.classList.add('limite-atteinte');
}


// Fonction d'incrémentation
function incrementerCompteur() {
    modifierCompteur(compteurDeClics + Number(inputInc.value));
}
// Fonction d'incrémentation
function decrementerCompteur() {
    modifierCompteur(compteurDeClics - Number(inputDec.value));
}
function fonctionReset(){
    modifierCompteur(0)
    inputDec.value = 1
    inputInc.value = 1
    
}

/* Fonctionnalité d'incrémentation */
bouttonPlus.addEventListener('click', incrementerCompteur);
/* Fonctionnalité de décrémentation */
bouttonMoins.addEventListener('click', decrementerCompteur);
/* Fonctionnalité du RESET */
reset.addEventListener('click', function(){
    fonctionReset();
});

zoneDeClic.addEventListener('click', incrementerCompteur);

zoneDeClic.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    decrementerCompteur();
});


/* Fonctionnalité du compteur de clic via les touches du claviers*/

// let saisieClavier = document.getElementById('compteur');

function clavier(e) {
    if (e.keyCode === 38){
        incrementerCompteur(); //flèche du haut
    } else if (e.keyCode === 40){
        decrementerCompteur(); //flèche du bas
    } else if (e.keyCode === 32){
        fonctionReset(); //barre d'espace  --> reset le compteur ainsi que les "input"
    } else if (e.keyCode === 73){
        inputInc.value = Number(inputInc.value) + 1; //touche "i" du clavier
    } else if (e.keyCode === 68){
        inputDec.value = inputDec.value - 1; //touche "d" du clavier
    }
}

document.addEventListener('keyup', clavier);

/* OU BIEN */

// function clavier(e) {
//   switch(e.keyCode){    
//     case 38 : incrementerCompteur(); break; //flèche du haut
//     case 40 : decrementerCompteur(); break; //flèche du bas
//     case 32 : fonctionReset(); break;		//barre d'espace  --> reset le compteur ainsi que les "input"
//     case 73 : inputInc.value = Number(inputInc.value) + 1; break; //touche "i" du clavier
//     case 68 : inputDec.value = Number(inputDec.value) - 1; break; //touche "d" du clavier
//   }
// }

/*--------------------------------------------------------------*/
/* Molette de la souris pour incrémenter ou décrémenter le compteur */


document.addEventListener('wheel', moletteIncDecCompteur);

function moletteIncDecCompteur(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      incrementerCompteur();
    }
    else {
      decrementerCompteur();
    }
}

/*Ouvre et ferme le tuto via le bouton*/
bouttonTuto.addEventListener('click', afficherLeTuto);

function afficherLeTuto(){
    if (tuto.classList.contains("afficherTuto")){
        tuto.classList.remove('afficherTuto');
    } else{
        tuto.classList.add('afficherTuto');
    }    
}

/* ferme le tuto via la croix*/
tutoCroix.addEventListener('click', fermerLeTuto);
function fermerLeTuto(){
    tuto.classList.remove('afficherTuto');
}

let audio = new Audio("soundfile.wav");

document.onclick = function() {
  audio.play();
}



