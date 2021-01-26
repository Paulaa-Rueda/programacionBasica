// 1 problema : imprimir los numeros del 1 al 100
var numeros = 100;


//Se crea un ciclo con for donde la variable i comience en 1 y vayan hasta 100, es decir que 1 es menor o igual a 100; iterador de avance (i++)
for (var i = 1; i <= 100; i++) 
{
    divisible = false;
  // Se esta comparando el resultado entre el valor que esta despues del igual igual
  if (esDivisible(i,3)) 
  {
    document.write("Fizz");
    divisible = true;
  } 
  if (esDivisible(i,5))
  {
      document.write("Buzz");
      divisible =true;
  }
  // si no es divisible 
  if (!esDivisible(i,3)&&(!esDivisible(i,5))) 
  {
    document.write(i);
  }
  // lo que esta dentro del parentesis es para que cuando me imprima los numeros me queden con un salto de linea
  document.write("<br />");
  
}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}