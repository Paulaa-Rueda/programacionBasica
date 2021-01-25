//Vp significa villaPopocha es decir el Id. 
const rutaImagenes = "img/";

var vp = document.getElementById("villaPopocha");
var botonPersonalizar = document.getElementById("Seleccionar");
var texto1 = document.getElementById("NumCerdos");
var texto2 = document.getElementById("NumVacas");
var texto3 = document.getElementById("NumPollos");
var papel = vp.getContext("2d");

// se crea un Json para tener la url y saber si ya cargo el objeto. Siempre se debe usar la coma para delimitar los atributos

var fondo = {
    url: rutaImagenes + "villa.png",
    cargaOk: false
};

var granjero = {
    url: rutaImagenes + "pollo.png",
    cargaOk: false
};

var vaca = {
    url: rutaImagenes + "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: rutaImagenes + "cerdo.png",
    cargaOk: false
};

var pollo = {
    url: rutaImagenes + "pollo.png",
    cargaOk: false
};

// Para crear un objeto tipo imagen se utiliza new Image, el cual tiene las caracteristicas de un img. 
// Para cargar la url de la imagen debemos pasar por el atributo src, que es una variable entre la clase imagen y una vez se inluye
// ese atributo src a un objeto de image se crea un evento de carga (Cargar la imagen). 

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

granjero.objeto = new Image();
granjero.objeto.src = granjero.url;
granjero.objeto.addEventListener("load", cargarGranjero);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);




// el verdadero se utiliza para decir que la imagen ya esta cargada y false que aun no esta cargada
function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarGranjero() {
    granjero.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}


//el evento load no necesita como tal declarar un evento (en este caso dibujar), para confirmar ello se puede hacer un cosole.log para verificar que trae ese evento
function dibujar() {
    if (fondo.cargaOk == true) {
        papel.drawImage(fondo.objeto, 0, 0);
    }
}

// Antes colocabamos la ubicación en donde queriamos que estuviera cada uno de los objetos y eso se hacia: 
// quitando las variables x y y que se crearon y adicional a ello en el papel.drawImage(vaca.objeto, 230, 40) 
function personalizarVilla() {
    let numeroCerdos = parseInt(texto1.value);
    let numeroVacas = parseInt(texto2.value);
    let numeroPollos = parseInt(texto3.value);

    console.log(numeroCerdos + " - " + numeroVacas + " - " + numeroPollos);

    // no es una buena practica crear un Image dentro de un Json por eso se hace afuera de el, con cada uno de los objetos 
    // Puedo tambien hacer que la cantidad sea aleatoria y esto se hace asi:  



    // Ahora para utilizar una ubicación aleatoria se crean las variables x y y con los maximo y minimos en donde pueden 
    // estas ubicados cada uno de los objetos adicional a ello, en la variable papel.drawImage(vaca.objeto, x, y) y listo. 

    if (vaca.cargaOk == true) {

        // se crea un for para crear un ciclo, variable v es igual a cero, mientras las vacas sean menor de 10 y en cada ciclo se suma 1 vaca. 
        for (var v = 0; v < numeroVacas; v++) {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            // Se crea una ecuación para que los objetos no me salgan tan amontonados 
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(vaca.objeto, x, y);
        }

    }
    if (cerdo.cargaOk == true) {
        for (var c = 0; c < numeroCerdos; c++) {
            var x = aleatorio(0, 20);
            var y = aleatorio(0, 20);
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(cerdo.objeto, x, y)
        }

    }
    if (pollo.cargaOk == true) {
        for (var p = 0; p < numeroPollos; p++) {
            var x = aleatorio(0, 8);
            var y = aleatorio(0, 8);
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(pollo.objeto, x, y)
        }

    }

    if (granjero.cargaOk == true) {

        var x = 320;
        var y = 400;
        papel.drawImage(pollo.objeto, x, y);
    }
    //Tener en cuenta: CAnvas no agrupa para dibujar sino que dibuja sobre capas sobre el primer objeto y el otro encima del primero y asi sucesivamente. 
}


// para dibujar un numero aleatorio de objetos en el canvas debemos saber varias cosas: 
// 1. que el espacio de dibujo es de 500 x 500 y de cada imagen es de 80x80 pero se debe tener en cuenta los bordes
// asi que la posición en donde puedo colocar los objetos seria en x desde el cero y en y hasta el 420. 

// para ello debemos utilizar la function aleatorio 

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

botonPersonalizar.addEventListener("click", personalizarVilla);