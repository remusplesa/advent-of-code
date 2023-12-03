import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day3 } from "./index.js";

describe('Day 3', () => {
  it('Part 1 - should calculate the valid sum', () => {
    assert.equal(day3("day_3/test.txt")[0], 4361)
    assert.equal(day3("day_3/test2.txt")[0], 925)
    assert.equal(day3("day_3/test3.txt")[0], 336)

  })

  it('Part 2 - should calculate the valid sum', () => {
    assert.equal(day3("day_3/test.txt")[1], 467835);
    assert.equal(day3("day_3/test2.txt")[1], 6756);
    assert.equal(day3("day_3/test3.txt")[1], 999);
  })
});
