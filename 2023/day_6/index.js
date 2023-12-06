import { readTxt } from "../utils/index.js";

export const day6 = (inputPath = "day_6/input.txt") => {
  const input = readTxt(inputPath);
  const lines = input.split("\n").map((i) => i.trim());

  function calculateRace(time, record) {
    let betterOptions = 0;

    for (let i = 1; i < time; i++) {
      const waitTime = i;
      const runTime = time - waitTime;
      const speed = waitTime;

      const totalDistance = runTime * speed;
      if (totalDistance > record) betterOptions += 1;
    }

    return betterOptions;
  }

  function part1() {
    const times = lines[0]
      .split(":")[1]
      .split(" ")
      .filter((i) => i)
      .map((n) => parseInt(n));
    const distance = lines[1]
      .split(":")[1]
      .split(" ")
      .filter((i) => i)
      .map((n) => parseInt(n));
    const results = [];

    times.forEach((time, index) => {
      results.push(calculateRace(time, distance[index]));
    });

    return results;
  }

  function part2() {
    const time = parseInt(
      lines[0]
        .split(":")[1]
        .split(" ")
        .filter((i) => i)
        .join("")
    );
    const distance = parseInt(
      lines[1]
        .split(":")[1]
        .split(" ")
        .filter((i) => i)
        .join("")
    );

    return calculateRace(time, distance);
  }

  const result1 = part1().reduce((acc, item) => acc * item, 1);
  const result2 = part2();

  return [result1, result2];
};
