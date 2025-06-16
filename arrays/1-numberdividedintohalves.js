/*---------------NUMBER DIVIDED IN TO HALVES---------------

Given a number, return the number divided into its halves in an array.
 
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

let numero = prompt("Escribe un número (Se dividirá entre 2):");
let valor = Number(numero);

if (!isNaN(valor)) {
  let mitades = [];
  for (let i = 0; i < 2; i++) {
    mitades.push(valor / 2);
  }
  alert("Mitades: [" + mitades[0] + ", " + mitades[1] + "]");
} else {
  alert("Error. Escribe un número valido.");
}
