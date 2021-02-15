/*global document*/

let calc = document.getElementById('pow-calc');
let powResult = document.getElementById('pow-result')

calc.onclick = function () {calcPow();};

function calcPow() {
    
    'use strict';
    
    let number = document.getElementById('number').value;
    let power = document.getElementById('power').value;
    let counter = 0;
    let result = 1;
    
    while(counter < power) {
        
        result = result * number;
        counter++;
        console.log(result);
    }
    
    powResult.innerHTML = number + '<sup style="font-size: .9rem; color: red;">' + power + '</sup>  = ' + result;
}