let box1 = document.getElementById('box1');//declaring a variable for the input
let button1 = document.getElementById('button1');
let p1 = document.getElementById('paragraph1')
let box2 = document.getElementById('box2');//declaring a variable for the input
let box3 = document.getElementById('box3');//declaring a variable for the input
let button2 = document.getElementById('button2');
button1.addEventListener('click', addCredits);
button2.addEventListener('click', playGame);
function addCredits() {
    p1.innerHTML='';
    if (Number(box1.value) < 0 || isNaN(Number(box1.value))) {
        alert('Your input is not valid.');
        return;

    }
    else {
        p1.innerHTML='';
        box3.value = Number(box3.value) + Number(box1.value); // Use .value for input elements instead of .innerHTML
        return;
    }
}
function playGame() {
    if (Number(box2.value) < 0 || isNaN(Number(box2.value))) {
        alert('Your input is not valid.');
        return;
    }

    else if (Number(box2.value) > Number(box3.value)) {
        alert('The number cannot be greater than the credits!');
        return;

    }

    else {
        let prob = Math.random();
        if (prob >= 0.4) {
            p1.innerHTML='';
            p1.innerHTML='You win!';
            box3.value = Number(box3.value) + Number(box2.value);
            return;

        }
        else {
            p1.innerHTML='';
            p1.innerHTML='You lose!';
            box3.value = Number(box3.value) - Number(box2.value);
            return;


        }


    }


}


