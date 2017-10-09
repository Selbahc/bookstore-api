'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _route = require('./routes/route');

var _route2 = _interopRequireDefault(_route);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.use('/app', _route2.default);

app.listen(_config2.default.port, function () {
  return console.log('Server listening on port ' + _config2.default.port);
});
//# sourceMappingURL=index.js.map