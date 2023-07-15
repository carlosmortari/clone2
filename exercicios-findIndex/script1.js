'use strict';

//Encontre o índice do primeiro número negativo em um array de números:

let array = [5,4,8,-7,-9]

let indice = array.findIndex(numero => numero < 0)

console.log(`O primeiro número negativo do array é ${array[indice]} e seu índice é [${indice}] `)