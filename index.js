// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Le jeu du Shifumi</h1>`;

document.getElementById("btn").addEventListener("click",(event)=>{//Lorsque la boutton est cliqué, ça va faire l'évenement d'à continuation
var index1= document.getElementById('choix1').value;//Je récupère la valeur pour le j1
var index2= document.getElementById('choix2').value;//Je récupère la valeur pour le j2

var result; // on crée variable result qui va prendre les résultats de la comparaison
function compare (index1, index2){//On crée une fonction qui va lancer la comparaison des choix du j1 et du j2
  if (index1==0 && index2==2){
    result= "Joueur 2 a gagné"
  }
  else if (index1==2 && index2==0){
    result= "Joueur 1 a gagné"
  }
  else if (index1==2 && index2==1){
    result= "Joueur 2 a gagné"
  }
  else if (index1==1 && index2==2){
    result= "Joueur 1 a gagné"
  }
  else if (index1==0 && index2==1){
    result= "Joueur 1 a gagné"
  }
  else if (index1==1 && index2==0){
    result= "Joueur 2 a gagné"
  }
  else {
    result= "C'est égal"
  }
  }
document.getElementById('resultat').value = result; //On affiche le résultat
})
