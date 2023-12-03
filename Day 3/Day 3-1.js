const { dataDev: data } = require("./data");

const result = [];

const dataArray = data.split(/\n/);

dataArray.forEach((line, i) => {
  line.match(/\d{1,3}/g)?.forEach((num) => {
    const numIndex = line.search(new RegExp("[^\\d]" + num + "[^\\d]")) + 1;
    const numLength = num.length;

    const surroundings = [];

    surroundings.push(line[numIndex - 1] ?? []);
    surroundings.push(line[numIndex + numLength] ?? []);

    /*surroundings.push(
      dataArray[i - 1]
        ?.split("")
        .slice(
          numIndex > 0 ? numIndex - 1 : 0,
          numIndex > 0 ? numIndex + 2 + numLength : numIndex + numLength + 1
        ) ?? []
    );*/

    surroundings.push(
      dataArray[i + 1]
        ?.split("")
        .slice(
          numIndex,
          dataArray.length >= numIndex + numLength + 1
            ? -(dataArray.length - numIndex - numLength - 1)
            : undefined
        )
    );

    console.log(
      "surroundings",
      num,
      numIndex,
      surroundings,
      numIndex + numLength + 1
    );
  });
});

const total = result.reduce((prev, curr) => prev + curr, 0);
console.log("total", total);
