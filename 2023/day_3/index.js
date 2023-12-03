import { readTxt, matrixPrettyPrint } from "../utils/index.js";

export const day3 = (inputPath = "day_3/input.txt") => {
  const input = readTxt(inputPath);
  const lines = input.split("\n").map((l) => l.trim());

  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function padMatrix(matrix) {
    matrix.forEach((line) => {
      line.unshift(".");
      line.push(".");
    });
    matrix.unshift(new Array(matrix[0].length).fill("."));
    matrix.push(new Array(matrix[0].length).fill("."));

    return matrix;
  }

  const matrix = padMatrix(lines.map((line) => line.split("")));
  const validNumbers = [];

  for (let i = 0; i < matrix.length; i++) {
    let currentNumber = "";
    let isValid = false;

    for (let j = 0; j < matrix[i].length; j++) {
      if (NUMBERS.includes(matrix[i][j])) {
        currentNumber += matrix[i][j];
        if (
          ![...NUMBERS, "."].includes(matrix[i - 1][j - 1]) ||
          ![...NUMBERS, "."].includes(matrix[i - 1][j]) ||
          ![...NUMBERS, "."].includes(matrix[i - 1][j + 1]) ||
          ![...NUMBERS, "."].includes(matrix[i][j - 1]) ||
          ![...NUMBERS, "."].includes(matrix[i][j + 1]) ||
          ![...NUMBERS, "."].includes(matrix[i + 1][j - 1]) ||
          ![...NUMBERS, "."].includes(matrix[i + 1][j]) ||
          ![...NUMBERS, "."].includes(matrix[i + 1][j + 1])
        ) {
          isValid = true;
        }
      } else {
        if (isValid) {
          validNumbers.push(parseInt(currentNumber));
        }
        currentNumber = "";
        isValid = false;
      }
    }
  }

  const s1 = validNumbers.reduce((acc, item) => {
    return acc + item;
  }, 0);

  
  let gearId = 0;
  const regex = /\[\*\d+\]/g;
  const gears = {};

  const matrix2 = padMatrix(
    lines.map((line) =>
      line.split("").map((i) => {
        if (i === "*") {
          gearId += 1;
          gears[`[*${gearId}]`] = [];
          return `[*${gearId}]`;
        }
        return i;
      })
    )
  );

  for (let i = 0; i < matrix2.length; i++) {
    let currentNumber = "";
    let symbol = "";
    let isValid = false;

    for (let j = 0; j < matrix2[i].length; j++) {
      if (NUMBERS.includes(matrix2[i][j])) {
        currentNumber += matrix2[i][j];

        if (regex.exec(matrix2[i - 1][j - 1])) symbol = matrix2[i - 1][j - 1];
        if (regex.exec(matrix2[i - 1][j])) symbol = matrix2[i - 1][j];
        if (regex.exec(matrix2[i - 1][j + 1])) symbol = matrix2[i - 1][j + 1];
        if (regex.exec(matrix2[i][j - 1])) symbol = matrix2[i][j - 1];
        if (regex.exec(matrix2[i][j + 1])) symbol = matrix2[i][j + 1];
        if (regex.exec(matrix2[i + 1][j - 1])) symbol = matrix2[i + 1][j - 1];
        if (regex.exec(matrix2[i + 1][j])) symbol = matrix2[i + 1][j];
        if (regex.exec(matrix2[i + 1][j + 1])) symbol = matrix2[i + 1][j + 1];

        if (symbol.length) {
          isValid = true;
        }
      } else {
        if (isValid && symbol.length) {
          gears[symbol] && gears[symbol].push(parseInt(currentNumber));
        }
        symbol = "";
        currentNumber = "";
        isValid = false;
      }
    }
  }

  const filtered = Object.values(gears).filter((g) => g.length === 2);
  const s2 = filtered
    .map((item) => {
      return item[0] * item[1];
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  return [s1, s2];
};
