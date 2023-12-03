import { describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day1 } from "./index.js";

describe('Day 1', () => {
  it('Part 1 - should calculate the valid sum', () => {
    assert.equal(day1("day_1/test.txt")[0], 142)
  })


  it('Part 2 - should calculate the valid sum', () => {
    assert.equal(day1("day_1/test_pt2.txt")[1], 281)
  })
});
