
const angular = require('angular');
const test = 9;

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

require('./directives')(ngModule);
