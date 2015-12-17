(function() {
  'use strict';

  angular
    .module('zideen')
    .controller('ContainerController', ContainerController);

  /** @ngInject */
  function ContainerController($scope, $compile, util) {
      var anbootBaseFormButtonEvt = util.pubEvt({
        directiveName:'anbootBaseFormButton', 
        triggeredBy: 'clicked'
      });
      
      // export
      util.extend($scope, {
       
        modal: {
            instance: {}
        }
          
      });
      
      $scope.$on(anbootBaseFormButtonEvt, function(event, button) {
          $scope.modal.instance.data = { passMe: 'anyData' };
          $scope.modal.content = 'directive-name-to-embedded-into-modal-body'; //e.g. 'content1
          $scope.modal.state = 'visible';
      });
      
  }

})();
