const button = document.getElementById("myButton");
let resultadoFactorial = 1; 
let resultadoTaylor = 0;

function llamadaTaylor(){
    let x = parseInt(document.getElementById('input_x').value);
    let k = parseInt(document.getElementById('input_k').value);
    serieDeTaylor(x, k);
}

function serieDeTaylor(x, k){
    // x^(0)/0! + x^(1)/1! + x^(2)/2! + x^(..)/(..)! + x^(k)/k!
    if(k===0){
        resultadoTaylor += (x**k)/factorial(k);
        alert(resultadoTaylor);
    } else {
        resultadoTaylor += (x**k)/factorial(k);
        serieDeTaylor(x, (k-1));
    }
}

function factorial(m){
    if(m===0){
        return resultadoFactorial;
    }else{
        resultadoFactorial = m * factorial(m-1);
    }
}

button.onclick = llamadaTaylor();