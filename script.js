const screen = document.getElementById("screen");
const buttonsParent = document.getElementById("buttons")
const buttons = document.querySelectorAll(".grid-item")

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b
}

function operate() {
    subtract(10,20)
}

let firstValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        screen.innerHTML += button.value
        firstValue += button.value
    })
});
