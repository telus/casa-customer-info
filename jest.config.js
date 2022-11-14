module.exports = {
	collectCoverage: true,
	coverageDirectory: './coverage',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coveragePathIgnorePatterns: ['/stories/', '/src/coverage'],
	// setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
	setupFilesAfterEnv: ['<rootDir>/src/jest/jsdom.setup.jsx'],
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 80,
			lines: 85,
			statements: 85
		}
	}
}
