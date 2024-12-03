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

  const map = {
    5: types.indexOf("High"),
    4: types.indexOf("One"),
    3: Object.values(obj).includes(3)
      ? types.indexOf("Three")
      : types.indexOf("Two"),
    2: Object.values(obj).includes(4)
      ? types.indexOf("Four")
      : types.indexOf("Full"),
    1: types.indexOf("Five"),
  };

  return map[Object.keys(obj).length];
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
