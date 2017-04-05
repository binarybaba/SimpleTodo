(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp', [
		//3rd party module.
		'ui.bootstrap', 
		'ngAnimate', 
		'ngSanitize'
	]);
	/*I LOVED THIS PATTERN. This is something I have been following at work.
	I dont' know if you got this from somewhere. but if you did got it from somewhere,
	I'm sure they wouldn't have told you why you should include undefined as a third parameter
	 The answer is this - (I read it somewhere so I might not be completely right crosscheck once):
	 before es5, undefined was a property of the global window. Post ES5, undefined is non-configurable, non-writable property.
	 But before that, it was. So the user can go undefined = 'foo' and the shit WOULD work.
	 And we don't want that. So passing undefined in as a third parameter enforces the code to run good evcen if
	 the browser is outdated and using ES3 or something..
	 You can add this in the talk ;)



	*/


})(window, window.angular);