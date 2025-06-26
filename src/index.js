import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import parser from './parser.js';

const getFormat = filepath => extname(filepath).slice(1).toLowerCase();

export default (filepath1, filepath2) => {
  const content1 = readFileSync(resolve(filepath1), 'utf-8');
  const content2 = readFileSync(resolve(filepath2), 'utf-8');

  return {
    parsedData1: parser(content1, getFormat(filepath1)),
    parsedData2: parser(content2, getFormat(filepath2))
  };
};