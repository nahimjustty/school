const display = document.getElementById(`display`);
const historyDisplay = document.getElementById(`history-display`);
let currentMode = `deg`;
let calculationHistory = [];
let lastAnswer = null;

function appendToDisplay(input) {
    display.value += input;
};

function clearEntry() {
    display.value = ""; 
}

function addToHistory(calculation) {
    calculationHistory.push(calculation);
    if (calculationHistory.length  > 5) {
        calculationHistory.shift();
    }
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyDisplay.innerHTML = calculationHistory.join('<br>'); 
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
        addToHistory(`${display.value} `);
        lastAnswer = result;
    }
    catch(error ) {
        display.value = "Error";
    }

}


function setMode(mode) {
    currentMode = mode;

    const degButton = document.querySelector(`#mode-selector .mode-btn:first-child`);

    const radButton = document.querySelector('#mode-selector .mode-btn:last-child');

    if (mode === 'deg') {
        degButton.classList.add('active');
        radButton.classList.remove('active');
    } else if (mode === 'rad') {
        radButton.classList.add('active');
        degButton.classList.remove('active');
    }
    console.log(`Current mode: ${currentMode}`); 
}

function calculateSin() {
    const currentValue = parseFloat(display.value);

    
        let result;
        if (currentMode === 'deg') {
       
            const radians = currentValue * Math.PI / 180;
            result = Math.sin(radians);
        } else {
            result = Math.sin(currentValue);
        }
        display.value = result;
        addToHistory(`sin(${currentValue}) = ${result}`);
    
}

function calculateCos() {
    const currentValue = parseFloat(display.value);
        let result;
        if (currentMode === 'deg') {
            const radians = currentValue * Math.PI / 180;
            result = Math.cos(radians);
        } else {
            result = Math.cos(currentValue);
        }
        display.value = result;
        addToHistory(`cos(${currentValue}) = ${result}`);
}


function calculateTan() {
    const currentValue = parseFloat(display.value);
        let result;
        if (currentMode === 'deg') {
            const radians = currentValue * Math.PI / 180;
            result = Math.tan(radians);
        } else {
            result = Math.tan(currentValue);
        }
        display.value = result;
        addToHistory(`tan(${currentValue}) = ${result}`);
   
}


function calculateSqrt() {
    const currentValue = parseFloat(display.value);
        if (currentValue >= 0) {
            const result = Math.sqrt(currentValue);
            display.value = result;
            addToHistory(`√(${currentValue}) = ${result}`);
        } else {
            display.value = "Error"; // Square root of a negative number
        }
}

function calculateLn() {
    const currentValue = parseFloat(display.value);
        if (currentValue > 0) {
            const result = Math.log(currentValue);
            display.value = result;
            addToHistory(`ln(${currentValue}) = ${result}`);
        } else {
            display.value = "Error"; 
        }
}

function calculateLog() {
    const currentValue = parseFloat(display.value);
        if (currentValue > 0) {
            const result = Math.log(currentValue) / Math.log(10);
            display.value = result;
            addToHistory(`log(${currentValue}) = ${result}`);
        } else {
            display.value = "Error"; 
        }
    
}

function calculatePercentage() {
    const currentValue = parseFloat(display.value);
        const result = currentValue / 100;
        display.value = result;
        addToHistory(`${currentValue}% = ${result}`);
}

function insertPi() {
    display.value = Math.PI;
}

function useAns() {
    if (lastAnswer !== null) {
        appendToDisplay(`Ans = ${lastAnswer}`);
    }

}

function backspace() {
    const currentValue = display.value;
    
    
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}

function clearHistory() {
    calculationHistory = [];
    updateHistoryDisplay();
}

function insertE() {
    display.value = Math.E;
}