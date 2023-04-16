/**@type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  rootDir: "../../",
  collectCoverage: true,
  passWithNoTests: true,
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.(spec|test).ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  collectCoverageFrom: [
    "**/**/*.{ts,tsx}",
    "!**/**/*.test.{ts,tsx}",
    "!**/src/types.ts",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/__tests__/**",
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/src/utils/*",
    "<rootDir>/src/app.ts",
    "<rootDir>/src/main.ts",
    "<rootDir>/src/types.ts",
    "<rootDir>/scripts/vite/vite.config.ts",
  ],
};
