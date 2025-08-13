import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

// Создаем __dirname для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);

test('genDiff flat json files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = `{
  - follow: false
    host: "hexlet.io"
  - proxy: "123.234.53.22"
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

test('genDiff identical files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file1.json');
  const expected = `{
    follow: false
    host: "hexlet.io"
    proxy: "123.234.53.22"
    timeout: 50
}`;
  
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

test('genDiff empty files', () => {
  const filepath1 = getFixturePath('empty.json');
  const filepath2 = getFixturePath('empty.json');
  const expected = '{\n}';
  
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

test('genDiff with one empty file', () => {
  const filepath1 = getFixturePath('empty.json');
  const filepath2 = getFixturePath('file1.json');
  const expected = `{
  + follow: false
  + host: "hexlet.io"
  + proxy: "123.234.53.22"
  + timeout: 50
}`;
  
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});