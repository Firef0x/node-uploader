module.exports = {
  linters: {
    '**/*.{js,jsx,json}': [
      'eslint --fix',
      'git add'
    ]
  },
  ignore: [
    'docs/**/*.{js,jsx,json}',
    'public/**/*.{js,jsx,json}',
    'static/**/*.{js,jsx,json}',
    '**/dist/*.min.js',
    'package.json'
  ]
};
