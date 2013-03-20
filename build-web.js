{
    "baseUrl": "src",
    "paths": {
        "openscadOpenJscadParser": "../web",
        "lib": "../lib"
    },
    "include": ["../tools/almond", "openscadOpenJscadParser"],
    "exclude": ["../lib/underscore"],
    "out": "dist/web-built.js",
    "wrap": {
        "startFile": "tools/start.frag",
        "endFile": "tools/end.frag"
    }
}