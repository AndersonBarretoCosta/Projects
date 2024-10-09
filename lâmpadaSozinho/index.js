const btnLigar = document.getElementById('ligar');
const btnDesligar = document.getElementById('desligar');
const imagem = document.getElementById('imagem')
const contentImg = document.getElementById('content-img')



btnLigar.addEventListener('click', ligaLamp);
btnDesligar.addEventListener('click', apagaLamp);
imagem.addEventListener('dblclick', quebraLamp);
imagem.addEventListener('mouseover', ligaLamp);
imagem.addEventListener('mouseleave', apagaLamp);



function ligaLamp() {    
    if (isLampBroken()){
        return   }
    imagem.src = 'Acesa.jpeg'
}

function apagaLamp (){
    if (isLampBroken()){
        return   }
    imagem.src = 'Apagada.png'

}

function quebraLamp (){
    imagem.src='Quebrada.jpeg' 
}

function isLampBroken () {    
    return imagem.src.indexOf ('Quebrada') > (-1)    
}


