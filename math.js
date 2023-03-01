let add = (firstNumber, secondNumber) => Number(firstNumber) + Number(secondNumber);
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
let division = (firstNumber, secondNumber) => firstNumber / secondNumber;

function operate(chosenOperator, firstChosenNumber, secondChosenNumber) {
    if (chosenOperator === "+") {
        display.textContent = add(firstChosenNumber, secondChosenNumber);
    } else if (chosenOperator === "-") {
        display.textContent = subtract(firstChosenNumber, secondChosenNumber);
    } else if (chosenOperator === "X") {
        display.textContent = multiply(firstChosenNumber, secondChosenNumber);
    } else if (chosenOperator === "/") {
        display.textContent = division(firstChosenNumber, secondChosenNumber);
    }
};

let displayValue = "";

let chosenOperator = "";

let shownNumber = "";
let firstChosenNumber = "";
let secondChosenNumber = +"";
let mathCalcul = "";
let calculationResult = "";

theFirstNumber = "";
theOperator = "";
theSecondNumber = "";
theResult = "";

let equal = document.querySelector(".buttonEqual");
let clear = document.querySelector(".buttonCe");
let decimal = document.querySelector(".buttonDecimal");
let numbers = document.querySelectorAll(".buttonNumber");
let operators = document.querySelectorAll(".buttonOperator");
let display = document.querySelector(".displayNumber");


function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

numbers.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        handleNumber(e.target.textContent);
    });
});

operators.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        handleOperator(e.target.textContent);
    });
});

decimal.addEventListener("click",(e) => {
    handleDecimal();
});

equal.addEventListener("click",(e) => {
    handleEqual();
});

clear.addEventListener("click",(e) => {
    handleClear();
});

function handleDecimal() {
    if(!shownNumber.includes(".")){
        shownNumber += ".";
        display.textContent = shownNumber;
    }
}

function handleEqual() {
    secondChoseNumber = display.textContent;
    operate(chosenOperator, firstChosenNumber, secondChoseNumber);
    mathNumbers.push(display.textContent);
    mathNumbers.splice(0, 3);
}

function handleClear() {
    displayValue = "";
    chosenOperator = "";
    shownNumber = "";
    firstChosenNumber = "";
    secondChosenNumber = +"";
    mathCalcul = "";
    calculationResult = "";
    display.textContent = "";
    theFirstNumber = "";
    theOperator = "";
    theSecondNumber = "";
    theResult = "";
    mathNumbers.splice(0, 3);
}

function handleNumber(num){
    if (shownNumber.length <= 11) {
        shownNumber += num;
        display.textContent = shownNumber;
    }
}

const mathNumbers = [];
const mathOperators = [];

function continuousMath() {
    if (theOperator === "+") {
        theResult = Number(theFirstNumber) + Number(theSecondNumber);
        display.textContent = theResult;
        mathNumbers.push(theResult);
        mathNumbers.splice(0, 2);
    } else if (theOperator === "-") {
        theResult = theFirstNumber - theSecondNumber;
        display.textContent = theResult;
        mathNumbers.push(theResult);
        mathNumbers.splice(0, 2);
    } else if (theOperator === "X") {
        theResult = theFirstNumber * theSecondNumber;
        display.textContent = theResult;
        mathNumbers.push(theResult);
        mathNumbers.splice(0, 2);
    } else if (theOperator === "/") {
        theResult = theFirstNumber / theSecondNumber;
        display.textContent = theResult;
        mathNumbers.push(theResult);
        mathNumbers.splice(0, 2);
    }
}

function contAdd() {
    if (mathNumbers.length == 0) {
        mathNumbers.push(Number(display.textContent));
        theFirstNumber = Number(display.textContent);
        mathNumbers.push("+");
        theOperator = "+";
        
    } else if (mathNumbers.length == 2) {
        theSecondNumber = Number(display.textContent);
        continuousMath()
        mathNumbers.push("+");
        theFirstNumber = mathNumbers.at(0);
        theOperator = mathNumbers.at(1);
    }
}

function contSubtract() {
    if (mathNumbers.length == 0) {
        mathNumbers.push(Number(display.textContent));
        theFirstNumber = Number(display.textContent);
        mathNumbers.push("-");
        theOperator = "-";
        
    } else if (mathNumbers.length == 2) {
        theSecondNumber = Number(display.textContent);
        continuousMath()
        mathNumbers.push("-");
        theFirstNumber = mathNumbers.at(0);
        theOperator = mathNumbers.at(1);
    }
}

function contMultiply() {
    if (mathNumbers.length == 0) {
        mathNumbers.push(Number(display.textContent));
        theFirstNumber = Number(display.textContent);
        mathNumbers.push("X");
        theOperator = "X";
        
    } else if (mathNumbers.length == 2) {
        theSecondNumber = Number(display.textContent);
        continuousMath()
        mathNumbers.push("X");
        theFirstNumber = mathNumbers.at(0);
        theOperator = mathNumbers.at(1);
    }
}

function contDivision() {
    if (mathNumbers.length == 0) {
        mathNumbers.push(Number(display.textContent));
        theFirstNumber = Number(display.textContent);
        mathNumbers.push("/");
        theOperator = "/";
        
    } else if (mathNumbers.length == 2) {
        theSecondNumber = Number(display.textContent);
        continuousMath()
        mathNumbers.push("/");
        theFirstNumber = mathNumbers.at(0);
        theOperator = mathNumbers.at(1);
    }
}

function handleOperator(op){
    chosenOperator = op;
    if (chosenOperator === "+") {
        contAdd();
        firstChosenNumber = display.textContent;
        shownNumber = "";
    } else if (chosenOperator === "-") {
        contSubtract();
        firstChosenNumber = display.textContent;
        shownNumber = "";
    } else if (chosenOperator === "X") {
        contMultiply();
        firstChosenNumber = display.textContent;
        shownNumber = "";
    } else if (chosenOperator === "/") {
        contDivision();
        firstChosenNumber = display.textContent;
        shownNumber = "";
    }
}

