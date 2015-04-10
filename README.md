# jstransformer-whiskers

JSTransformer support for [whiskers.js](https://github.com/gsf/whiskers.js).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-whiskers/master.svg)](https://travis-ci.org/jstransformers/jstransformer-whiskers)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-whiskers/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-whiskers?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-whiskers.svg)](https://www.npmjs.org/package/jstransformer-whiskers)

## Installation

    npm install jstransformer-whiskers

## API

```js
var whiskers = require('jstransformer')(require('jstransformer-whiskers'))
var template = "Hello {name}!";
var options = {};
var locals = { name: "World" };

whiskers.render(template, options, locals).body
//=> 'Hello World!'
```

## License

MIT
