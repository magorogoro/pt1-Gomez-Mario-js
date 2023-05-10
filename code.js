

/* Modo Oscuro Menu Navegacion */
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}




// Actualizar el reloj
function updateClock() {


  // Obtener la hora actual
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Agregar un cero inicial a los números menores de 10
  hours = (hours < 10) ? "0" + hours : hours;
 minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;



  // Actualizar el contenido HTML de los elementos del reloj

  // Obtener elementos del reloj
let hourElement = document.getElementById('hour');
let minuteElement = document.getElementById('minute');
let secondElement = document.getElementById('second');

  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondElement.textContent = seconds;

  // Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
}


var names = ["John", "Jane", "Alice", "Bob", "Emily", "David"]; // Array de nombres (puedes cambiarlos por los que desees)

function spinWheel() {
  var wheel = document.getElementById("wheel");
  var resultElement = document.getElementById("result");
  var marker = document.getElementById("marker");

  // Deshabilitar el botón mientras la ruleta está girando
  document.querySelector("button").disabled = true;

  // Calcular un índice aleatorio
  var randomIndex = Math.floor(Math.random() * names.length);
  var selectedName = names[randomIndex];

  // Calcular el ángulo de rotación aleatorio
  var randomAngle = 360 * 5 + Math.floor(Math.random() * 360); // Girar al menos 5 vueltas completas y agregar un ángulo aleatorio adicional

  // Aplicar la rotación a la ruleta
  wheel.style.transform = "rotate(" + randomAngle + "deg)";

  // Mostrar el nombre seleccionado después de un tiempo de rotación (3 segundos)
  setTimeout(function() {
    resultElement.textContent = "¡El nombre seleccionado es: " + selectedName + "!";
    // Habilitar el botón después de mostrar el resultado
    document.querySelector("button").disabled = false;
  }, 3000);
}
