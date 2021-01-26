//Vp significa villaPopocha es decir el Id.
const rutaImagenes = "img/";

var vp = document.getElementById("villaPopocha");
var botonPersonalizar = document.getElementById("Seleccionar");
var texto1 = document.getElementById("NumCerdos");
var texto2 = document.getElementById("NumVacas");
var texto3 = document.getElementById("NumPollos");
var papel = vp.getContext("2d");

var fondo = {
  url: rutaImagenes + "villa.png",
  cargaOk: false,
};

var granjero = {
  url: rutaImagenes + "granjero.png",
  cargaOk: false,
};

var vaca = {
  url: rutaImagenes + "vaca.png",
  cargaOk: false,
};

var cerdo = {
  url: rutaImagenes + "cerdo.png",
  cargaOk: false,
};

var pollo = {
  url: rutaImagenes + "pollo.png",
  cargaOk: false,
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var granjeroPositionX = 420;
var granjeroPositionY = 7;

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

document.addEventListener("keydown", moverGranjero);

function moverGranjero(evento) {
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      granjeroPositionY = granjeroPositionY - movimiento;
      break;

    case teclas.DOWN:
      granjeroPositionY = granjeroPositionY + movimiento;
      break;

    case teclas.LEFT:
      granjeroPositionX = granjeroPositionX - movimiento;
      break;

    case teclas.RIGHT:
      granjeroPositionX = granjeroPositionX + movimiento;
      break;
  }

  personalizarVilla();
}

function cargarFondo() {
  fondo.cargaOk = true;
  personalizarVilla();
}

function cargarGranjero() {
  granjero.cargaOk = true;
  personalizarVilla();
}

function cargarVaca() {
  vaca.cargaOk = true;
  personalizarVilla();
}

function cargarCerdo() {
  cerdo.cargaOk = true;
  personalizarVilla();
}

function cargarPollo() {
  pollo.cargaOk = true;
  personalizarVilla();
}

function personalizarVilla() {
  let numeroCerdos = parseInt(texto1.value);
  let numeroVacas = parseInt(texto2.value);
  let numeroPollos = parseInt(texto3.value);

  console.log(numeroCerdos + " - " + numeroVacas + " - " + numeroPollos);

  if (fondo.cargaOk) {
    papel.drawImage(fondo.objeto, 0, 0);
  }

  if (vaca.cargaOk) {
    for (var v = 0; v < numeroVacas; v++) {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 10);
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
      papel.drawImage(cerdo.objeto, x, y);
    }
  }
  if (pollo.cargaOk == true) {
    for (var p = 0; p < numeroPollos; p++) {
      var x = aleatorio(0, 8);
      var y = aleatorio(0, 8);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(pollo.objeto, x, y);
    }
    if (granjero.cargaOk) {
      papel.drawImage(granjero.objeto, granjeroPositionX, granjeroPositionY);
    }
  }

  //Tener en cuenta: Canvas no agrupa para personalizarVilla sino que dibuja sobre capas sobre el primer objeto y el otro encima del primero y asi sucesivamente.
}


function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

botonPersonalizar.addEventListener("click", personalizarVilla);
