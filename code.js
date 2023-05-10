

/* Modo Oscuro Menu Navegacion */
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


// Obtener elementos del reloj
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

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
  hourElement.textContent = hours;
  minuteElement.textContent = minutes;
  secondElement.textContent = seconds;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
