#!/usr/bin/env node

import { Command } from 'commander';
import app from '../src/index.js';
import { resolve } from 'path';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format', 'type format')
  .version('0.0.1', '-v, --version', 'output the current version')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = resolve(process.cwd(), filepath1);
    const absolutePath2 = resolve(process.cwd(), filepath2);
    const { parsedData1, parsedData2 } = app(absolutePath1, absolutePath2);
    console.log('File 1:', parsedData1);
    console.log('File 2:', parsedData2);
  });

program.parse();