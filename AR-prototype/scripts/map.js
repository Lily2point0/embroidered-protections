var generate = require('generate-source-map');
var fs = require('fs');
var path = require('path');
 
var file = {
  source: fs.readFileSync(path.resolve(path.join(__dirname, '../public/lib/aframe-main.min.js'))),
  sourceFile: 'aframe-main.min.js'
};
 
var map = generate(file);
 
console.log(map.toString());