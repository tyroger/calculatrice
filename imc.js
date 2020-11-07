
/* calculer l'indice IMC */ 

//définir le poids en kg
let poids = prompt("quel est votre poids? (en Kg) ");

// definir la taille en cm
let taille = prompt("quel est votre taille (en cm) ");


//créer le calculateur
function calculerIMC(poids,taille) {

    let tailleEnMetre = taille /100;
    let tailleCalculee = Math.pow(tailleEnMetre, 2);
    let result = poids / tailleCalculee;

    return result;
}

alert(calculerIMC(poids,taille));
