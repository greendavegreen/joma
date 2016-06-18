#!/usr/bin/env node

var nu = require('elementa_name_utils');

if (nu.isValidAsset('elementa.000001.xml')) {
  console.log('is asset');
}

console.log('Hello, world!');
