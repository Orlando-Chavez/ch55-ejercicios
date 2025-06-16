/*---------------Online status---------------
Display online status for a list of users. 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

let usuarios = ['Orlando-Chavez', 'mockIng99', 'J0eyPunch', 'glassedFer'];
let total = usuarios.length;
let mensaje = "";

if (total === 0) {
  mensaje = "no hay nadie en línea";
} else if (total === 1) {
  mensaje = usuarios[0] + " está en línea";
} else if (total === 2) {
  mensaje = usuarios[0] + " y " + usuarios[1] + " están en línea";
} else {
  let restantes = total - 2;
  mensaje = usuarios[0] + ", " + usuarios[1] + " y " + restantes + " más en línea";
}

console.log(mensaje);


