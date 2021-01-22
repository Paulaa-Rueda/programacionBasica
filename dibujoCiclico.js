
var d = document.getElementById("ciclico");
var lienzo = d.getContext("2d");
var lineas = 60;
var l = 1;
var xi1, xi2, xi3, xi4, xi5, xi6, xi7, xi8;
var xf1, xf2, xf3, xf4, xf5, xf6, xf7, xf8;
var yi1, yi2, yi3, yi4, yi5, yi6, yi7, yi8;
var yf1, yf2, yf3, yf4, yf5, yf6, yf7, yf8;


for(l=0; l < lineas; l++)
{

    // Inferior Izquierdo

    xi1 = 0
    xf1 = 10 * l;
    yi1 = 10 * (l + 1);
    yf1 = 600;

    // Superior Derecho

    xi2 = 600;
    xf2 = 10 * l;
    yi2 = 10 * (l + 1);
    yf2 = 0;

    // Superior Izquierdo

    xi3 = 10 * l;
    xf3 = 0;
    yi3 = 0;
    yf3 = 600 - (l * 10);

    // Inferior Derecho

    xi4 = 10 * l;
    xf4 = 600;
    yi4 = 600;
    yf4 = 600 - (l * 10);
 
    dibujarLinea("#ff576d", xi1, yi1, xf1, yf1);
    dibujarLinea("#1cff65", xi2, yi2, xf2, yf2);
    dibujarLinea("#00b3d5", xi3, yi3, xf3, yf3);
    dibujarLinea("#ffdb1c", xi4, yi4, xf4, yf4);
   
}

for (l=0; l <= 30; l++)
{
    xi5 = 300;
    xf5 = 300 - (l*10); 
    yi5 = 10 * l;
    yf5 = 300;

    xi6 = 10 * l;
    xf6 = 300; 
    yi6 = 300;
    yf6 = 300 + (l* 10); 

    xi7 = 300;
    xf7 = 300 + (l*10); 
    yi7 = 10 * l;
    yf7 = 300;

    xi8 = 300 + (l*10);
    xf8 = 300; 
    yi8 = 300;
    yf8 = 600 - (l*10);

    dibujarLinea("black", xi5, yi5, xf5, yf5);
    dibujarLinea("black", xi6, yi6, xf6, yf6);
    dibujarLinea("black", xi7, yi7, xf7, yf7);
    dibujarLinea("black", xi8, yi8, xf8, yf8);
}

dibujarLinea("blue", 1, 1, 1, 599)
dibujarLinea("blue", 1, 599, 599, 599)
dibujarLinea("#9511ff", 599, 1, 1, 1)
dibujarLinea("#9511ff", 599,599,599,1)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial,yinicial);
    lienzo.lineTo (xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}