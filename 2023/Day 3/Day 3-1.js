const { dataDev: data } = require("./data");

const result = [];

const dataArray = data.split(/\n/);

dataArray.forEach((line, i) => {
  Array.from(line.matchAll(/\d{1,3}/g)).forEach((match) => {
    //console.log(match);
    const num = match[0];
    const numIndex = match.index;
    const numLength = num.length;
    //console.log("decons", num, numIndex, numLength);

    let surroundings = "";

    for (
      let j = numIndex > 0 ? numIndex - 1 : 0;
      j <= numIndex + numLength;
      j++
    ) {
      surroundings += dataArray[i - 1]?.charAt(j) ?? "";
    }

    //surroundings += "\n";

    surroundings += line[numIndex - 1] ?? "";
    //surroundings += num;
    surroundings += line[numIndex + numLength] ?? "";

    for (
      let k = numIndex > 0 ? numIndex - 1 : 0;
      k <= numIndex + numLength;
      k++
    ) {
      surroundings += dataArray[i + 1]?.charAt(k) ?? "";
    }

    if (surroundings.match(/[^\s\.]/g)) result.push(Number(num));
    console.log("surroundings", surroundings, num);
  });
});

const total = result.reduce((prev, curr) => prev + curr, 0);
console.log("total", total);
