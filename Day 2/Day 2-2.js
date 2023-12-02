const { data: data } = require("./data");

let result = [];

let total = 0;

Object.keys(data).forEach((game) => {
  const lowest = { red: 0, blue: 0, green: 0 };
  data[game]
    .replaceAll(";", ",")
    .split(",")
    .forEach((game) =>
      game
        .replaceAll(";", ",")
        .split(",")
        .forEach((val) => {
          lowest[val.trim().split(" ")[1]] =
            val.trim().split(" ")[0] >= lowest[val.trim().split(" ")[1]]
              ? Number(val.trim().split(" ")[0])
              : lowest[val.trim().split(" ")[1]];
        })
    );
  result.push(lowest);
});

result.forEach((game) => (total += game.red * game.blue * game.green));

console.log("result", result);
console.log("total", total);
