import {describe, it } from "node:test";
import assert from 'node:assert/strict';
import { day2 } from "./index.js";

describe('Day 2', () => {
  it('Part 1 - should calculate the valid sum', () => {
    assert.equal(day2("day_2/test.txt")[0], 8)
  })
});
