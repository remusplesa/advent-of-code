import { readTxt } from "../utils/index.js";

export const day2 = () => {
  const input = readTxt("day_2/input.txt");
  const lines = input.split("\n");

  function getId(line) {
    return parseInt(line.split(":")[0].replace("Game ", ""));
  }

  function parseEntry(entry) {
    const maxValues = {
      red: 0,
      green: 0,
      blue: 0
    }
    const rounds = entry.split(":")[1].split(";");
    rounds.forEach((round) => {
      round.split(",").forEach((item) => {
        const [value, color] = item.trim().split(" ");

        if (maxValues[color] < parseInt(value)) maxValues[color] = value;
      })
    })

    return maxValues;
  }

  const sum1 = lines.reduce((acc, line) => {
    const id = getId(line);
    const cleanGameValues = parseEntry(line);
    if (cleanGameValues.red <= 12 &&
      cleanGameValues.green <= 13 &&
      cleanGameValues.blue <= 14) {
      return acc + id
    }
    return acc
  }, 0)

  return [sum1, 2]
}