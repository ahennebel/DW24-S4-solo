'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:ExecutioncontextCtrl
 * @description
 * # ExecutioncontextCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('ExecutionContextCtrl', function () {
    var ctrl = this;

    ctrl.slideMenuIsVisible = false;

    ctrl.openSlideMenu = function(){
    	ctrl.slideMenuIsVisible = true;
    };
    ctrl.closeSlideMenu = function(){
    	ctrl.slideMenuIsVisible = false;
    };

  });
