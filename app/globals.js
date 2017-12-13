'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "mpool.stream",
		api_url : 'https://api.mpool.stream',
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
