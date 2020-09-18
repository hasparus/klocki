// @ts-check
/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
	collectCoverageFrom: ["packages/**/dist/**/*.{js,ts,tsx}"],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};

module.exports = config;
