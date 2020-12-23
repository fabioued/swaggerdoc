'use strict';

var utils = require('../utils/writer.js');
var Rides = require('../service/RidesService');

module.exports.getRidePrices = function getRidePrices (req, res, next) {
  var body = req.swagger.params['body'].value;
  Rides.getRidePrices(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRideWaitingTime = function getRideWaitingTime (req, res, next) {
  var body = req.swagger.params['body'].value;
  Rides.getRideWaitingTime(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchRide = function searchRide (req, res, next) {
  var body = req.swagger.params['body'].value;
  Rides.searchRide(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
