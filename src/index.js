import _ from 'lodash';
import parseFile from './parsers.js';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.sortBy(_.union(keys1, keys2));

  const lines = allKeys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return [`  - ${key}: ${data1[key]}`, `  + ${key}: ${data2[key]}`].join('\n');
    }
    return `    ${key}: ${data1[key]}`;
  });

  return ['{', ...lines, '}'].join('\n');
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  try {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    
    if (format === 'stylish') {
      return buildDiff(data1, data2);
    }
    
    // Пока поддерживаем только stylish формат
    return buildDiff(data1, data2);
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export default genDiff;