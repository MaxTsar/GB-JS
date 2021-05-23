'use strict'

const getIsEven = (numb) => numb % 2 === 0;

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
    continue;
  }

  const isEven = getIsEven(i);
  const viewString = `${isEven ? 'четное число' : 'нечетное число'}`
  const result = `${i} - ${viewString}`;

  console.log(result)
}