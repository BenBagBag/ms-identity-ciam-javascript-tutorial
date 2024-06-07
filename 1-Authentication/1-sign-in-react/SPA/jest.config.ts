// import type { Config } from 'jest';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
    // transform: {},
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@azure/msal-react)'],
};

export default config;