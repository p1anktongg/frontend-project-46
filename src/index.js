import parseFile from './parser.js';
import path from 'path';

const genDiff = (filepath1, filepath2, formagt = 'stylish') => {
  
  const absolutePath1 = path.isAbsolute(filepath1) ? filepath1 : path.resolve(process.cwd(), filepath1);
  const absolutePath2 = path.isAbsolute(filepath2) ? filepath2 : path.resolve(process.cwd(), filepath2);
  
  
  const data1 = parseFile(absolutePath1);
  const data2 = parseFile(absolutePath2);
  
  
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();
  
  const diffLines = [];
  
  keys.forEach(key => {
    if (!Object.hasOwn(data1, key)) {
     
      diffLines.push(`  + ${key}: ${String(data2[key])}`);
    } else if (!Object.hasOwn(data2, key)) {
     
      diffLines.push(`  - ${key}: ${String(data1[key])}`);
    } else if (data1[key] !== data2[key]) {
      
      diffLines.push(`  - ${key}: ${String(data1[key])}`);
      diffLines.push(`  + ${key}: ${String(data2[key])}`);
    } else {
      
      diffLines.push(`    ${key}: ${String(data1[key])}`);
    }
  });
  
  return `{\n${diffLines.join('\n')}\n}`;
};

export default genDiff;