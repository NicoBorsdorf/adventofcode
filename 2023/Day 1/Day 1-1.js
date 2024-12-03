const { data: data } = require("./data.js");

const values = data.split(/\n/gm);

let total = 0;

values.forEach((val) => {
  const stringNumbers = val.match(/\d/g);
  const numbers = Number(stringNumbers[0] + stringNumbers.pop());
  total += numbers;
});

console.log("total", total);
