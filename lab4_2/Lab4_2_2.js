// Register events by adding event listeners and make functions to handle the events here
let text=document.getElementById('box1');
let text2=document.getElementById('box2');
let text3=document.getElementById('box3');
let b1=document.getElementById('button1');
let b2=document.getElementById('button2');
let b3=document.getElementById('button3');
let b4=document.getElementById('button4');
let b5=document.getElementById('button5');

button1.addEventListener('click', add);
button2.addEventListener('click', subtract);
button3.addEventListener('click', multiply);
button4.addEventListener('click', divide);
button5.addEventListener('click',exponentiate)

function add(){
    text3.value=Number(text.value)+Number(text2.value);
}
function subtract(){
    text3.value=Number(text.value)-Number(text2.value);
}
function multiply(){
    text3.value=Number(text.value)*Number(text2.value);
}
function divide(){
    text3.value=Number(text.value)/Number(text2.value);
}
function exponentiate(){
    text3.value=Number(text.value)**Number(text2.value);
}




