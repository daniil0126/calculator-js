let data = "";

function add(symbol) {
    data += symbol;
    let result = document.querySelector(".chek").innerText + symbol;
    document.querySelector(".chek").innerText = result;
}
//123+321
function calculate() {
    let j = 0;
    let operator = "";
    let numbers = ["", ""];
    for (let i = 0; i < data.length; i++) {
        if (data[i] != "+" &&
            data[i] != "-" &&
            data[i] != "*" &&
            data[i] != "/") {
            numbers[j] += data[i];
        }
        else {
            operator = data[i];
            j++;
        }
    }

    numbers[0] = parseInt(numbers[0]);
    numbers[1] = parseInt(numbers[1]);

    switch(operator){
        case "+":
            return numbers[0] + numbers[1];
        case "-":
            return numbers[0] - numbers[1];
        case "*":
            return numbers[0] * numbers[1];
        case "/":
            return numbers[0] / numbers[1];
        default:
            return "Ошибка"
    }
}