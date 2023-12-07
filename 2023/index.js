import chalk from 'chalk';
import inquirer from 'inquirer';
import { day1 } from './day_1/index.js';
import { day2 } from './day_2/index.js';
import { day3 } from './day_3/index.js';
import { day4 } from './day_4/index.js';
import { day5 } from './day_5/index.js';
import { day6 } from './day_6/index.js';
import { day7 } from './day_7/index.js';

const puzzleOptions = {
  'Day 1': day1,
  'Day 2': day2,
  'Day 3': day3,
  'Day 4': day4,
  'Day 5': day5,
  'Day 6': day6,
  'Day 7': day7,
}

const log = console.log;
log(chalk.green.bgRed.bold('Advent of code 2023 \n'));

inquirer
  .prompt([
    {
      type: 'list',
      name: 'dayPuzzle',
      message: 'Choose an option:',
      choices: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    },
  ])
  .then((answers) => {
    const [part1, part2] = puzzleOptions[answers.dayPuzzle]()
    log(chalk.yellow.underline(`\n Puzzle for ${answers.dayPuzzle} \n`));
    part1 && log(chalk.yellow(` Part 1 result: ${part1}`));
    part2 && log(chalk.yellow(` Part 2 result: ${part2}`));
  })
  .catch((error) => {
    console.error(error)
    // Prompt couldn't be rendered in the current environment

  }); ``