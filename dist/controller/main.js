'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _schema = require('../model/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  // add a book
  api.post('/add', function (req, res) {
    var newBook = new _schema2.default(req.body);
    newBook.save(function (err) {
      if (err) return res.send(err);
      res.json({ "message": "book saved !" });
    });
  });

  return api;
};
//# sourceMappingURL=main.js.map