/*---------------HIGHEST NUMBER---------------
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

alert("Bienvenido");
alert("A continuación, te pediremos que ingreses 10 numeros");

let maximo = null;

for (let i = 1; i <= 10; i++) {
  let entrada = prompt(`Ingresa el número ${i}:`);
  let numero = Number(entrada);
  
  if (isNaN(numero)) {
    alert("Ingresa un número válido.");
    i--;
  } else {
    if (maximo === null || numero > maximo) {
      maximo = numero;
    }
  }
}
console.log("El número mayor es:", maximo);
alert(`El número mayor es: ${maximo}`);
