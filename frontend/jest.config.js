const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.config.tsとテスト環境用の.envファイルが配置されたディレクトリをセット
  dir: './',
})

// Jestのカスタム設定を設置する場所
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
}

module.exports = createJestConfig(customJestConfig) 