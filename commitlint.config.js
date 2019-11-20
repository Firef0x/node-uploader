module.exports = {
  extend: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 102],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'docs',
        'feat',
        'fix',
        'merge',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ],
    'scope-empty': [0, 'never'],
    'scope-case': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
