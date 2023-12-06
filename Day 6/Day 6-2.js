const { data: data } = require("./data");

const time = Number(data.Time.replaceAll(" ", ""));
const distance = Number(data.Distance.replaceAll(" ", ""));

const result = Array.from({ length: time })
  .map((_, i) => (i * (time - i) > distance ? i * (time - i) : null))
  .filter((val) => val != null).length;

console.log(result);
