function getHMS() {
    let secondInput = prompt('Enter a number(0-86399) for the seconds');
    let hourOutPut = Math.floor(secondInput / 3600);
    let remain = secondInput % 3600;
    let minuteOutPut = Math.floor((remain) / 60);
    remain %= 60;
    alert(secondInput + ' seconds after 12:00 AM is ' + hourOutPut + ':' + minuteOutPut + ':' + remain + ' ');
}

function calculateFreeFallTime(height, intialVelocity, gravity) {

return (Math.sqrt(Math.pow(intialVelocity,2)+(2*gravity*height))-intialVelocity)/gravity;
}

function compareFreeFallTime() {
    //Write code here to ask users' input of planet name of the first planet
    let nameInput1 = prompt('Enter the name of the first planet');
    //Write code here to ask users' input of height of the free fall on the first planet, covert to number
    let height1 = Number(prompt('Enter the height of the free fall in meters on planet ' + nameInput1));
    //Write code here to ask users' input of initial downward velocity, covert to number
    let v1 = Number(prompt('Enter the initial downward velocity in meters/sec on planet ' + nameInput1));
    //Write code here to ask users' input of gravity of the first planet, covert to number
    let g1 = Number(prompt('Enter the gravity in meteres/sec^2 on planet ' + nameInput1));
    //Write code here to ask users' input of planet name of the second planet
    let nameInput2 = prompt('Enter the name of the second planet');
    //Write code here to ask users' input of height of the free fall on the second planet, covert to number
    let height2 = Number(prompt('Enter the height of the free fall in meters on planet ' + nameInput2));
    //Write code here to ask users' input of initial downward velocity, covert to number
    let v2 = Number(prompt('Enter the initial downward velocity in meters/sec on planet ' + nameInput2));
    //Write code here to ask users' input of gravity of the second planet, covert to number
    let g2 = Number(prompt('Enter the gravity in meteres/sec^2 on planet ' + nameInput2));
    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the first planet */
let ff1=calculateFreeFallTime(height1, v1, g1);
    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the second planet */
let ff2=calculateFreeFallTime(height2, v2, g2);
    //Write code here to use alert to show the results 
alert('The free fall time of an onject on plant '+nameInput1+'without air from the height of '+height1+' m, with an initial downward velocity of '+v1+' m/s, is approximately '+ff1.toPrecision(4)+ ' seconds, while The free fall time of an onject on plant '+nameInput2+'without air from the height of '+height2+' m, with an initial downward velocity of '+v2+' m/s, is approximately '+ff2.toPrecision(4)+ ' seconds.');


}

