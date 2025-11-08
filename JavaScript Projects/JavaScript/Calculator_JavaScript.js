// Creates an object to keep track of values.
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions.
    First_Operand: null,
    // This checks whether or not the second operand has been input by the user.
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now.
    operator: null,
};

// This modifies values each time a number button is clicked.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If we are waiting for the second operand, replace the display with the new digit.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Otherwise, append the digit. If current is 0, overwrite it.
        Calculator.Display_Value = Display_Value === '0'
            ? digit
            : Display_Value + digit;
    }
}

// This section handles decimal points.
function Input_Decimal(dot) {
    // If we are waiting on second operand, ignore accidental decimal.
    if (Calculator.Wait_Second_Operand === true) return;

    // Only add a decimal if it is not already present.
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// This section handles operators (+, -, ×, ÷, =).
function Handle_Operator(nextOperator) {
    const { First_Operand, Display_Value, operator, Wait_Second_Operand } = Calculator;
    const inputValue = parseFloat(Display_Value);

    // If an operator is pressed twice in a row, replace the previous operator.
    if (operator && Wait_Second_Operand) {
        Calculator.operator = nextOperator;
        return;
    }

    // If first operand is not set, set it to the current input.
    if (First_Operand == null && !isNaN(inputValue)) {
        Calculator.First_Operand = inputValue;
    }
    // If an operator already exists, perform the calculation.
    else if (operator) {
        const result = Perform_Calculation[operator](First_Operand, inputValue);

        // Limit floating-point issues.
        Calculator.Display_Value = String(parseFloat(result.toFixed(9)));
        Calculator.First_Operand = result;
    }

    // Now we are waiting for the second operand.
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = nextOperator;
}

// Object that maps operators to actual calculations.
const Perform_Calculation = {
    '/': (first, second) => first / second,
    '*': (first, second) => first * second,
    '+': (first, second) => first + second,
    '-': (first, second) => first - second,
    '=': (first, second) => second
};

// This function resets the calculator back to its initial state.
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// This updates the value shown on the calculator screen.
function Update_Display() {
    // Works with either:
    // - <div class="display">0</div>
    // - or <input class="calculator-screen">
    const display =
        document.querySelector('.display') ||
        document.querySelector('.calculator-screen');

    if (!display) return;

    if (display.tagName.toLowerCase() === 'input') {
        display.value = Calculator.Display_Value;
    } else {
        display.textContent = Calculator.Display_Value;
    }
}

// Initialize display.
Update_Display();

// This listens for button clicks on the calculator.
const keys =
    document.querySelector('.buttons') ||
    document.querySelector('.calculator-keys');

if (keys) {
    keys.addEventListener('click', (event) => {
        const { target } = event;

        // Ignore clicks that are not on a button.
        if (!target.matches('button')) return;

        // Operator buttons
        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }

        // Decimal button
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }

        // Clear / AC button
        if (target.classList.contains('clear')) {
            Calculator_Reset();
            Update_Display();
            return;
        }

        // If none of the above, it must be a number.
        Input_Digit(target.value);
        Update_Display();
    });
}
