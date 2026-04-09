/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
 nome e peso.
Stampare a schermo la bici con peso minore.*/

'use strict';

//creato array oggetti bici
const bici = [
    {
        nome: "bici0",
        peso: 10,
    },
    {
        nome: "bici1",
        peso: 20,
    },
    {
        nome: "bici2",
        peso: 5,
    },
    {
        nome: "bici3",
        peso: 15
    }
];

//creato variabile per bici più leggera
let bici_leggera = bici[0];

//ciclo for per confrontare peso bici
for (let i = 1; i < bici.length; i++) {
    //confronto peso bici
if (bici[i].peso < bici_leggera.peso) {
    //assegno bici più leggera
    bici_leggera = bici[i];
} //stampo bici leggera con peso
} console.log(bici_leggera.peso);
