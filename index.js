

// let actions = {
//     sum,
//     substract,
//     umnozhit,
//     razdelit
// }

// function sum(a, b) {
//     return a + b
// }

// function substract(a, b) {
//     return a - b
// }

// function umnozhit(a, b) {
//     return a * b
// }

// function razdelit(a, b) {
//     return a / b
// }

// function calculate(a, b, action) {
//     let result = null;

//     switch (action) {
//         case actions.sum:
//             result = sum(a, b)
//             break;

//         case actions.substract:
//             result = substract(a, b)
//             break;

//         case actions.umnozhit:
//             result = umnozhit(a, b)
//             break;

//         case actions.razdelit:
//             result = razdelit(a, b)
//             break;

//         default:
//             break;
//     }
//     return result
// }

let first = true;
let operator = true;


let result1 = "";
let result2 = "";
let result3 = "";
let result4 = "";
let result5 = "";
let result6 = "";
let result7 = "";
let result8 = "";
let result9 = "";
let result0 = "";

let out = document.querySelector('.chek')

function deleteEl() {
    first = true;
    operator = true;

    result1 = "";
    result2 = "";
    result3 = "";
    result4 = "";
    result5 = "";
    result6 = "";
    result7 = "";
    result8 = "";
    result9 = "";
    result0 = "";

    out = document.innerText = '0'
}


function conclusion(a) {
    if (first) {
        result1 += a;
        console.log(result1)
        out.innerText = result1;
    }
    else {
        result2 += a;
        console.log(result2);
        out.textContent = result2;
    }
}

function sum() {
    first = false;
    operator = "+"
    result1 = parseInt(result1);
}

function substract() {
    first = false
    operator = "-"
    result1 = parseInt(result1);
}

function umnozhit() {
    first = false
    operator = "x"
    result1 = parseInt(result1);
}

function razdelit() {
    first = false
    operator = "÷"
    result1 = parseInt(result1);
}



function result() {
    if (operator == "+") {
        console.log(result1 + parseInt(result2));
    }
    else if (operator == "-") {
        console.log(result1 - parseInt(result2));
    }
    else if (operator == "x") {
        console.log(result1 * parseInt(result2));
    }
    else if (operator == "÷") {
        console.log(result1 / parseInt(result2));
    }
}
