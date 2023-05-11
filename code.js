

/* Modo Oscuro Menu Navegacion */
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
function activarSonido() {
  var audio = document.getElementById("sonido");
  audio.play();
}



// Actualizar el reloj
function reloj() {


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
setInterval(reloj, 1000);

}

function ruleta(){
const sectors = [
  {color:"#f82", label:"Juan"},
  {color:"#0bf", label:"Lucas"},
  {color:"#fb0", label:"Albert"},
  {color:"#0fb", label:"Pepe"},
  {color:"#b0f", label:"Angel"},
  {color:"#f0b", label:"Jose"},
  {color:"#f8b", label:"Manuel"},
  {color:"#bf0", label:"Antonio"},
];

const elSpin = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const TAU = 2 * Math.PI;
const tot = sectors.length;
const arc = TAU / tot;
const friction = 0.991;
const angVelMin = 0.002;
let angVelMax = 0;
let angVel = 0;
let ang = 0;
let isSpinning = false;
let isAccelerating = false;
let animFrame = null;

const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

const drawSector = (sector, i) => {
  const angle = arc * i;
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, angle, angle + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  ctx.translate(rad, rad);
  ctx.rotate(angle + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 24px sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  ctx.restore();
};

const rotate = () => {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - Math.PI / 2}rad)`;
  elSpin.textContent = !angVel ? "SPIN" : sector.label;
  elSpin.style.background = sector.color;
};

const frame = () => {
  if (!isSpinning) return;

  if (angVel >= angVelMax) isAccelerating = false;

  if (isAccelerating) {
    angVel ||= angVelMin;
    angVel *= 1.1;
  } else {
    isAccelerating = false;
    angVel *= friction;

    if (angVel < angVelMin) {
      isSpinning = false;
      angVel = 0;
      cancelAnimationFrame(animFrame);
    }
  }

  ang += angVel;
  ang %= TAU;
  rotate();
};

const engine = () => {
  frame();
  animFrame = requestAnimationFrame(engine);
};

elSpin.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;
  isAccelerating = true;
  angVelMax = Math.random() * (0.4 - 0.25) + 0.25;
  engine();
});

sectors.forEach(drawSector);
rotate();

}