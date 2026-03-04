import { createAppContext } from './lib/createAppContext.js';

function main() {
  const ctx = createAppContext();
  console.log(`App scaffold ready (${ctx.env})`);
}

main();
