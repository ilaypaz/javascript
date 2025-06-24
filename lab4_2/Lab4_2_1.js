// Register events by adding event listeners and make functions to handle the events here  
let text = document.getElementById('box1');//declaring a variable for the input
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let text2 = document.getElementById('box2');

button1.addEventListener('click', capitalize);
button2.addEventListener('click', lowercase);
button3.addEventListener('click', lastLetter);
button4.addEventListener('click', removeSpace);

function capitalize() {
    text2.value = text.value.toUpperCase();//text is the box in this case we need to get the vaklue in ortder to get ayth8ign out of it 
}
function lowercase(){
    text2.value = text.value.toLowerCase();
}
function lastLetter(){
    text2.value=text.value.substring(text.value.length-1,text.value.length);
}

function removeSpace(){
    text2.value=text.value.replaceAll(' ','');
}
