module.exports = {
  collectCoverageFrom: [
    'client-react/components/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [],
  setupFiles: [],
  testMatch: [
    '<rootDir>/client-react/components/**/?(*.)(test|spec).js?(x)',
    '<rootDir>/client-react/components/**/__tests__/**/*.js?(x)'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpe?g|gif|png|svg|ttf|eot|otf|woff|woff2)$': '<rootDir>/__mocks__fileMock.js'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx'
  ],
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  unmockedModulePathPatterns: [
    'react',
    'enzyme',
    'jest-enzyme'
  ],
  verbose: true,
  testResultsProcessor: './node_modules/jest-html-reporter'
};
