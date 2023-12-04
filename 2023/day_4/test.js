import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day4 } from "./index.js";

describe('Day 4', () => {
  it('Part 1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day4("day_4/test.txt")[0], 13)
  })

  // it('Part 2 - should calculate the valid sum of gears', () => {
  //   assert.equal(day4("day_4/test.txt")[1], 467835);

  // })
});
