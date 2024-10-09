const form = document.querySelector('#form');

form.addEventListener('submit' , function(event) {
    event.preventDefault();

    const pesoInput = document.querySelector('.peso');
    const alturaInput = document.querySelector('.altura');

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso){ alert('Peso Invalido'); return  } 
    if (!altura){ alert('Altura Invalido'); return } 

    const imc = getImc(peso,altura);

    const msg = (imc);
    
    
    messageImc(msg);


})

function getImc(peso,altura){
    const imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function messageImc(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;}
    
/*
function setResultado(msg) {


    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
    }}*/
 
