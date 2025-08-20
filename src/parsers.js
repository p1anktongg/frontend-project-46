import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseData = (data, format) => {
  switch (format) {
  case 'json':
    if (!data.trim()) {
      return {};
    }
    return JSON.parse(data);
  case 'yml':
  case 'yaml':
    if (!data.trim()) {
      return {};
    }
    return yaml.load(data);
  default:
    throw new Error(`Unsupported format: ${format}`);
  }
};

const getFileFormat = (filepath) => {
  const ext = path.extname(filepath).slice(1).toLowerCase();
  return ext;
};

const readFile = (filepath) => {
  const resolvedPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(resolvedPath, 'utf-8');
};

const parseFile = (filepath) => {
  const data = readFile(filepath);
  const format = getFileFormat(filepath);
  return parseData(data, format);
};

export default parseFile;