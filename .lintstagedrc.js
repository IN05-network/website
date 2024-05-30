const path = require('node:path');

const buildLintCommand = (filenames) =>
  `pnpm lint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

const buildFormatCommand = (filenames) =>
  `pnpm format ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')} `;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildLintCommand],
  '**/*': [buildFormatCommand],
};
