{
    "baseUrl": "src",
    "paths": {
        "openscadOpanJscadParser": "../web",
        "lib": "../lib"
    },
    "include": ["../tools/almond", "openscadOpanJscadParser"],
    "exclude": ["../lib/underscore"],
    "out": "dist/web-built.js",
    "wrap": {
        "startFile": "tools/start.frag",
        "endFile": "tools/end.frag"
    }
}