#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to first file')
  .action((filepath1, filepath2) => {
    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    console.log(`Output format: ${program.opts().format}`);
  });

program.parse(process.args);