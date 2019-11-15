const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
  }

function updateDisplay() {
    const display = document.querySelector('.calculator-display');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();

  const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
      updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
      updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
      updateDisplay();
    return;
  }


  inputDigit(target.value);
    updateDisplay();

    function inputDecimal(dot) {
        if (calculator.waitingForSecondOperand === true) return;
      
        if (!calculator.displayValue.includes(dot)) {
          calculator.displayValue += dot;
        }
      }

      const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand
      };

      function handleOperator(nextOperator) {
        const { firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);
      
        if (firstOperand == null) {
          calculator.firstOperand = inputValue;
        } else if (operator) {
          const result = performCalculation[operator](firstOperand, inputValue);
      
          calculator.displayValue = String(result);
          calculator.firstOperand = result;
        }
      
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
        console.log(calculator);
      }

      function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
        console.log(calculator);
      }

      

  if (target.classList.contains('delete')) {
      console.log('delete', target.value)
  }
});