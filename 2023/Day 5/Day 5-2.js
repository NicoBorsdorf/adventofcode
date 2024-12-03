const { data: data } = require("./data");

const isBetween = (val, start, end) => {
  return Number(val) >= Number(start) && Number(val) <= Number(end);
};

const result = Math.min(
  ...data.seeds.match(/\d{1,}\s\d{1,}/g).map((seeds) => {
    const [seed, range] = seeds.split(" ").map((num) => Number(num));
    console.log(seed, range);
    let tmp = [];
    let i = 0;
    while (i <= range) {
      let currVal = seed + i;
      Object.keys(data).map((map) => {
        if (map != "seeds") {
          data[map].split("\n").map((entry) => {
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
      tmp.push(currVal);
      i + 100;
      if (i % 10000 === 0) tmp = [Math.min(...tmp)];
    }
    console.log("done");
    return Math.min(...tmp);
  })
);

console.log("result", result);
