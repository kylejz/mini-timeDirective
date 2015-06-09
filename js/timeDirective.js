var app = angular.module('timeApp');

app.directive('showTime', function() {
	return {
		restrict: 'E',
		template: '<div>The current time is {{time | date: "shortTime"}}',
		link: function(scope, elem, attrs) {
			scope.time = new Date();
		}
	}

})