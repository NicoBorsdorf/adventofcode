const { data: data } = require("./data.js");

const toNumber = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const values = data
  .split(/\n/gm)
  .map((line) => {
    console.log("line", line);

    const numbers = Array.from(
      line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)
    )
      .flat()
      .filter((val) => val != "")
      .map((num) => toNumber[num] || num);

    return Number(numbers[0] + numbers.pop());
  })
  .reduce((prev, curr) => prev + curr, 0);

console.log("values", values);
