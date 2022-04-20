module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/src/**/*.test.js'],
    collectCoverageFrom: ['<rootDir>/src/**/*.js'],
    coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover'],
    coverageThreshold: {
        'src/Foo/': {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        }
    }
};