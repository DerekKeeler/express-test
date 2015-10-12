'use strict';
const
	Promise = require('bluebird'), // Promises aren't needed for this but are used to provide an example routing API.
	util = require('@sublimemedia/wicker-man-utilities');

let holding = {};

module.exports = {
	get(path) {
		const reqVal = util.getFromPath(path.replace(/\//gi, '.'), holding);

		return Promise[reqVal ? 'resolve' : 'reject'](reqVal);
	},

	set(param, val) {
		return Promise.resolve(holding[param] = val);
	}
};
