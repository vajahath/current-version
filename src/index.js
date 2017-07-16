'use strict';

const rootPath = require('app-root-path');
const lme = require('lme');

let thisPackage = {};

try {
    thisPackage = rootPath.require('package');
} catch (err) {
    lme.e('No package.json file found in root: ' + rootPath);
    throw err;
}


module.exports = (packageName) => {
    // for cli tools
    if (packageName) return findCliVersion(packageName);
    // for normal packages
    return findPackageVersion();
};

function findCliVersion(packageName) {
    return thisPackage.dependencies[packageName];
}

function findPackageVersion() {
    return thisPackage.version;
}