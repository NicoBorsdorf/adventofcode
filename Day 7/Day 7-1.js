const { data: data } = require("./data");

// orders of cards and hand types
const cards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const types = ["Five", "Four", "Full", "Three", "Two", "One", "High"];

// return index of type from types array
const getType = (hand) => {
  const obj = {};
  hand.split("").forEach((char) => {
    if (obj[char]) return obj[char]++;
    return (obj[char] = 1);
  });

  switch (Object.keys(obj).length) {
    case 5:
      return types.indexOf("High");
    case 4:
      return types.indexOf("One");
    case 3:
      if (Object.values(obj).includes(3)) return types.indexOf("Three");
      return types.indexOf("Two");
    case 2:
      if (Object.values(obj).includes(4)) return types.indexOf("Four");
      return types.indexOf("Full");
    case 1:
      return types.indexOf("Five");
  }
};

const result = data
  .sort(([nHand], [cHand]) => {
    if (getType(cHand) == getType(nHand)) {
      let i = 0;
      while (cards.indexOf(cHand[i]) == cards.indexOf(nHand[i])) {
        i++;
      }
      return cards.indexOf(cHand[i]) > cards.indexOf(nHand[i]) ? 1 : -1;
    }
    return getType(cHand) > getType(nHand) ? 1 : -1;
  })
  .map(([_, bid], i) => Number(bid) * (i + 1))
  .reduce((p, c) => p + c, 0);

console.log(result);
