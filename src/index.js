import _ from 'lodash';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const getDiff = (file1, file2) => {
  const keys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));
  
  return keys.map((key) => {
    if (!_.has(file1, key)) {
      return `  + ${key}: ${file2[key]}`;
    }
    if (!_.has(file2, key)) {
      return `  - ${key}: ${file1[key]}`;
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return [`  - ${key}: ${file1[key]}`, `  + ${key}: ${file2[key]}`].join('\n');
    }
    return `    ${key}: ${file1[key]}`;
  }).join('\n');
};

export default (filepath1, filepath2) => {
  const content1 = readFileSync(resolve(filepath1), 'utf-8');
  const content2 = readFileSync(resolve(filepath2), 'utf-8');
  
  const file1 = JSON.parse(content1);
  const file2 = JSON.parse(content2);

  return `{\n${getDiff(file1, file2)}\n}`;
};