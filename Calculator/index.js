var buttons = document.getElementsByTagName('td');

var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {

            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";

        } else if (value == "%") {

            operator = "%";
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;

        } else if (value == "AC") {

            display.textContent = "";

        } else if (value == "+/-") {

            operator = "+/-";
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;

        } else if (value == "=") {

            operand2 = parseFloat(text);
            var result = eval(operand1 + " " + operator + " " + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }

        } else {

            display.textContent += value;

        }
    });
}