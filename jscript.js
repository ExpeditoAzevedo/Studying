'use strict';

//VARIAVEIS
let somaMussarela = 0;
let somaCalabresa = 0;
let somaMista = 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaMista = 0.00;

let btnAdicionar = document.getElementById('adicionar');
let btnRemover = document.getElementById('remover');
let btnPlanilha = document.getElementById('planilha');

//EVENTOS
btnAdicionar.addEventListener('click',adicionar,false);
btnRemover.addEventListener('click',remover,false);
btnPlanilha.addEventListener('click',planilha,false);

//FUNÇÕES
function adicionar(e) {

    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25;
        if(somaMussarela < 0) {
            resMussarela = 0;
            vendaMussarela = 0.00;
    }
        document.getElementById('resMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela;
    }
    else if(document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista +25;
        if(somaMista < 0) {
            resMista = 0;
            vendaMista = 0.00;
    }
        document.getElementById('resMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista;
    }
    else if(document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25;
        if(somaCalabresa < 0) {
            resCalabresa = 0;
            vendaCalabresa = 0.00;
    }
        document.getElementById('resCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
    }
}

function remover(e) {

    if(document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25;
            if(somaMussarela < 0) {
                resMussarela = 0;
                vendaMussarela = 0.00;
        }
        document.getElementById('resMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela;
    }
    else if(document.getElementById('mista').checked) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25;
            if(somaMista < 0) {
                resMista = 0;
                vendaMista = 0.00;
        }
        document.getElementById('resMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista;
    }
    else if(document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25;
            if(somaCalabresa < 0) {
                resCalabresa = 0;
                vendaCalabresa = 0.00;
        }
        document.getElementById('resCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
    }
}