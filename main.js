"use strict";

/**
 * Déclaration des variables :
 */
let choixOperation;
let numberA;
let numberB;


function start() {
    
    /**
     * demande du choix de l'operation : 
     */
    choixOperation = parseInt(prompt("Choisir une opération : \n" +
        "1 - Addition \n" +
        "2 - Soustraction \n" +
        "3 - Multiplication \n" +
        "4 - Division \n"
    ));


    /**
     * demande de deux chiffres concernés :
     */
    if (choixOperation) {
        numberA = parseInt(prompt("Choix 1ère valeur : "));
        numberB = parseInt(prompt("Choix 2ème valeur : "));
        calcul();
    }

}

start();



/**
 * les fonctions de calculs
 */
function addition() {
    let result = (numberA + numberB);
    return alert(numberA + " + " + numberB + " = " + result);
};

function soustraction() {
    let result = (numberA - numberB);
    return alert(numberA + " - " + numberB + " = " + result);
};

function multiplication() {
    let result = (numberA * numberB);
    return alert(numberA + " * " + numberB + " = " + result);
};

function division() {
    if (numberB === 0) {
        alert("division par zéro impossible");
    } else {
        let result = (numberA / numberB);
        return alert(numberA + " / " + numberB + " = " + result);
    }
};


/**
 * gestion du choix de l'opération 
 */
function calcul() {
    switch (choixOperation) {
        case 1:
            addition();
            break;
        case 2:
            soustraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            division();
            break;
        default:
            break;
    }
}