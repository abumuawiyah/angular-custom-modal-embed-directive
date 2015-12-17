(function() {
  'use strict';

  angular
    .module('zideen')
    .directive('content1', content1);

  /** @ngInject */
  function content1($compile, util) {
    var appPath = util.folder.app; 

    var templateUrl = util.tmpl('{appPath}/{htmlPath}',{
        appPath: appPath,
        htmlPath: 'components/specific-to-my-project/modalContent/content1/content1.html'
    });
      
    var directive = {
      restrict: 'A',
      templateUrl: templateUrl,
      scope: {
          items: '=',
          styles: '='
      },
      controller: Content1Controller,
      controllerAs: 'vm',
      bindToController: true,
      require: '^anbootModalDialog',
      link: function(scope, iElement, iAttrs, outerController){
          scope.$watch(
            function(scope) { return scope.vm.listItemId; },
            function(newValue, oldValue) {
                if ( newValue !== oldValue ) {
                    var modalContent = iElement.find('div[data-container="modalContent"]');
                    
                    switch(newValue){
                     case 'content1':
                        scope.myData = {};
                        modalContent.html($compile(util.tmpl('<div {directiveName} data="data"></div>',{
                            directiveName: 'content1',
                            data: 'myData'
                        }))(scope));
                        break;
                     case 'content2OrAnyOtherContent':
                        scope.myData = {};
                        modalContent.html($compile(util.tmpl('<div {directiveName} data="data"></div>',{
                            directiveName: 'content2',
                            data: 'myData'
                        }))(scope));
                        break;
                    }
                }
            }
          );
          
      }
    };

    return directive;

    /** @ngInject */
    function Content1Controller($scope) {}
  }

})();
