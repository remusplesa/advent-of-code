import { readMatrix, matrixPrettyPrint } from "../utils/index.js";

export const day11 = (inputPath = "day_11/input.txt") => {
  const galaxy = readMatrix(inputPath);

  function expandGalaxy(g, factor = 1) {
    // check empty rows
    for (let i = 0; i < g.length; i++) {
      let isEmptyRow = true;
      for (let j = 0; j < g[i].length; j++) {
        if (g[i][j] === "#") isEmptyRow = false;
      }
      if (isEmptyRow) {
        if (i !== g.length) {
          g.splice(i + 1, 0,
            ...Array.from({ length: factor }, (_, i) =>
              new Array(g.length).fill(".")
            )
          );
        } else {
          g.splice(i, 0,
            ...Array.from({ length: factor }, (_, i) =>
              new Array(g.length).fill(".")
            )
          );
        }
        i += 1;
      }
    }

    // check empty columns
    for (let j = 0; j < g[0].length; j++) {
      let isEmptyCol = true;

      for (let i = 0; i < g.length; i++) {
        if (g[i][j] === "#") isEmptyCol = false;
      }
      if (isEmptyCol) {
        if (j !== g[0].length) {
          g.map((r) =>
            r.splice(j + 1, 0,
              ...new Array(factor).fill(".")

            )
          );
        } else {
          g.map((r) =>
            r.splice(j, 0,
              ...new Array(factor).fill(".")

            )
          );
        }
        j += 1;
      }
    }

    matrixPrettyPrint(g);
    return g;
  }

  function getUniquePlanets(g) {
    let planet = 1;
    const coordinates = {};

    g.map((r, i) =>
      r.map((c, j) => {
        if (c === "#") {
          g[i][j] = planet;
          coordinates[planet] = [i, j];
          planet += 1;
        }
      })
    );
    return [g, coordinates];
  }
  function getPairs(planets) {
    const pairs = [];

    for (let i = 0; i < planets.length; i++) {
      // Loop through the remaining numbers
      for (let j = i + 1; j < planets.length; j++) {
        const pair = [planets[i], planets[j]];
        // Add the pair to the array only if it's unique
        if (!pairs.includes(pair)) {
          pairs.push(pair);
        }
      }
    }
    return pairs;
  }

  function getShortestPath(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  const eg = expandGalaxy(galaxy);
  const [planets, coordinates] = getUniquePlanets(eg);

  const pairs = getPairs(Object.keys(coordinates));

  const res1 = pairs.reduce((acc, pair) => {
    const path = getShortestPath(coordinates[pair[0]], coordinates[pair[1]]);
    return acc + path;
  }, 0);

  
  // ===================================================================================
  // For part 2 should have kept new indexes for rows/cols that would've skipped the expansion factor 
  // without assigning all the empty cells :) 
  // Would be fun do complete this sometimes
  const galaxy2 = readMatrix(inputPath);
  const bigExpand = expandGalaxy(galaxy2, 10);
  const [planets2, coordinates2] = getUniquePlanets(bigExpand);
  matrixPrettyPrint(planets2);

  const pairs2 = getPairs(Object.keys(coordinates2));
  console.log({ pairs2, len: pairs2.length, coordinates2 });
  const res2 = pairs2.reduce((acc, pair) => {
    const path = getShortestPath(coordinates2[pair[0]], coordinates2[pair[1]]);
    return acc + path;
  }, 0);

  console.log({ res2 });
  // ===================================================================================

  return [res1, res2];
};
