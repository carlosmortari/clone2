'use strict';

//Encontre o índice do primeiro número par em um array de números:

let array = [5,7,3,9,4]

let indice = array.findIndex(elemento => elemento%2 ==0)

console.log(`O índice do primeiro número par do array é [${indice}] e o número é ${array[indice]}`)