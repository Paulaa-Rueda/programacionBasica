// Funcion que retorne un valor con dos parametros para retornarlo en una variable
var z;

// Hacer un ciclo que se repita 10 veces y que escriba el numero separado por comas 
for(var i=0; i<10; i++)
{
    z = aleatorio(10, 5);
    document.write(z + ", "); 
}


function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    // Return: es una instrucción que le retorna a la linea de codigo que invoco la función de aleatorio el valor que yo le coloco en return;
    return resultado;
}