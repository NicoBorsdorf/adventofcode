const { data: data } = require("./data");

const result = data.Time.split(" ")
  .map(
    (time, i) =>
      Array.from({ length: time })
        .map((_, j) =>
          j * (time - j) > data.Distance.split(" ")[i] ? j * (time - j) : null
        )
        .filter((val) => val != null).length
  )
  .reduce((p, c) => p * c, 1);

console.log(result);
