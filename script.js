let titulo = document.querySelector('h1');

titulo.innerHTML = 'Jogo do numero secreto';

let titulo = document.querySelector('p'); 

paragrafo.innerHTML = 'Quero dormir';

function iniciarJogo(){
    let num1 = parseInt(prompt("Digite o primeiro numero inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo numero inteiro:"));


    let resultado = num1 + num2;
    alert("A soma dos numeros é: " + resultado);
}