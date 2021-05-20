'use strict'

/**
 *
 * @param {string} operation
 *
 */

function getOperationHandler(operation) {
  switch (operation) {
    case '*': return mul;
    case '/': return division;
    case '+': return plus;
    case '-': return minus;
    default: return null;
  }
}

function mathOperation(numb1, numb2, operation) {
  const handler = getOperationHandler(operation);

  if (!handler) {
    throw new Error('Произошла ошибка. Не известная операция.');
  }

  return handler(numb1, numb2);
}

console.log('task-5', mathOperation(1, 2, '/'));
console.log('task-5', mathOperation(1, 2, '='));