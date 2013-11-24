'use strict';

angular.module('hackathonApp')
  .controller('GPlusCtrl', function ($scope, $location) {
      gapi.person.go();
  });
