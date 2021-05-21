function convertFahrToCelsius(temp) {
  if (typeof temp === 'number' || typeof temp === 'string') {
    return (((Number(temp) - 32) * 5) / 9).toFixed(4);
  } else {
    return `${JSON.stringify(
      temp
    )} is not a valid number but a/an ${typeof temp}`;
  }
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));

function printValue(num) {
  let value = '';
  if (num % 2 === 0) value = 'yu';
  else if (num % 3 === 0) {
    value = !value ? 'gi' : `${value}-gi`;
  } else if (num % 5 === 0) {
    value = !value ? 'oh' : `${value}-oh`;
  } else {
    value = num;
  }
  return value;
}
function main(n) {
  const container = [];
  for (let i = 1; i < n + 1; i++) {
    const value = printValue(i);
    container.push(value);
  }
  return container;
}

console.log(main(2));
console.log(main(3));
console.log(main(5));
console.log(main(10));
console.log(main(30));
