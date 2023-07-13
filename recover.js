const bs58 = require('bs58');
const fs = require('fs');
b = bs58.decode('2DNpCrHRqBxe2aQgZ9PzbepGERWpU8YJiC7wGNH63iCgxVz2PCbZ9iSmU3k5LuhSbMU7btKLRU3mrxXYBLvZoHJu');
j = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT);
fs.writeFileSync('key.json', `[${j}]`);