#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';

const program = new Command();

const gendiff = program
  .name('gendiff')
  .option('-f, --format', 'type format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((a, b, options) => {
    console.log('a', a);
    console.log('b', b);
    console.log('options', options);
  });

  gendiff
    .command('split')
    .argument('<string>')
    .action((str => {
      console.log(str.split(':'))
    }));

  gendiff
    .command('generate')
    .description('generate template for project')
    .action(() => {
      const srcDir = path.join(process.cwd(), 'src');
      const indexFile = path.join(srcDir, 'index.js');
      const parseFile = path.join(srcDir, 'parser.js');

      if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(scrDir);
      }
      const parserContent = `export default () => {\n   console.log('parser');\n}`;
      fs.writeFileSync(parserFile, parserContent);

      const indexContent = `import parsr from "./parser.js";\n\nexport default () => \n   console.log('gendiff');\n    parser();\n}`;
      fs.writeFileSync(indexFile, indexContent);

      console.log('Projct structur generated successfully');
    });

    gendiff.parse();

program.parse();