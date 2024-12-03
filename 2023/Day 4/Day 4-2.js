const { data: data } = require("./data");

const dataKeys = Object.keys(data);

for (let i = 0; i < dataKeys.length; i++) {
  const card = dataKeys[i];
  const arr = data[card]
    .split(" | ")
    .map((points) => points.split(" ").filter((val) => val != ""));
  let found = Number(card.match(/\d{1,3}/g)[0]);
  arr[0].forEach((num) => {
    arr[1]
      .filter((val) => val == num)
      ?.map(() => {
        found++;
        dataKeys.push(`Card${found}`);
      });
  });
}
//.flat().length;

console.log(dataKeys.length);
