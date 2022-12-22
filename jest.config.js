const path = require('path')

module.exports = {
	collectCoverage: true,
	coverageDirectory: './coverage',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coveragePathIgnorePatterns: ['/stories/', '/src/coverage'],
	setupFilesAfterEnv: ['<rootDir>/src/jest/jsdom.setup.jsx', '<rootDir>/src/jest/moment.setup.js'],
	coverageThreshold: {
		global: {
			branches: 55,
			functions: 80,
			lines: 80,
			statements: 80
		}
	}
}
