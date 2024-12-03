const { dataDev: data } = require("./data");

const result = Object.keys(data)
  .map((card) => {
    let cardValue = 0;
    const arr = data[card]
      .split(" | ")
      .map((points) => points.split(" ").filter((val) => val != ""));
    arr[0].forEach((num) => {
      if (arr[1].includes(num))
        cardValue === 0 ? cardValue++ : (cardValue = cardValue * 2);
    });

    return cardValue;
  })
  .reduce((p, c) => p + c, 0);

console.log(result);
