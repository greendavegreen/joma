#!/usr/bin/env node

var nu = require('elementa_name_utils');
var pu = require('elementa-parse-utils');


var xml = 'hi';
var article = pu.newArticle(xml);

if (nu.isValidAsset('elementa.000001.xml')) {
  console.log('is asset');
}


console.log('Hello, world!');
