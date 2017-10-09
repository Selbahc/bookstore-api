'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.listen(_config2.default.port, function () {
  return console.log('Server listening on port ' + _config2.default.port);
});
//# sourceMappingURL=server.js.map