{
    "baseUrl": "src",
    "paths": {
        "openscadOpanJscadParser": "../web",
        "lib": "../lib"
    },
    "include": ["../../almond", "openscadOpanJscadParser"],
    "exclude": ["../lib/underscore"],
    "out": "web-built.js",
    "wrap": {
        "startFile": "start.frag",
        "endFile": "end.frag"
    }
}