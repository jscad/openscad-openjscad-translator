# openscad-openjscad-translator

**This project is written against an older version of OpenSCAD (v 2011.06) which has now been superseded.**

Node module that translates OpenSCAD syntax (http://www.openscad.org/) into OpenJsCAD syntax (http://joostn.github.com/OpenJsCad/).

See: https://npmjs.org/package/openscad-openjscad-translator


## Table of Contents

- [Installation](#Install)
- [Usage](#Usage)
- [Build](#Build)
- [License](#license)

## Install

	npm install openscad-openjscad-translator

## Usage

### Node

    var parser = require('openscad-openjscad-translator')
    var fs = require('fs')

    var openSCADText = fs.readFileSync("test.scad", "UTF8")
    var openJSCADResult = parser.parse(openSCADText)

    console.log(openJSCADResult)

### Web

    ...
    <script src="../dist/web-built.js"></script>

    <script type="text/javascript">
		var text = document.getElementById('txt').innerText
		console.log(openscadOpenJscadParser.parse(text))
    </script>
    ...

Include ```lib/underscore.js``` and ```dist/web-built.js``` and the **openscadOpenJscadParser** object will be available.  This has two attributes:
* **parse** - a function which accepts OpenSCAD text and returns OpenJsCAD text.
* **parser** - a Jison parser object which can be used for more advanced parsing (e.g. the **parse** method returns the text and the context object, allowing for processing of *use* statements.)

## Build

### Web

	not minified :

		npm run build

	minified:

		npm run build-min


Creates scripts in the ```dist``` folder.


## Develop

### Jison

    npm run build-parser

Compiles the Jison lexer/parser to an AMD module in the ```src``` folder called ```openscad-parser.js```.


## License

As this work is predominantly a port of the OpenSCAD it is therefore also released under the General Public License version 2.
