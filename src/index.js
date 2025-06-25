import parser from "./parser.js";
import path from 'path';
import fs from 'fs';

const getFormat = (filepath) => path.extname(filepath).slice(1).toLowerCase();

export default (filepath1, filepath2) => {
    const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
    const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
    
    const format1 = getFormat(filepath1);
    const format2 = getFormat(filepath2);   

    return {
        parsedData1: parser(content1, format1),
        parsedData2: parser(content2, format2)
    };
};