/** @type { import('jest').Config } */
const config = { // https://jestjs.io/docs/configuration
  clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test
  collectCoverage: true, // Indicates whether the coverage information should be collected while executing the test
  coverageDirectory: 'coverage', // The directory where Jest should output its coverage files
  coverageProvider: 'v8', // Indicates which provider should be used to instrument code for coverage
  coverageReporters: [ 'json-summary' ], // A list of reporter names that Jest uses when writing coverage reports + https://github.com/the-bugging/istanbul-badges-readme/blob/develop/README.md#advanced-usage-arguments
}

export default config
