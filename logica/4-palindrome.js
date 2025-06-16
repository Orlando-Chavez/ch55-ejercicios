/*---------------PALINDROME---------------
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

let palabra = prompt("Ingresa una palabra:");
palabra = palabra.toLowerCase();
let texto = "";
for (let i = 0; i < palabra.length; i++) {
  let c = palabra[i];
  if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
    texto += c;
  }
}

let palindromo = true;
let longitud = texto.length;

let inicio = 0;
let fin = longitud - 1;

while (inicio < fin) {
  if (texto[inicio] !== texto[fin]) {
    palindromo = false;
    break;
  }
  inicio++;
  fin--;
}

if (palindromo) {
  alert("Esta palabra un palíndromo");
} else {
  alert("Esta palabra no es un palíndromo.");
}
