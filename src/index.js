import _ from 'lodash';
import parseFile from './parsers.js';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = [...new Set([...keys1, ...keys2])].sort();

  const lines = [];
  
  allKeys.forEach((key) => {
    if (!Object.hasOwn(data1, key)) {
      lines.push(`  + ${key}: ${JSON.stringify(data2[key])}`);
    } else if (!Object.hasOwn(data2, key)) {
      lines.push(`  - ${key}: ${JSON.stringify(data1[key])}`);
    } else if (!_.isEqual(data1[key], data2[key])) {
      lines.push(`  - ${key}: ${JSON.stringify(data1[key])}`);
      lines.push(`  + ${key}: ${JSON.stringify(data2[key])}`);
    } else {
      lines.push(`    ${key}: ${JSON.stringify(data1[key])}`);
    }
  });

  return ['{', ...lines, '}'].join('\n');
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const _format = format;
  try {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    
    return buildDiff(data1, data2);
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export default genDiff;