import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day8 } from "./index.js";

describe('Day 8', () => {
  it('Part 1.1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day8("day_8/test.txt")[0], 2)
  })

  it('Part 1.2 - should calculate the valid sum of the numbers', () => {
    assert.equal(day8("day_8/test2.txt")[0], 6)
  })
  
});
