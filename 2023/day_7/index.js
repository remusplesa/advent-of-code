import { readTxt } from "../utils/index.js";

export const day7 = (inputPath = "day_7/input.txt") => {
  const input = readTxt(inputPath)
    .replaceAll("A", "Z")
    .replaceAll("K", "Y")
    .replaceAll("Q", "X")
    .replaceAll("J", "W");

  const lines = input.split("\n").map((i) => i.trim());

  const hands = lines.map((l) => {
    const [hand, amount] = l.split(" ");
    return { cards: hand, amount: parseInt(amount) };
  });

  const HANDS = {
    7: "Five a Kind",
    6: "Four a Kind",
    5: "Full house",
    4: "Three of a Kind",
    3: "Two pairs",
    2: "One pair",
    1: "High card",
  };
  function parseHand(hand) {
    const all = {};

    hand.split("").forEach((card) => {
      if (all[card]) all[card] += 1;
      else all[card] = 1;
    });

    return all;
  }

  function getHandType(hand) {
    const h = parseHand(hand);
    let pairs = 0;
    let threeAlike = false;
    let fourAlike = false;
    let fiveAlike = false;

    Object.entries(h).forEach(([key, value]) => {
      if (value === 5) fiveAlike = true;
      if (value === 4) fourAlike = true;
      if (value === 3) threeAlike = true;
      if (value === 2) pairs += 1;
    });

    if (fiveAlike) return 7;
    if (fourAlike) return 6;
    if (threeAlike && pairs > 0) {
      return 5;
    }
    if (threeAlike) return 4;
    if (pairs === 2) return 3;
    if (pairs === 1) return 2;

    return 1;
  }

  const handsWithTypes = hands.map((h) => {
    const t = getHandType(h.cards);
    return { ...h, type: t };
  });

  const filtered = handsWithTypes.sort((a, b) => {
    if (a.type > b.type) {
      return -1;
    } else if (a.type === b.type && a.cards > b.cards) {
      return -1;
    } else {
      return 1;
    }
  });
  const result1 = filtered.reverse().reduce((acc, item, index) => {
    const s = acc + item.amount * (index + 1);
    return s;
  }, 0);



  // TODO refactor this bf please :)))
  function getHandType_pt2(hand) {
    const h = parseHand(hand);
    let pairs = 0;
    let threeAlike = false;
    let fourAlike = false;
    let fiveAlike = false;
    let jokers = 0;

    Object.entries(h).forEach(([key, value]) => {
      if(key === "W")jokers=value;
      if (value === 5) fiveAlike = true;
      if (value === 4) fourAlike = true;
      if (value === 3) threeAlike = true;
      if (value === 2 && key !== "W") pairs += 1;
    });

    if(threeAlike && jokers === 1) return 6;
    if(threeAlike && jokers === 2) return 7;
    if(pairs === 1 && jokers ===1) return 4;
    if(pairs === 1 && jokers ===2) return 6;
    if(pairs ===2 && jokers ==1) return 5;
    if(jokers === 4) return 7;
    if(jokers === 3) return 6;
    if(jokers === 2)return 4;
    if(jokers === 1 && fourAlike) return 7;
    if(jokers ===1) return 2;
    if (fiveAlike) return 7;
    if (fourAlike) return 6;
    
    if (threeAlike && pairs > 0) {
      return 5;
    }

    if (threeAlike) return 4;
    if (pairs === 2) return 3;
    if (pairs === 1) return 2;

    return 1;
  }

  const handsWithTypes2 = hands.map((h) => {
    const t = getHandType_pt2(h.cards);
    // console.log({h, t})
    return { ...h, type: t };
  });


  const filtered2 = handsWithTypes2.sort((a, b) => {
    a.cards.replace("J", "0")
    b.cards.replace("J", "0")
    if (a.type > b.type) {
      return -1;
    } else if (a.type === b.type && a.cards > b.cards) {
      return -1;
    } else {
      return 1;
    }
  });
  const result2 = filtered2.reverse().reduce((acc, item, index) => {
    const s = acc + item.amount * (index + 1);
    return s;
  }, 0);
  return [result1, result2];
};

day7();