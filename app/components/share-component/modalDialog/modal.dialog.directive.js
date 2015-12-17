(function() {
  'use strict';

  angular
    .module('zideen')
    .directive('anbootModalDialog', anbootModalDialog);

  /** @ngInject */
  function anbootModalDialog(util, $compile) {
    var appPath = util.folder.app;  
    var templateUrl = util.tmpl('{appPath}/{htmlPath}',{
        appPath: appPath,
        htmlPath: 'components/share/modalDialog/modal.dialog.html'
    });

    var directive = {
      restrict: 'E',
      templateUrl: templateUrl,
      scope: {
        state: '=',
        content: '=',
        instance: "=",
        width: '@',
        height: '@',
        styles: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      controller: AnbootModalDialogController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, iElement, iAttrs){
          
          scope.$watch(
            function(scope) { return scope.vm.state; },
            function(newValue, oldValue) {
                if ( newValue !== oldValue && newValue === 'visible' ) {
                    var directive = $compile(util.tmpl('<div {directiveName} value="{data}"></div>',{
                        directiveName: scope.vm.content,
                        data: null
                    }))(scope);
                    iElement.find('div[data-container="modalBody"]').html(directive);
                }
            }
          );

      }
    };

    return directive;

    /** @ngInject */
    function AnbootModalDialogController() {
      var vm = this;
      vm.hideModal = function(){
        this.state = 'invisible';
      };
      
    }
  }

})();
