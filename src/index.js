import parseFile from './parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  try {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    
    // Пока просто возвращаем информацию о прочитанных данных
    return `Successfully read files:\nFile 1: ${JSON.stringify(data1)}\nFile 2: ${JSON.stringify(data2)}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export default genDiff;