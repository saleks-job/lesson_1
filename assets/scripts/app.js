const defaultValue = 0;

let result = defaultValue;

const log = [];

function getInputValue() {
  return userInput.value;
}

function generateDescription(operator, resultBefore, userValue) {
  return `${resultBefore} ${operator} ${userValue}`;
}

function generateLog(operation, prevResult, operationNumber, newResult) {
  let logEntry = {
    operator: operation,
    prevValue: prevResult,
    number: operationNumber,
    result: newResult
  };

  log.push(logEntry);
  console.log(log)
}

function add() {
  const initialResult = result;
  const userValue = getInputValue();
  result += parseInt(getInputValue());

  generateLog('ADD', initialResult, userValue, result);
  outputResult(result, generateDescription('+', initialResult, userValue))
}

function subtract() {
  const initialResult = result;
  const userValue = getInputValue();
  result -= parseInt(getInputValue());

  generateLog('SUBTRACT', initialResult, userValue, result);
  outputResult(result, generateDescription('-', initialResult, userValue))
}

function multiply() {
  const initialResult = result;
  const userValue = getInputValue();
  result *= parseInt(getInputValue());

  generateLog('MULTIPLY', initialResult, userValue, result);
  outputResult(result, generateDescription('*', initialResult, userValue))
}

function divide() {
  const initialResult = result;
  const userValue = getInputValue();
  result /= parseInt(getInputValue());

  generateLog('DIVIDE', initialResult, userValue, result);
  outputResult(result, generateDescription('/', initialResult, userValue))
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);