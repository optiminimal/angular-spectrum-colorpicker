/*!
 * angular-spectrum-colorpicker v0.0.1
 * https://github.com/Jimdo/angular-spectrum-colorpicker
 *
 * Angular directive for a colorpicker, that bases on http://bgrins.github.io/spectrum/
 * Idea from http://jsfiddle.net/g/LAJCa/
 *
 * Copyright 2014, Jimdo
 * Released under the MIT license
 */
(function(angular) {
  'use strict';

  // src/js/spectrumColorpicker.module.js
  var angularSpectrumColorpicker = angular.module('angularSpectrumColorpicker', []);

  // src/js/spectrumColorpicker.directive.js
  angularSpectrumColorpicker.directive('spectrumColorpicker', function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: false,
      replace: true,
      template: '<span><input class="input-small" /></span>',
      link: function($scope, $element, attrs, $ngModel) {
        var $input = $element.find('input');
        var onChange = function(color) {
          $scope.$apply(function() {
            $ngModel.$setViewValue(color);
          });
        };
        var options = angular.extend({
          color: $ngModel.$viewValue,
          change: onChange
        }, $scope.$eval(attrs.options));


        // update colorpicker, each time the model has changed
        $ngModel.$render = function() {
          $input.spectrum('set', $ngModel.$viewValue || '');
        };

        $input.spectrum(options);
      }
    };
  });
})(angular);