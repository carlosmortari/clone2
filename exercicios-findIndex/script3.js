'use strict';

//Encontre o índice do primeiro objeto em um array de objetos que possui uma propriedade específica:

let array = [
    {
        nome:'João',
        idade:20
    },

    {
        nome:'Maria',
        idade:30
    }
]

let indice = array.findIndex(elemento => elemento.idade == 30)

console.log(`O indice do elemento que tem a idade igual a 30 é [${indice}]`)