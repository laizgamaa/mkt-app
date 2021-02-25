module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.test.js'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	modulePaths: ['<rootDir>/src/']
}
