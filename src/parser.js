import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => {
  const content = fs.readFileSync(filepath, 'utf-8');
  const ext = path.extname(filepath).toLowerCase();
  
  if (ext === '.json') {
    return JSON.parse(content);
  }
  
  throw new Error(`Unsupported file extension: ${ext}`);
};

export default parseFile;