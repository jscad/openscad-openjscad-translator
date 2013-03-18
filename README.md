# openscad-openjscad-translator

Node module that translates OpenSCAD syntax (http://www.openscad.org/) into OpenJsCAD syntax (http://joostn.github.com/OpenJsCad/).

See: https://npmjs.org/package/openscad-openjscad-translator

## Install

	npm install openscad-openjscad-translator

## Usage

    var parser = require('openscad-openjscad-translator')
    var fs = require("fs");
    
    var openSCADText = fs.readFileSync("test.scad", "UTF8");
    var openJSCADResult = parser.parse(openSCADText);
    
    console.log(openJSCADResult);