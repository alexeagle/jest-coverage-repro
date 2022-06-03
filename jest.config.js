module.exports = {
  testEnvironment: 'node',
  reporters: ['default'],
  testMatch: ['**/*.test.js'],
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ["*.js"],
};
