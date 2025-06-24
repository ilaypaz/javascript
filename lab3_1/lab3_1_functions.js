function startGame() {
    let userInput = prompt('Please enter number 0 or 1 to predict the result, 0 for heads and 1 for tails.');
    let rawRandom = Math.random();
    let randomBinary = Math.round(rawRandom);
    let firstGame = document.getElementById('firstGame');
    firstGame.innerHTML = 'Your guess is ' + userInput + ' and the result of the coin flip is ' + randomBinary
    alert('Your guess is ' + userInput + ' and the result of the coin flip is ' + randomBinary);
}

function rollDice() {

    let rando = Math.floor(Math.random() * 6) + 1;
    alert('The points you get this time is ' + rando);

}


function getSeconds() {
    let hourInput = prompt('Please enter a number between 0-23 of the hour of current time');
    let minuteInput = prompt('Please enter a number between 0-59 for the minute of the current time');
    let secondInput = prompt('Please enter a number between 0-59 for the second of the current time');
    let total = Number((hourInput * 3600)) + Number((minuteInput * 60)) + Number(secondInput);
    alert('The current time ' + hourInput + ':' + minuteInput + ':' + secondInput + ' is ' + total + ' seconds after 12:00am');


}


