/*FACTORIAL
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

let numero = prompt("Escribe un número entero (mayor a 0):");
let n = Number(numero);

if (!Number.isInteger(n) || n < 1) {
  alert("ERROR! Debes escribir un número entero mayor a 0");
} else {
  const calcular = function (valor) {
    return valor === 1 ? 1 : valor * calcular(valor - 1);
  };

  let resultado = calcular(n);
  alert("El factorial de " + n + " es: " + resultado);
}
