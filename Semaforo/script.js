
/*
const btnRed = document.getElementById('red');
const btnYellow = document.getElementById('yellow');
const btnGreen = document.getElementById('green');
const btnAuto = document.getElementById('auto');
const img = document.getElementById('img');
const btnOff = document.getElementById('off');
const form = document.getElementById('form');


function green(){ img.src = 'verde.png';}

function red(){   img.src = 'vermelho.png';}

function yellow(){img.src = 'amarelo.png';}

function off(){   img.src = 'desligado.png';}

form.addEventListener('click', function(e){
    e.preventDefault();     
} )

btnRed.addEventListener('click', red);
btnYellow.addEventListener('click', yellow);
btnGreen.addEventListener('click', green);
btnOff.addEventListener('click', off);
*/


const img = document.getElementById('img');
const form = document.getElementById('form');
let colorIndex = 0;
let intervalId = null;


const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const lights = {
    'red': () => img.src = 'vermelho.png',
    'yellow': () => img.src = 'amarelo.png',
    'green': () => img.src = 'verde.png',
    'off': () => img.src = 'desligado.png',
    'auto': () => intervalId = setInterval(auto, 1000)
}

const trafficLight = (event) =>{
    stopAuto();
    lights[event.target.id]();
    
}

form.addEventListener('click', trafficLight);

const auto = () => {
       const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    lights[color]();
    nextIndex();}

const stopAuto = () => {
    
    clearInterval(intervalId);
}

/*
const img = document.getElementById( 'img' );
const form = document.getElementById( 'form' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = 'vermelho.png',
    'yellow':   () => img.src = 'amarelo.png',
    'green':    () => img.src = 'verde.png',
    'auto': () => {
        intervalId = setInterval( changeColor, 1000 )
        form.children.automatic.id = 'stop';
    },
    'stop': () => {
        stopAutomatic()
        form.children.stop.id = 'auto';
    }
}

form.addEventListener('click', trafficLight );
*/
