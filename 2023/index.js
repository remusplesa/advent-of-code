import chalk from 'chalk';
import inquirer from 'inquirer';
import { day1 } from './day_1/index.js';


const puzzleOptions = {
  'Day 1': day1,
}

const log = console.log;
log(chalk.green.bgRed.bold('Advent of code 2023 \n'));

inquirer
  .prompt([
    {
      type: 'list',
      name: 'dayPuzzle',
      message: 'Choose an option:',
      choices: ['Day 1', 'Day 2'],
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
 
  });