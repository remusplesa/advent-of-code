import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day11 } from "./index.js";

describe('Day 11', () => {
  it('Part 1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day11("day_11/test.txt")[0], 374)
  })

  it('Part 2 - should calculate the valid sum of the numbers', () => {
    assert.equal(day11("day_11/test.txt")[1], 8410)
  })
});
