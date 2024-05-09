//declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);

//asignacion de texto en el título y pasos a seguir por el jugador
function asignarTextoElemento(elemeto, texto){
    let elementoHTML = document.querySelector(elemeto);
    elementoHTML.innerHTML = texto;
}

//verifica si el número ingresado es correcto
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`FELICIDADES!!! Acertaste en ${intentos} ${(intentos===1)?"intento":"intentos"}.`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
    else{
        //el usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p',"El número secreto es menor");
        }
        else{
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//limpia la caja para ingresar otro número
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

//genera el número secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los números
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se han sorteado todo los números posibles');
    }
    else{
        //si el número generado está incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            //se llama a sí misma para generar un número válido
            return generarNumeroSecreto();
        }
        else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//condiciones para iniciar el juego
function condicionesIniciales(){
    asignarTextoElemento('h1',"Hora de Jugar!!!");
    asignarTextoElemento('p',`Ingrese un número del 1 al ${numeroMaximo}:`);
    //generar número secreto
    numeroSecreto = generarNumeroSecreto();
    //inicializar el número de intentos
    intentos = 1;
}

//condiciones para reiniciar el juego
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//lamada principal para iniciar el juego
condicionesIniciales();


