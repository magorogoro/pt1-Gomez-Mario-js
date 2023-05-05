function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


const canvas = document.getElementById('spinner');
const ctx = canvas.getContext('2d');
const names = ['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4', 'Nombre 5'];
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
const spinButton = document.getElementById('spin-button');

let spinning = false;
let angle = 0;
let nameIndex = -1;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors[nameIndex];
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, 150, angle, angle + Math.PI * 2 / names.length, false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.fill();
  for (let i = 0; i < names.length; i++) {
    const textAngle = angle + Math.PI * 2 / names.length * (i + 0.5);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(textAngle);
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText(names[i], 70, 0);
    ctx.restore();
  }
  angle += Math.PI / 64;
  if (angle >= Math.PI * 2) {
    angle -= Math.PI * 2;
    spinning = false;
    alert(`El nombre seleccionado es: ${names[nameIndex]}`);
  }
  if (spinning) {
    requestAnimationFrame(draw);
  }
}

spinButton.addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    nameIndex = Math.floor(Math.random() * names.length);
    spinButton.disabled = true;
    draw();
    setTimeout(() => {
      spinButton.disabled = false;
    }, 2000);
  }
});

