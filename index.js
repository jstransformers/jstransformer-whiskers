'use strict';

var whiskers = require('whiskers');

exports.name = 'whiskers';
exports.outputFormat = 'html';

exports.render = function (str, options) {
  return whiskers.render(str, options);
}
