
//CAPTURAR EVENTO DE SUBMIT DO FORM
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();



    //pegando os valores dos inputs( e.target ou form.document.querySelect)
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} ${nivelImc}.`;

    setResultado(msg, true);
    




});

//FUNÇÃO GET IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

//FUNÇÃO NIVEL IMC

function getNivelImc(imc) {
    const nivel = [' Abaixo do peso', ' Peso Normal', ' Sobrepeso',
    ' Obesidade grau 1', ' Obesidade grau 2', ' Obesidade grau 3', 'Procure um Médico Imediatamente'];

    if (imc > 100 ){
        return nivel[6]
    }

    if (imc >= 39.9){
        return nivel[5]

    } if (imc >= 34.9){
        return nivel [4]

    } if (imc >= 29.9){
        return nivel [3]
        
    } if (imc >= 24.9){
        return nivel [2]
        
    } if (imc >= 18.9){
        return nivel [1]
        
    } if (imc <= 18.4) {
        return nivel [0]

    } 
}



//FUNÇÃO CRIADORA PARAGRAFOS

function criaP() {
    const p = document.createElement('p');
    return p;

}

//FUNÇÃO PRO RESULTADO

function setResultado(msg, isValid) {


    const resultado = document.querySelector('#resultado1');
    resultado.innerHTML = msg;
    const p = criaP();
    p.InnerHTML = msg;    
    resultado.appendChild(p);
    //não consegui fazer o valor de msg entrar em P

    if (isValid) {
    resultado.classList.add ('paragrafo-resultado');
    } 
    else {
    resultado.classList.add ('paragrafo-invalid');
    }
    

}


//





