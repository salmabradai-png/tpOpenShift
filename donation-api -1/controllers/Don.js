'use strict';

var utils = require('../utils/writer.js');
var Don = require('../service/DonService.js');

module.exports.donsGET = function donsGET (req, res, next) {
  Don.donsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.donsIdDELETE = function donsIdDELETE (req, res, next, id) {
  Don.donsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.donsIdGET = function donsIdGET (req, res, next, id) {
  Don.donsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.donsIdPUT = function donsIdPUT (req, res, next, body, id) {
  Don.donsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.donsPOST = function donsPOST (req, res, next, body) {
  Don.donsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
