'use strict'
const aaa = 10;
const bbb = 15;

function isPositive(number) {
  return number >= 0;
}

/**
 *
 * @param {number} left
 * @param {number} right
 * @returns number
 */

function logic(left, right) {
  const isUnsignedLeft = isPositive(left);
  const isUnsignedRight = isPositive(right);
  if (isUnsignedLeft && isUnsignedRight) {
    return left - right;
  }

  if (!isUnsignedLeft && !isUnsignedRight) {
    return left * right;
  }

  if ((!isUnsignedLeft && isUnsignedRight) || (isUnsignedLeft && !isUnsignedRight)) {
    return left + right;
  }
}

console.log('>>>', logic(aaa, bbb));