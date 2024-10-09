const calculator = document.getElementById('calculator');
const display = document.getElementById('result');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');


let novoNumero = true;
let operador;
let numeroAnterior;
let resultado;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {

    if (operacaoPendente()){
    const numeroAtual = parseFloat(display.textContent.replace(',','.'));
    novoNumero=true;
    resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`)
    atualizarDisplay(resultado);}


  

    
    /*
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent);
        if (operador == '+') {
            novoNumero = true;
            const resultSoma = numeroAnterior + numeroAtual
            atualizarDisplay(resultSoma);        }

        else if (operador == '-') {
            novoNumero = true;
            const resultSub = numeroAnterior - numeroAtual
            atualizarDisplay(resultSub); }

        else if (operador == '*') {
            novoNumero = true;
            const resultMult = numeroAnterior * numeroAtual
            atualizarDisplay(resultMult); }

        else if (operador == '/') {
            novoNumero = true;
            const resultDiv = numeroAnterior / numeroAtual
            atualizarDisplay(resultDiv); }
}*/
}

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false;
        
    } else {
        display.textContent += texto;
       
    }
    
    
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;     
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace(',','.'));
        console.log(operador);      
    }   

}

operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () =>{
    calcular();
    operador = undefined;
}

document.getElementById('equal').addEventListener('click', ativarIgual);

const limparDisplay = () => display.textContent ='';
document.getElementById('c').addEventListener('click', limparDisplay);

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('ce').addEventListener('click', limparCalculo);

const limpaUltimo = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', limpaUltimo);

const negate = () => {
    novoNumero = true
    let resultNegate = parseFloat((display.textContent.replace(',','.')) * -1)
    atualizarDisplay(resultNegate);
}
document.getElementById('negate').addEventListener('click', negate )


const existeDecimal = () =>display.textContent.indexOf(',') !==-1;
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if (!existeDecimal()){
        if (existeValor()){
            atualizarDisplay(',');
        } else{
            atualizarDisplay('0,')
        }
    }
}
document.getElementById('comma').addEventListener('click', inserirDecimal);


//parte do teclado 

const mapaTeclado = {
    '0' : 'tecla0',
    '1' : 'tecla1',
    '2' : 'tecla2',
    '3' : 'tecla3',
    '4' : 'tecla4',
    '5' : 'tecla5',
    '6' : 'tecla6',
    '7' : 'tecla7',
    '8' : 'tecla8',
    '9' : 'tecla9',
    'Escape' : 'ce',
    'c' : 'c',
    '-' : 'operadorLess',
    '+' : 'operadorPlus',
    '*' : 'operadorMultiplication',
    '/' : 'operadorDivision',
    '=' : 'equal',
    'Enter' : 'equal',
    'Backspace' : 'backspace',
    ',' : 'comma'
    
}

const mapearTeclado = (event) => {
    const tecla = event.key

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;

    if (teclaPermitida()) {document.getElementById(mapaTeclado[tecla]).click();}
}

document.addEventListener('keydown', mapearTeclado);
console.log(mapaTeclado)






