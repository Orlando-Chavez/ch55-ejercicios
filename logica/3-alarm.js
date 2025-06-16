/*ALARM
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
*/

let tiempoEspera = Number(prompt("¿En cuantos segundos quieres que suene tú alarma?"));

if (isNaN(tiempoEspera) || tiempoEspera <= 0) {
  alert("Por favor, ingresa un número válido mayor que 0.");
} else {
  let mensaje = prompt("¿Qué mensaje te gustaría que se muestre cuando suene tu alarma?");

  alert(`Esperando ${tiempoEspera} segundos...`);

  setTimeout(function() {
    alert(mensaje || "¡Alarma!");
  }, tiempoEspera * 1000);
}


