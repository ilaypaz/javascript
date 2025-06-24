// get input box1 and assign to bx1
let box1 = document.getElementById('box1');//declaring a variable for the input
// get button button1 and assign to bn1
let button1 = document.getElementById('button1');
// get paragraph p1 and assign to p1
let p1 = document.getElementById('paragraph1')
// add event listener to bn1 with 'click' event and checkNum function as handler function
button1.addEventListener('click', checkNumIf);

//define checkNum() function
function checkNumIf() {
    if (Number(box1.value) > 5 || Number(box1.value) < 1) {
       p1.innerHTML= 'your value is out of range';
        return;
    }
    else {
        if (Number(box1.value) % 2 == 1) {
             p1.innerHTML = 'Number is odd';
        }
        else if (Number(box1.value) % 2 == 0) {
            p1.innerHTML='Number is even';
        }
        else {
            p1.innerHTML='Your input is not a number';
        }
    }
}
/*
use if...else and isNaN() function to check whether the input is a number
if it is number call checkNumIf() or checkNumSwitch() function
if it is not a number, show the 'Your input is not a number.' as the content of the p1
*/
function checkNum(){
    if (isNaN(Number(box1.value))){
        p1.innerHTML = 'Your input is not a number.';
        return;
    }
   checkNumIf();
}


//define checkNumIf() function
/*
use if...else if...else to verify whether the number is in the range, whether it is even or odd. Hint: oddNumber % 2 = 1
*/


//define checkNumSwitch() function
function checkNumSwitch() {
    switch (Number(box1.value)) {
        case Number(box1.value) > 5:
            p1.innerHTML('It is not a number in the given range.');
        case Number(box1.value) < 1:
            p1.innerHTML('It is not a number in the given range.');
        case Number(box1.value) % 2 == 1:
            p1.innerHTML = 'Number is odd';
        case Number(box1).value % 1 == 0:
            p1.innerHTML = 'Number is even';
        default:
            p1.innerHTML('You did not input a number');
    }
}
/*
use switch to show whether the number in the required range is even or odd 
otherwise use p1.innerHTML to show 'It is not a number in the given range.'
*/






