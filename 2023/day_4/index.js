import { readTxt } from "../utils/index.js";

export const day4 = (inputPath = "day_4/input.txt") => {
  const input = readTxt(inputPath);
  const lines = input.split("\n").map((l) => l.trim());

  function getCardData(line) {
    const [id, data] = line.split(":");
    const [winning, selected] = data.split("|");
    return {
      id: id.replace("Card ", ""),
      winning: winning
        .trim()
        .split(" ")
        .filter((n) => n !== "")
        .map((i) => i.trim()),
      selected: selected
        .trim()
        .split(" ")
        .filter((n) => n !== "")
        .map((i) => i.trim()),
    };
  }
  function calcRows(lines) {
    const cardsPoints = lines.map((card) => {
      let okValues = 0;
      const { id, winning, selected } = getCardData(card);

      selected.forEach((n) => {
        if (winning.includes(n)) {
          okValues += 1;
        }
      });

      if (okValues > 0) {
        return 2 ** (okValues - 1);
      }
      return 0;
    });

    return cardsPoints.filter((v) => v).reduce((acc, item) => acc + item, 0);
  }

  const s1 = calcRows(lines);

  return [s1, 2];
};
