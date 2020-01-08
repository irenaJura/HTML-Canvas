const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// resize to window width & height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base settings
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

// flag that tells us should we draw or not
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // dont run when not mouse down
    console.log(e);
    // every 360 draws increment the color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; 
    // start a path
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update lastX & lastY 
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // increment hue value for each draw
    hue++;
    // reset the hue
    if (hue >= 360) {
        hue = 0;
    }
    // if lineWidth is greater or equal to 50 or less or equal to 1
    // flip direction
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    // start with incrementing from 0 to 50
    // when over 50 decrement lineWidth
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
    
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}); // draw and update the lastX & lastYs

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false); // don't draw
canvas.addEventListener('mouseout', () => isDrawing = false); // don't draw