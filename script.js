var vHisto = document.getElementById("hHistoire");
var vPied = document.getElementById("hPied");
var vQuest = document.getElementById("hQuestion");
var vRep = document.getElementById("hReponse");
var vSaisie = document.getElementById("hTaRep");
var vBtnEnvoi = document.getElementById("hEnvoyer");

// Déclarer un tableau vide vTabRep pour stocker les réponses
var vTabRep = [];

// Implanter l'auditeur de clic du bouton qui déclenchera lireReponse()
vBtnEnvoi.addEventListener("click", lireReponse);

// Appeler la fonction pour poser la première question
poserQuestion(0);

/* poserQuestion() pose la question selon le numéro transmis */
function poserQuestion(numQuest) {
    vRep.style.display = "block";
    vTabRep = vTabRep.slice(0, numQuest);  // Ajuster la taille du tableau
    switch (numQuest) {
        case 0:
            vQuest.innerHTML = "Prêt pour l'aventure ?";
            break;
        case 1:
            vQuest.innerHTML = "Mars ou Terre ?";
            break;
        case 2:
            vQuest.innerHTML = "Risquer ou Rentrer ?";
            break;
        default:
            vQuest.innerHTML = "C'est terminé !";
            vRep.style.display = "none";
            break;
    }
}

/* lireReponse() récupère la saisie, la formate en majuscules, la stocke dans le tableau et appelle continuerHistoire() */
function lireReponse() {
    var repEnCap = vSaisie.value.toUpperCase().trim();  // Correction ici
    vTabRep.push(repEnCap);
    vSaisie.value = "";
    continuerHistoire(vTabRep.length - 1);
}

/* continuerHistoire() affiche un épisode ou une erreur si la saisie est incorrecte */
function continuerHistoire(numRep) {
    switch (numRep) {
        case 0:
            if (vTabRep[0] === "OUI") {
                vHisto.innerHTML = document.getElementById("hRepEpi01").innerHTML;
                poserQuestion(1);
            } else if (vTabRep[0] === "NON") {
                vHisto.innerHTML = document.getElementById("hRepEpi02").innerHTML;
                terminer();
            } else {
                vHisto.innerHTML = "<p>Veuillez répondre par OUI ou NON.</p>";
                poserQuestion(0);
            }
            break;
        case 1:
            if (vTabRep[1] === "MARS") {
                vHisto.innerHTML = document.getElementById("hRepEpi11").innerHTML;
                poserQuestion(2);
            } else if (vTabRep[1] === "TERRE") {
                vHisto.innerHTML = document.getElementById("hRepEpi12").innerHTML;
                terminer();
            } else {
                vHisto.innerHTML = "<p>Veuillez répondre par MARS ou TERRE.</p>";
                poserQuestion(1);
            }
            break;
        case 2:
            if (vTabRep[2] === "RISQUER") {
                vHisto.innerHTML = document.getElementById("hRepEpi21").innerHTML;
                terminer();
            } else if (vTabRep[2] === "RENTRER") {
                vHisto.innerHTML = document.getElementById("hRepEpi22").innerHTML;
                terminer();
            } else {
                vHisto.innerHTML = "<p>Veuillez répondre par RISQUER ou RENTRER.</p>";
                poserQuestion(2);
            }
            break;
        default:
            vHisto.innerHTML = "C'est la fin de l'aventure !";
            break;
    }
}

/* terminer() termine l'histoire et masque le champ de saisie */
function terminer() {
    vHisto.innerHTML += "<p>F I N !!!</p>";
    vQuest.innerHTML = "";
    vRep.style.display = "none";
}
