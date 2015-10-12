'use strict';
const
	Promise = require('bluebird'), // Promises aren't needed for this but are used to provide an example routing API.
	util = require('@sublimemedia/wicker-man-utilities');

let holding = {};

function convertPath(path) {
	return path.replace(/\//gi, '.');
}

module.exports = {
	get(path) {
		const reqVal = util.getFromPath(convertPath(path), holding);

		return Promise[reqVal ? 'resolve' : 'reject'](reqVal);
	},

	set(path, val) {
		let pathInfo = util.getFromPath(convertPath(path), holding, true);

		return Promise.resolve(pathInfo.key ? pathInfo.parent[pathInfo.key] = val : holding[path] = val);
	}
};
