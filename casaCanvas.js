var d = document.getElementById("casita");
var lienzo = d.getContext("2d");

// El techo de la casa 
dibujarLinea("#633900", 100, 50, 300, 50)
dibujarLinea("#633900", 50, 150, 100, 50)
dibujarLinea("#633900", 300, 50, 350,150)
dibujarLinea("#633900", 50, 150, 350, 150)

// La chimenea de la casa 
dibujarLinea("#f48200", 200, 1, 270, 1)
dibujarLinea("#f48200", 200, 1, 200, 50)
dibujarLinea("#f48200", 270, 1, 270, 50)

// Cuerpo de la casa 

dibujarLinea("#0017dc", 100,150,100,300)
dibujarLinea("#0017dc", 100,300,300,300)
dibujarLinea("#0017dc", 300,300,300,150)

//Ventana 1 de la casa 
dibujarLinea("#09b3ff", 120,200,180,200)
dibujarLinea("#09b3ff", 120,160,180,160)
dibujarLinea("#09b3ff", 120,160,120,200)
dibujarLinea("#09b3ff", 180,160,180,200)

//Ventana 2 de la casa 
dibujarLinea("#09b3ff", 220,160,280,160)
dibujarLinea("#09b3ff", 280,160,280,200)
dibujarLinea("#09b3ff", 280,200,220,200)
dibujarLinea("#09b3ff", 220,200,220,160)

// rejas de la ventana 1

dibujarLinea("#00ebd1", 135,160,135,200)
dibujarLinea("#00ebd1", 165,160,165,200)
dibujarLinea("#00ebd1", 120,180,180,180)

// rejas de la ventana 2

dibujarLinea("#00ebd1", 235,160,235,200)
dibujarLinea("#00ebd1", 265,160,265,200)
dibujarLinea("#00ebd1", 220,180,280,180)

// puerta de la casa 

dibujarLinea("#d20007", 180,220,220,220)
dibujarLinea("#d20007", 180,220,180,300)
dibujarLinea("#d20007", 220,220,220,300)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial,yinicial);
    lienzo.lineTo (xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}