const countFrequency = (words) => {
  const hashmap = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!hashmap.has(word)) {
      hashmap.set(word, 1);
    } else {
      hashmap.set(word, hashmap.get(word) + 1);
    }
  }
  const sortedMap = new Map([...hashmap].sort((a, b) => b[1] - a[1]));
  return sortedMap;
};
const createWordArr = (para) => {
  let n = para.length;
  let arr = [];
  let start = 0,
    end = 0;
  while (end < n) {
    if (para[end] == " ") {
      arr.push(para.slice(start, end));
      start = end + 1;
    }
    end++;
  }
  return arr;
};

export const findFrequency = (para, num) => {
  let n = para.length;
  let words = createWordArr(para);
  let sortedWords = countFrequency(words);
  let result = [];
  let count = 0;
  for (let [key, value] of sortedWords) {
    if (count < num) {
      result.push({ word: key, freq: value });
      count = count + 1;
    } else break;
  }
  return result;
};
