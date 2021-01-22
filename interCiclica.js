var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var selecColor = document.getElementById("eligeColor");
var d = document.getElementById("ciclico");
var ancho = d.width;
var lienzo = d.getContext("2d");

// Enlace para ejecutar la funcion click
boton.addEventListener("click", dibujoPorClick);

// Variables para dibujar
var xi1, xi2, xi3, xi4;
var xf1, xf2, xf3, xf4;
var yi1, yi2, yi3, yi4;
var yf1, yf2, yf3, yf4;

function dibujarLinea(colorcito, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = colorcito;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var colorcito = selecColor.value;
  console.log(selecColor);
  var l = 1;

  for (l = 0; l < lineas; l++) {
    // Inferior Izquierdo

    xi1 = 0;
    xf1 = espacio * l;
    yi1 = espacio * (l + 1);
    yf1 = 600;

    // Superior Derecho

    xi2 = 600;
    xf2 = espacio * l;
    yi2 = espacio * (l + 1);
    yf2 = 0;

    // Superior Izquierdo

    xi3 = espacio * l;
    xf3 = 0;
    yi3 = 0;
    yf3 = 600 - l * espacio;

    // Inferior Derecho

    xi4 = espacio * l;
    xf4 = 600;
    yi4 = 600;
    yf4 = 600 - l * espacio;

    dibujarLinea(colorcito, xi1, yi1, xf1, yf1);
    dibujarLinea(colorcito, xi2, yi2, xf2, yf2);
    dibujarLinea(colorcito, xi3, yi3, xf3, yf3);
    dibujarLinea(colorcito, xi4, yi4, xf4, yf4);
  }

  dibujarLinea("blue", 1, 1, 1, 599);
  dibujarLinea("blue", 1, 599, 599, 599);
  dibujarLinea("#9511ff", 599, 1, 1, 1);
  dibujarLinea("#9511ff", 599, 599, 599, 1);
}
