'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _main = require('../controller/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

_mongoose2.default.connect(_config2.default.mongoUrl, function () {
  console.log('Connected to database');
});

router.use('/bookstore', _main2.default);

exports.default = router;
//# sourceMappingURL=route.js.map