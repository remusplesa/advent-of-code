import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day7 } from "./index.js";

describe('Day 7', () => {
  it('Part 1.1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day7("day_7/test.txt")[0], 6440)
  })

  it('Part 1.2 - should calculate the valid sum of the numbers', () => {
    assert.equal(day7("day_7/test2.txt")[0], 6592)
  })
  
  it('Part 2.1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day7("day_7/test.txt")[1], 5905)
  })

  it('Part 2.2 - should calculate the valid sum of the numbers', () => {
    assert.equal(day7("day_7/test2.txt")[1], 6839)
  })
});
