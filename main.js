#!/usr/bin/env node

var Steganographer = require('./lib/steganography');

if (process.argv[2] === 'embed') {
  Steganographer.embed.apply(this, process.argv.slice(3));
} else if (process.argv[2] === 'dig-up') {
  Steganographer.digUp.apply(this, process.argv.slice(3));
} else {
  console.log('Bad command usage');
  process.exit(1);
}