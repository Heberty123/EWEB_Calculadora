
var input1 = document.getElementById('primaryNumber');
var input2 = document.getElementById('secondNumber');
var result = document.querySelector('#resultFinal');
var list = document.querySelector('#list');


function btnSomar(){
console.log("fui chamado !!")

    valor1 = input1.value;
    valor2 = input2.value;

    if(valor1 != null && valor1 != "" && valor2 != null && valor2 != ""){
        result.innerText = Number(valor1) + Number(valor2);
        list.innerHTML = list.innerHTML + `<li>${valor1} + ${valor2} = ${result.innerText}</li>`
    }


}

function btnSubtrair(){
    
    valor1 = input1.value;
    valor2 = input2.value;

    if(valor1 != null && valor1 != "" && valor2 != null && valor2 != ""){
        result.innerText = Number(valor1) - Number(valor2);
        list.innerHTML = list.innerHTML + `<li>${valor1} - ${valor2} = ${result.innerText}</li>`
    }

}

function btnMultiplicar(){

    valor1 = input1.value;
    valor2 = input2.value;

    if(valor1 != null && valor1 != "" && valor2 != null && valor2 != ""){
        result.innerText = Number(valor1) * Number(valor2);
        list.innerHTML = list.innerHTML + `<li>${valor1} * ${valor2} = ${result.innerText}</li>`
    }

}

function btnDividir(){
    
    valor1 = input1.value;
    valor2 = input2.value;

    if(valor1 != null && valor1 != "" && valor2 != null && valor2 != ""){
        result.innerText = (Number(valor1) / Number(valor2)).toFixed(4);
        list.innerHTML = list.innerHTML + `<li>${valor1} / ${valor2} = ${result.innerText}</li>`
    }

}