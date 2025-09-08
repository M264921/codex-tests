# codex-tests

Minimal Node.js (ESM) project scaffold with built-in tests and PowerShell scripts.

## Requisitos

- Node.js 22+
- (Opcional) npm 10+

## Instalación

Si vas a usar lint/format, instala las devDeps:

```
npm i -D eslint@latest prettier@latest eslint-config-prettier@latest
```

## Comandos

- Desarrollo: `./scripts/dev.ps1 <nombre>`
- Test: `./scripts/test.ps1` o `npm test`
- Lint: `npm run lint` (autofix: `npm run lint:fix`)
- Formateo: `npm run format` (verificar: `npm run format:check`)

## Estructura

- `src/` código fuente (ESM)
- `tests/` pruebas (node:test)
- `scripts/` scripts PowerShell para dev/test/build

## Uso (CLI)

Puedes usar el CLI publicado del paquete sin instalarlo globalmente:

```
npx anton-greet Antonio --shout
```

Para desarrollo local, crea un enlace global y usa el comando:

```
npm link
anton-greet -h
```

También puedes ejecutarlo directamente con Node:

```
node src/index.js [name]
```
