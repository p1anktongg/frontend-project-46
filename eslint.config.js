import globals from 'globals';

export default [
  {
    files: ['**/*.js'], 
    languageOptions: {
      ecmaVersion: 2022, 
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es6
      }
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['__tests__/**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      
      'no-undef': 'off'
    }
  }
];
