'use strict';

//Encontre o índice do primeiro elemento em um array de strings que começa com a letra "A":

let array = ['html', 'css' , 'javascript' , 'apple' , 'mobile']

let indice = array.findIndex(elemento => elemento[0] == 'a')
console.log(`O índice do primeiro elemento no array que começa com a letra A é ${indice}, e a palavra é ${array[indice]}`)