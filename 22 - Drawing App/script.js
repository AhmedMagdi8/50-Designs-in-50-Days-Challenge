const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let isPressed =  false;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;

    }
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 3;

    if(size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 3;

    if(size < 3) {
        size = 3;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => color = e.target.value);

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))











/**
 * 
 * 
 * his code creates a simple circle on an HTML canvas element. Here's a breakdown of what each part does:

const canvas = document.getElementById('canvas');

It retrieves the <canvas> element from the HTML document using its id attribute, which is assumed to be "canvas".
const ctx = canvas.getContext('2d');

This gets the 2D drawing context of the canvas, allowing you to draw shapes, text, images, and more.
let size = 20;

This defines the radius of the circle to be drawn, which is 20 pixels.
let color = 'black';

This sets the color of the circle to be black.
function drawCircle(x, y)

This function is responsible for drawing a circle on the canvas at the position (x, y).
Inside the drawCircle function:

ctx.beginPath(); starts a new path for drawing.
ctx.arc(x, y, size, 0, Math.PI * 2, true); creates a circle centered at (x, y) with a radius defined by size. It goes from 0 to 2 * Math.PI (a full circle).
ctx.fillStyle = color; sets the fill color to the previously defined color ('black').
ctx.fill(); fills the circle with the specified color.
drawCircle(100, 200);

This calls the drawCircle function, drawing a black circle centered at the position (100, 200) on the canvas with a radius of 20 pixels.
In summary, this code draws a black circle with a radius of 20 pixels at the coordinates (100, 200) on a canvas.

 */