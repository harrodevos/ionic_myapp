angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
	Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CacheCtrl', function($scope, myCache) {
	$scope.cacheEntry = {};
	$scope.statusMessage = "";
	
	$scope.AddToCache = function(CacheForm, cacheEntry) {
		if (CacheForm.$valid) {
	 		myCache.put(cacheEntry.key, cacheEntry.value);
	 		$scope.statusMessage = "Cache value stored!";
	 	}
	};
	
	$scope.GetFromCache = function(CacheFormRead, cacheEntry) {
		if (CacheFormRead.$valid) {
	 		$scope.cacheValueRead = myCache.get(cacheEntry.keyRead);
	 	}
	};
})

.controller('AngdemoCtrl', function($scope, $compile, $parse, $locale, $timeout, $filter, $cookieStore) {
	/* compile service */
	$scope.doCompilation = function(markup) {
		/*
		 * - $compile(markup) returns a function pointer
		 * - we call this function with the $scope argument
		 * - this returns compiled markup, which then is added to the div
		 * - angular.element is similar to jquery's selecctor
		 */
		$compile(markup)($scope).appendTo(angular.element('#CompiledMarkup'));
	};
	
	/* parse service */
	$scope.doParsing = function(expression) {
		var fn = $parse(expression);
		angular.element('#ParsedContent').append(fn());
	};
	
	/* locale service */
	$scope.myDate = Date.now();
	$scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
	
	/* timeout service */
	$scope.showNameAfterTimeout = function() {
		$scope.name = '';
		$scope.promise = $timeout(function() {
			$scope.name = 'LeClerc';
		}, 3000);
	};
	
	$scope.cancelShowing = function() {
		$timeout.cancel($scope.promise);
	};
	
	/* exception service */
	$scope.throwException = function() {
		throw {message:'Kapuffffffffff'};
	};
	
	/* filter service */
	$scope.filterIt = function(inputValue) {
		var aapNootMiesFilter = $filter('aapNootMiesFilter');
		$('#FilterContent').html(aapNootMiesFilter(inputValue));
	};
	
	/* cookieStore service */
	$scope.event = {name:'Cookie Store Event'};
	
	$scope.saveEventCookie = function() {
		$cookieStore.put('myEvent', $scope.event);
	};
	
	$scope.getEventCookie = function() {
		var eventCookie = $cookieStore.get('myEvent');
		$('#CookieStoreContent').html(eventCookie ? eventCookie.name : '- no cookie set -');
	};
	
	$scope.removeEventCookie = function() {
		$cookieStore.remove('myEvent', $scope.event);
		$('#CookieStoreContent').html('- no cookie -');
	};
});
