let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d"); // a two-dimensional rendering context.
let button1 = document.getElementById('button1');
button1.addEventListener('click', createSquare);
let button2 = document.getElementById('button2');
button2.addEventListener('click', showText);

function drawCar() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.lineTo(40, 40);
    ctx.lineTo(60, 20);
    ctx.lineTo(80, 20);
    ctx.lineTo(100, 40);
    ctx.lineTo(120, 40);
    ctx.lineTo(120, 60);
    ctx.lineTo(20, 60);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
    drawWheel(100, 60);
    drawWheel(40, 60);


}
function drawWheel(x, y) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.rotate(45 * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function drawHexagon() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(300, 125);
    ctx.lineTo(325, 150);
    ctx.lineTo(375, 150);
    ctx.lineTo(400, 125);
    ctx.lineTo(375, 100);
    ctx.lineTo(325, 100);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
}
function fourProngStar() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(100, 95);
    ctx.lineTo(105, 120);
    ctx.lineTo(130, 125);
    ctx.lineTo(106, 130);
    ctx.lineTo(100, 155);
    ctx.lineTo(95, 130);
    ctx.lineTo(70, 125);
    ctx.lineTo(95, 120);
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
}

function Star() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(200, 105);//start
    ctx.lineTo(210, 120);//right base of triangle
    ctx.lineTo(230, 120);//vertex 20x,0y
    ctx.lineTo(215, 130);//base of point 15x, 10y
    ctx.lineTo(220, 150);// 5x, 20y
    ctx.lineTo(200, 140);//20x, 10y
    ctx.lineTo(180, 150);//20x, 10y
    ctx.lineTo(187, 130);//10x, 20y
    ctx.lineTo(170, 120);//20x, 10y
    ctx.lineTo(190, 120);//20x, 10y
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
}
function createSquare() {
    ctx.save();
    ctx.beginPath();
    ctx.rect(300, 200, 101, 101);
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'red';
    ctx.fillRect(300, 200, 100, 100);
    ctx.stroke();
    ctx.restore();
}
function showText(){
ctx.font
= "30px Serif";
ctx.fillStyle
= 'yellow';
ctx.strokeStyle
= 'blue';
ctx.fillText
("Shapes are drawn!",300,20);
ctx.strokeText
("Shapes are drawn!",300,20);

}

drawCar();
drawWheel(150, 40);
drawHexagon();
fourProngStar();
Star();














