// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Le jeu du Shifumi</h1>`;

document.getElementById("btn").addEventListener("click",(event)=>{//Lorsque la boutton est cliqué, ça va faire l'évenement d'à continuation
var index1= document.getElementById('choix1').value;//Je récupère la valeur pour le j1
var index2= document.getElementById('choix2').value;//Je récupère la valeur pour le j2
console.log([index1, index2])//afficher les choix dans la console


if (index1 === index2){ //faire le comparatif pour chaque choix
  document.getElementById("resultat").innerText = "Egalité" //afficher les résultats pour chaque choix
}else if (index1=="Pierre" && index2=="Papier"){
     document.getElementById("resultat").innerText = "Joueur 2 a gagné"
  }
  else if (index1=="Papier" && index2=="Pierre"){
    document.getElementById("resultat").innerText = "Joueur 1 a gagné"
  }
  else if (index1=="Papier" && index2=="Ciseaux"){
    document.getElementById("resultat").innerText = "Joueur 2 a gagné"
  }
  else if (index1=="Ciseaux" && index2=="Papier"){
    document.getElementById("resultat").innerText = "Joueur 1 a gagné"
  }
  else if (index1=="Pierre" && index2=="Ciseaux"){
    document.getElementById("resultat").innerText = "Joueur 1 a gagné"
  }
  else if (index1=="Ciseaux" && index2=="Pierre"){
    document.getElementById("resultat").innerText = "Joueur 2 a gagné"
  }

})

//pour ne pas à avoir a copier coller le document.getElementById pour chaque choix: 
//let result="" //on déclare variable
//if (idem que dans le code)
//mais changer le document.getEl.... par result="Egalité" et etc. //pour lui dire à quoi correspond
//document.getElementById("resultat").innerText = result  pour afficher
//let result = ""  
//if (index1 === index2){ //faire le comparatif pour chaque choix
//  result = "Egalité" //afficher les résultats pour chaque choix
//}else if (index1=="Pierre" && index2=="Papier"){
//     result = "Joueur 2 a gagné"
//  }
//  else if (index1=="Papier" && index2=="Pierre"){
//    result = "Joueur 1 a gagné"
//  }
//  else if (index1=="Papier" && index2=="Ciseaux"){
//    result = "Joueur 2 a gagné"
//  }
//  else if (index1=="Ciseaux" && index2=="Papier"){
//    result = "Joueur 1 a gagné"
//  }
//  else if (index1=="Pierre" && index2=="Ciseaux"){
//    result = "Joueur 1 a gagné"
//  }
//  else if (index1=="Ciseaux" && index2=="Pierre"){
//    result = "Joueur 2 a gagné"
//  }
//result = result
//})