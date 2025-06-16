/* ---------------USER PROFILE---------------
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

1. username, edad y una lista de peliculas favoritas
2. utilizar los prompt necesarios para que el usuario ingrese su informacion
3. Ocupando un array vamos a almacenar las peliculas
4. Mostrar en consola

n. Mostrar en consola la información del usuario donde cada pelicula debe tener un mensaje como este: The {film} is one of my favppriyes
*/

let counter = 0;
const username = prompt("Hola, ingresa tu nombre de usuario");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];


//Vamos a pedir 5 peliculas primero
alert("A continuacion te vamos a pedir tus 5 peliculas favoritas")
for(let i = 1; i <= 5; i++){
  favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}`));
}
console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:`);

while(counter < favoriteMovies.length){
  console.log(`Mi pelicula favorita numero ${counter + 1} es: ${favoriteMovies[counter]} `);
  counter++
}