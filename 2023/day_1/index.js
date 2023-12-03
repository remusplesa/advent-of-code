import { readTxt } from "../utils/index.js";

const mapValues = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

const extractDigits = (someString) => {
  const digits = [];
  for (let c of someString) {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(c)) {
      digits.push(c);
    }
  }
  return digits;
};

const extractDigits_v2 = (someString) => {
  const digits = [];
  const options = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  options.forEach((opt) => {
    let original = someString;
    while (original.indexOf(opt) > -1) {
      digits.push({ index: original.indexOf(opt), value: opt });
      original = original.replace(opt, "");
    }
  });

  digits.sort((a, b) => {
    return a.index - b.index;
  });

  return digits.map((d) => mapValues[d.value] ?? d.value);
};

export const day1 = (inputPath = "day_1/input.txt") => {
  const input = readTxt(inputPath);
  const lines = input.split("\n");

  const sum_pt1 = lines.reduce((total, line) => {
    const digits = extractDigits(line);

    switch (digits.length) {
      case 0:
        return 0;
      case 1:
        return total + parseInt(digits[0] + digits[0]);
      case 2:
        return total + parseInt(digits[0] + digits[1]);
      case 3:
      default:
        return total + parseInt(digits.shift() + digits.pop());
    }
  }, 0);


  const sum_pt2 = lines.reduce((total, line) => {
    const digits = extractDigits_v2(line);

    switch (digits.length) {
      case 0:
        return 0;
      case 1:
        return total + parseInt(digits[0] + digits[0]);
      case 2:
        return total + parseInt(digits[0] + digits[1]);
      case 3:
      default:
        return total + parseInt(digits.at(0) + digits.at(-1));
    }
  }, 0);

  return [sum_pt1, sum_pt2];
};
