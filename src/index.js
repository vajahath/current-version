'use strict';

const pull = require('app-root-path').require;
const lme = require('lme');

let thisPackage = {};

module.exports = () => {
	try {
		thisPackage = pull('package');
	} catch (err) {
		lme.e('No package.json file found in application root');
	}

	return thisPackage;
};
