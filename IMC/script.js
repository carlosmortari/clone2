'use strict'

let inputPeso = document.querySelector('#peso')
let inputAltura = document.querySelector('#altura')
let btnCalcular = document.querySelector('#btn-calcular')
let mensagemErro = document.querySelector('#mensagem-erro')


const calcularIMC = (p,a) => p / (a*a)

const mostrarIMC = (imc) =>{
    let conteinerPopup = document.querySelector('#conteiner-popup')
    conteinerPopup.classList.add('open')
    let mensagem = conteinerPopup.querySelector('h2')
    let btnFechar = conteinerPopup.querySelector('#btn-fechar')

    btnFechar.onclick = () =>{
        conteinerPopup.classList.remove('open')
    }

    mensagem.textContent = `Seu IMC é ${imc.toFixed(2)}`
}

const zerarInputs = () =>{
    inputPeso.value = ''
    inputAltura.value = ''
}

const fecharErro = () => mensagemErro.classList.remove('open')   

const mostrarErro = () =>{
    mensagemErro.classList.add('open')

    inputPeso.oninput = fecharErro
    inputAltura.oninput = fecharErro
}


btnCalcular.onclick = (e) =>{
    e.preventDefault()
    
    let peso = inputPeso.value
    let altura = inputAltura.value

    if(!peso || !altura){
        mostrarErro()
        return
    }

    let imc = calcularIMC(peso,altura)
    zerarInputs()
    mostrarIMC(imc)


}