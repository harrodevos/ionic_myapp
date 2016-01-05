angular.module('starter.filters', [])

.filter('aapNootMiesFilter', function() {
	return function(aapNootMies) {
		aapNootMies *= 1;
		switch (aapNootMies) {
			case 1:
				return 'aap';
			case 2:
				return 'noot';
			case 3:
				return 'mies';
			case 4:
				return 'wim';
			case 5:
				return 'zus';
			case 6:
				return 'jet';
			case 7:
				return 'teun';
			case 8:
				return 'vuur';
			case 9:
				return 'gijs';
			case 10:
				return 'lam';
			case 11:
				return 'kees';
			case 12:
				return 'bok';
			case 13:
				return 'weide';
			case 14:
				return 'douche';
			case 15:
				return 'hok';
			case 16:
				return 'duif';
			case 17:
				return 'schapen';
		}
		
		return 'no value for ' + aapNootMies;
	};
});
