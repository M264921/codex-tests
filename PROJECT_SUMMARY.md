# Project Summary

- Path: C:\\Users\\anton\\Projects\\codex-tests
- Branch: feat/shout

## Tools (global)

- Node: v22.14.0
- Npm: 11.6.0
- Codex: codex-cli 0.30.0
- Git: git version 2.51.0.windows.1
- GH: gh version 2.78.0 (2025-08-21)
- Ripgrep:

## NPM scripts

- dev: node src/index.js
- build: node -e "console.log('No build step yet')"
- test: node --test
- lint: eslint .
- lint:fix: eslint . --fix
- format: prettier . --write
- format:check: prettier . --check
- prepare: husky
- coverage: c8 -r text -r lcov npm test

## NPM dependencies

- (none)

## NPM devDependencies

- @eslint/js: ^9.35.0
- c8: ^10.1.3
- eslint: ^9.35.0
- eslint-config-prettier: ^10.1.8
- globals: ^16.3.0
- husky: ^9.1.7
- lint-staged: ^16.1.6
- prettier: ^3.6.2

## Key files / setup

- eslint.config.js: ✅
- .prettierrc: ✅
- .prettierignore: ✅
- .editorconfig: ✅
- .husky/pre-commit: ✅
- .github/workflows/ci.yml: ✅
- .gitattributes: ✅
- scripts/dev.ps1: ✅
- scripts/test.ps1: ✅
- tests/unit: ✅
- tests/integration: ✅

## Git

## OPENAI_API_KEY

- SET (hidden)

_Generated: 2025-09-08 16:38:42Z_
