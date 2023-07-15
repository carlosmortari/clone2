'use strict';

//Encontre o índice do primeiro elemento que satisfaz uma condição mais complexa em um array de objetos. Neste exemplo, vamos encontrar o índice da primeira pessoa com idade entre 20 e 30 anos:

const pessoas = [
    { nome: 'João', idade: 14 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Ana', idade: 18 },
    { nome: 'Carlos', idade: 28 }
]

let indice = pessoas.findIndex(objeto => objeto.idade >=20 && objeto.idade <= 30)

console.log(`O índice da primeira pessoa entre 20 e trinta anos de idade no array é ${indice} e o nome da pessoa é ${pessoas[indice].nome}`)