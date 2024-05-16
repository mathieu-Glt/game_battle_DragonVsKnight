/*
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
  La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu)

  Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle.
  Nota : Dans l'exemple correspondant, on ramène min/max à une valeur entière
    min = 5.2 -> 6
    max = 8.3 -> 8

  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
  La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

  Math.floor(5.95) -> 5

  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/ceil
  La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.

  Math.ceil(7.004) -> 8
*/

'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
/*
  Objectif de la fonction

  Eviter une demande de saisie libre sujette à erreurs et compliquée à tester
  La fonction doit pouvoir être utilisée pour n'importe quel besoin

    Proposer à l'utilisateur de saisir un réponse parmi celles attendues

      -> Demander à l'utilisateur de choisir une valeur parmi celles proposées dans le message affiché par prompt()
      -> Tant que l'utilisateur ne saisit pas une des valeurs attendues, représenter le prompt

    Le plus simple est donc que les valeurs soit des nombres entiers, chaque nombre correspondant à un choix explicite, affiché dans le message

    En fonction du la demande, le nombre de réponses possibles peut varier
    Nous savons tester si la réponse est un nombre,
    Reste à voir si ce nombre fait partie des valeurs attendues
      Une piste : les intervalles

  La fonction doit prendre en paramètre :
  Le message affichant les choix correspondants à un nombre à saisir
  L'intervalle entre le numéro du premier chiox et celui du dernier

  Si la valeur est un entier et que cet entier est compris dans l'intervalle, la saisie est correcte !

*/

/**
 * Demande à l'utilisateur un entier entre 2 bornes et retourne cet entier
 * @param {string} message Le message affiché à l'utilisateur dans la boîte de dialogue
 * @param {number} min La borne minimale
 * @param {number} max La borne maximale
 * @returns {number}
 */
// l'appel requestInteger("Choisissez un niveau: 1 = Facile, 2 = Normal et 3 = Difficle", 1, 3) 
// affiche un message demandant à l'utilisateur de choisir un niveau entre 1 et 3, et garantit que la saisie de l'utilisateur 
// est un nombre entier compris entre 1 et 3 avant de le retourner
function requestInteger(message, min, max)
{
    let integer;

     /*
     * do while s'exécute tant que l'entier n'est pas un nombre (fonction isNaN()) ou
     * n'est pas compris entre les arguments min et max -> [min,max].
     */
     do
     {
         // On demande à l'utilisateur de saisir un nombre entier.
         integer = parseInt(window.prompt(message));
     }while(isNaN(integer) || integer < min || integer > max);
   //on retourne integer
   return integer


}

/*
  getRandomInteger(200,250) doit renvoyer un nombre compris entre 200 et 250 inclus
    Le nombre doit se situer dans l'intervalle [200,250]
      -> 51 possibilités = 250 - 200 + 1

  Pour obtenir une valeur sur ces 51 possibilités :
    51 * tirage aléatoire entre [0,1[
      renvoie une valeur flottante comprise dans l'intervalle [0,51[
      en ramenant au plud grand entier inférieur ou égal, on récupère un entier dans [0,50]

  Exemple :
    Si Math.random() renvoie 0.28
      => 51 * 0.28 = 14.28
    Or, le nombre doit être un entier
      => Math.floor(14.28) -> 14
    Et être compris entre 200 et 250
      => 14 + 200 = 214
*/

/**
 * fonction qui génère un nombre entier aléatoire et le retourne compris entre l'intervalle min(inclus) et max(exclus)
 * pour sélectionner le niveau de la partie 
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const result = getRandomInteger(1, 10)
console.log("🚀 ~ result - getRandomInteger:", result)

/**
 * Simule un lancé de dés (throw = jeter / dices = dés )
 * cette focntion va génèrer un nombre de points au joueur et au dragon
 * @param {number} dices - Nombre de dés que l'on souhaite lancer
 * @param {number} sides - Nombre de faces par dé
 * @returns {number} - Le total de la somme des dés
 */
function throwDices(dices, sides)
{
    console.log("🚀 ~ dices:", dices)
    console.log("🚀 ~ sides:", sides)
    // Déclaration des variables locales à la fonction throwDices()
    let sum;

    // Initialisation de la somme des dés à 0
    sum = 0;

    /*
      dices = nombre de jets de dés
      Pour chaque jet de dé, le tirage renvoie un nombre entier compris entre 1 et le nombre de faces du dé
    */
    // Pour chaque jet de dé : un tirage aléatoire compris dans [1,sides] boucle for
    for (let index = 0; index < dices; index++) {
        sum += getRandomInteger(1, sides) //sum = sum + getRandomInteger(1, sides)
        
    }
    //pour 2d6 admettons premier tour il va tirer un dés qui aura en résult 3 donc sum = 0+3 
    //pour le deuxième tour il va tirer 5; du coup sum = 3+5 du coup sum fera 8
    // Retour en résultat de la somme totale des dés
    return sum
}

console.log("lancer de dés", throwDices(2,6))

