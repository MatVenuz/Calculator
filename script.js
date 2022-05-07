/* constants */
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".grid-item")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const dot = document.querySelector(".dot")
const equal = document.getElementById("equal")

/* mathematical operations functions */
function add(a,b) {
    let result = a + b;
    let rounded = result.toFixed(2)
    screen.innerHTML = rounded
    finalValue = rounded;
    return rounded;
}

function subtract(a,b) {
    let result = a - b;
    let rounded = result.toFixed(2)
    screen.innerHTML = rounded
    return rounded;
}

function multiply(a,b) {
    let result = a * b;
    let rounded = result.toFixed(2)
    screen.innerHTML = rounded
    return rounded;
}

function divide(a,b) {
    let result = a / b;
    let rounded = result.toFixed(2)
    screen.innerHTML = rounded
    return rounded;
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

/* variables */
let firstValue = "";
let operatorValue = "";
let secondValue = "";
let finalValue = "";

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
        if (finalValue !== "") {
            firstValue = finalValue;
            secondValue = ""
            finalValue = ""
            screen.innerHTML = operator.value;
        }
        if (firstValue === "") {
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
    if(firstValue.indexOf(".") < 1 && operatorValue === "") {
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
    if (finalValue !== "") {
        operate(finalValue)
    }
    if (firstValue !== "" && secondValue !== "") {
        operate(firstValue,secondValue)
    }
})
