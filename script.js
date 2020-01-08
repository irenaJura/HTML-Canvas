const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// resize to window width & height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base settings
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// flag that tells us should we draw or not
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return; // dont run when not mouse down
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true); // draw
canvas.addEventListener('mouseup', () => isDrawing = false); // don't draw
canvas.addEventListener('mouseout', () => isDrawing = false); // don't draw