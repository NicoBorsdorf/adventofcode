const { data: data } = require("./data");

const bag = { red: 12, green: 13, blue: 14 };

let result = [];

let total = 0;

Object.keys(data).forEach((game) => {
  let res = true;
  data[game]
    .replaceAll(";", ",")
    .split(",")
    .forEach((game) =>
      game
        .replaceAll(";", ",")
        .split(",")
        .forEach((val) => {
          res =
            Number(val.trim().split(" ")[0]) > bag[val.trim().split(" ")[1]]
              ? false
              : res;
        })
    );
  result.push({ [game]: res });
});

result.forEach((game, i) => {
  if (game[`Game ${i + 1}`]) {
    total += Number(Object.keys(game)[0].split(" ")[1]);
  }
});

console.log("total", total);
