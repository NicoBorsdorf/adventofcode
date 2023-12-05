const { data: data } = require("./data");

const isBetween = (val, start, end) => {
  return Number(val) >= Number(start) && Number(val) <= Number(end);
};

const result = Math.min(
  ...data.seeds.split(" ").map((seed) => {
    let currVal = Number(seed);
    Object.keys(data).map((map) => {
      if (map != "seeds") {
        data[map].split("\n").some((entry) => {
          const [mappedVal, seedStart, range] = entry
            .split(" ")
            .map((num) => Number(num));

          if (isBetween(currVal, seedStart, seedStart + range)) {
            currVal = mappedVal + currVal - seedStart;
            return currVal;
          }
        });
      }
    });
    return currVal;
  })
);

console.log(result);
