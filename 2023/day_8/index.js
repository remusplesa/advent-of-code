import { readTxt } from "../utils/index.js";

export const day8 = (inputPath = "day_8/input.txt") => {
  const input = readTxt(inputPath);
  const lines = input.split("\n").map((i) => i.trim());

  const pattern = lines[0];
  const map = lines.slice(2);

  function parseMap(m) {
    const mapObject = {};
    map.forEach((l) => {
      const node = l.split("=")[0].trim();
      const [left, right] = l
        .split("=")[1]
        .trim()
        .replace("(", "")
        .replace(")", "")
        .split(",")
        .map((i) => i.trim());

      mapObject[node] = {
        name: node,
        left,
        right,
      };
    });
    return mapObject;
  }

  function navigateMap(pattern, map) {
    let currentNode = map["AAA"];
    let currentStep = pattern[0];
    let stepIndex = 0;
    let totalSteps = 0;

    while (currentNode.name !== "ZZZ") {
      if (currentStep === "R") {
        currentNode = map[currentNode.right];
      } else {
        currentNode = map[currentNode.left];
      }
      totalSteps += 1;
      if (stepIndex === pattern.length - 1) {
        stepIndex = 0;
      } else {
        stepIndex += 1;
      }
      currentStep = pattern[stepIndex];
    }

    return totalSteps;
  }

  const res1 = navigateMap(pattern, parseMap(map));

  return [res1, 1];
};
