{
    "baseUrl": "src",
    "paths": {
        "openscadOpenJscadParser": "../web",
        "lib": "../lib"
    },
    "include": ["../../almond", "openscadOpenJscadParser"],
    "exclude": ["../lib/underscore"],
    "out": "web-built.js",
    "wrap": {
        "startFile": "start.frag",
        "endFile": "end.frag"
    }
}