import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day6 } from "./index.js";

describe('Day 6', () => {
  it('Part 1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day6("day_6/test.txt")[0], 288)
  })

  it('Part 2 - should calculate the valid sum of the numbers', () => {
    assert.equal(day6("day_6/test.txt")[1], 71503)
  })
});
