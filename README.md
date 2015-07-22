# jstransformer-whiskers

[Whiskers.js](https://github.com/gsf/whiskers.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-whiskers/master.svg)](https://travis-ci.org/jstransformers/jstransformer-whiskers)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-whiskers/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-whiskers?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-whiskers/master.svg)](http://david-dm.org/jstransformers/jstransformer-whiskers)
[![NPM version](https://img.shields.io/npm/v/jstransformer-whiskers.svg)](https://www.npmjs.org/package/jstransformer-whiskers)

## Installation

    npm install jstransformer-whiskers

## API

```js
var whiskers = require('jstransformer')(require('jstransformer-whiskers'))
var template = "Hello {name}!";
var locals = { name: "World" };

whiskers.render(template, locals).body
//=> 'Hello World!'
```

## License

MIT
