const { data: data } = require("./data");

// too high 2963521253
//   wring  84363105
// too low  77318463

const dataArray = data.split(/\n/);

function getNumbers(line, index) {
  let start = index - 1;
  let end = index + 1;
  if (line?.substring(start, end + 1).match(/\d/g)) {
    while (line[start]?.match(/\d/)) {
      start--;
    }
    console.log(line);
    console.log(line[end]);
    while (line[end]?.match(/\d/)) {
      end++;
    }

    console.log("subs", line.substring(start, end));

    return line.substring(start, end).match(/\d{1,3}/g) ?? [];
  }
  return [];
}

const result = dataArray
  .map((line, i) => {
    const tmp = [];
    Array.from(line.matchAll(/\*/g)).map((match) => {
      const index = match.index;

      const foundNums = (
        dataArray[i - 1]?.substring(index - 1, index + 2) +
        "\n" +
        line.substring(index - 1, index + 2) +
        "\n" +
        dataArray[i + 1]?.substring(index - 1, index + 2) +
        "\n"
      ).match(/\d{1,3}/g);
      console.log("num", foundNums);

      if (foundNums.length == 2) {
        const sums = [];

        sums.push(getNumbers(dataArray[i - 1], index));
        sums.push(getNumbers(line, index));
        sums.push(getNumbers(dataArray[i + 1], index));

        console.log(sums);

        tmp.push(
          sums.flat().reduce((prev, curr) => Number(prev) * Number(curr), 1)
        );
        //console.log(tmp);
      }
    });
    return tmp;
  })
  .flat();

const total = result.reduce((prev, curr) => Number(prev) + Number(curr), 0);
console.log("total", total);
