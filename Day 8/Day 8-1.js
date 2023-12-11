const { data: data } = require("./data");

const firstKey = Object.keys(data)[1]; // 0 == start
const firstLength = data.start.length;
let key;
let i = 0;

while (key != "ZZZ") {
  if (i >= data.start.length) data.start += data.start[i - firstLength];
  key = data[key ?? firstKey][data.start[i] === "L" ? 0 : 1];
  console.log(key);
  i++;
}
console.log("result", key, data.start.length);
