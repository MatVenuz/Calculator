/* constants */
const screen = document.getElementById("screen");
const screenOperations = document.getElementById("operations");
const buttons = document.querySelectorAll(".grid-item");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

/* variables */
let firstValue = "";
let operatorValue = "";
let secondValue = "";
let finalValue = "";

/* mathematical operations functions */
function add(a,b) {
    let result = a + b;
    screen.innerHTML = Math.round(result * 100 ) / 100
    finalValue = result.toString()
    return result;
}

function subtract(a,b) {
    let result = a - b;
    screen.innerHTML = Math.round(result * 100 ) / 100
    finalValue = result.toString()
    return result;
}

function multiply(a,b) {
    let result = a * b;
    screen.innerHTML = Math.round(result * 100 ) / 100
    finalValue = result.toString()
    return result;
}

function divide(a,b) {
    if (a === 0 || b === 0) {
        screen.innerHTML = "ERROR"
        firstValue = "";
        operatorValue = "";
        secondValue = "";
        finalValue = "";
    }
    else {
        let result = a / b;
        screen.innerHTML = Math.round(result * 100 ) / 100
        finalValue = result.toString()
        return result;
    }
}

/* operate function */
function operate(a,b) {
    let firstValueNumber = Number(a);
    let secondValueNumber = Number(b);
    if (operatorValue === "+") {
        add(firstValueNumber,secondValueNumber);
    }
    else if (operatorValue === "-") {
        subtract(firstValueNumber,secondValueNumber);
    }
    else if (operatorValue === "*") {
        multiply(firstValueNumber,secondValueNumber);
    }
    else {
        divide(firstValueNumber,secondValueNumber);
    }
}

/* numbers EvenListener */
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (screen.textContent === "ERROR") {
            screen.innerHTML = "";
            screen.innerHTML += number.value;
            firstValue += number.value;
        }
        else if (firstValue !== "" && operatorValue !== "") {
            if (secondValue === "") {
                screen.innerHTML = "";
                screen.innerHTML += number.value;
                secondValue += number.value;
            }
            else {
                screen.innerHTML += number.value;
                secondValue += number.value;
            }
        }
        else {
            screen.innerHTML += number.value;
            firstValue += number.value;
        }
    })
});

/* mathematical operators EventListener */
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (firstValue !== "" && secondValue !== "" && operatorValue !== "") {
            operate(firstValue,secondValue)
            firstValue = finalValue;
            secondValue = "";
            finalValue = "";
            operatorValue = operator.value;
        }
        else if (finalValue !== "") {
            firstValue = finalValue;
            secondValue = ""
            finalValue = ""
            screen.innerHTML = operator.value;
            operatorValue = operator.value;
        }
        else if (firstValue === "") {
            screen.innerHTML = "ERROR";
        }
        else {
            screen.innerHTML = operator.value;
            operatorValue = operator.value;
        }
    })
})

/* decimal EventListener */
dot.addEventListener("click", () => {
    if (screen.textContent === "ERROR") {
        dot.disable = "true"
    }
    else if (firstValue.indexOf(".") < 1 && operatorValue === "") {
        screen.innerHTML += dot.value;
        firstValue += dot.value;
        dot.disable = "true"
    }
    else if (operatorValue !== "" && secondValue === "") {
        dot.disable = "true"
    }
    else if(secondValue.indexOf(".") < 1 && firstValue !== "" && operatorValue !== "") {
        screen.innerHTML += dot.value;
        secondValue += dot.value;
        dot.disable = "true"
    }
})

/* equal button EventListener */
equal.addEventListener("click", () => {
    if (firstValue !== "" && secondValue !== "") {
        operate(firstValue,secondValue)
        firstValue = "";
        secondValue = "";
    }
})

/* clear button */
clear.addEventListener("click", () => {
    firstValue = "";
    operatorValue = "";
    secondValue = "";
    finalValue = "";
    screen.innerHTML = "";
})