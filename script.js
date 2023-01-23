function add(a1, a2) {
    let add = a1 + a2;
    return add;
}

function subtract(s1, s2) {
     let subtract = s1 - s2;
     return subtract;
}

function multiply(m1, m2) {
    let multiply = m1 * m2;
    return multiply;
}

function divide(d1, d2) {
    let divide = d1 / d2;
    return divide;
}

function operate(number1, operator, number2) {
    if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operator === "*") {
        return multiply(number1, number2);
    } else if (operator === "/") {
        return divide(number1, number2);
    }
}