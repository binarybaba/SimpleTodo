(function(window, angular, undefined){
	'use strict';

  angular.module('todoApp')
  .directive('contenteditable', contenteditable);

  contenteditable.$inject = ['$sce']; // okay youre gonna explain this $sce thing to me
  function contenteditable($sce) {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if (!ngModel) return; // do nothing if no ng-model // THANK YOU FOR THIS SPODERMON!!!

        // Specify how UI should be updated
        ngModel.$render = function() {
          element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
          //OH MY GOD WHAT ON EARTH!! WHAT IS GOING ON!!!
        };

        // Listen for change events to enable binding
        element.on('blur keyup change', function() {
          scope.$evalAsync(read);
        });
        read(); // initialize

        // Write data to the model
        function read() {
          var html = element.html();
          // When we clear the content editable the browser leaves a <br> behind
          // If strip-br attribute is provided then we strip this out
          if (attrs.stripBr && html === '<br>') {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
      }
    };
  }
})(window, window.angular);