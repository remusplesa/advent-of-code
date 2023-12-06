import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day5 } from "./index.js";

describe('Day 5', () => {
  it('Part 1 - should calculate the valid sum of the numbers', () => {
    assert.equal(day5("day_5/test.txt")[0], 35)
  })

});
