/**
 * Imports
 */

var path = require('path')

/**
 * Current version
 */

function version () {
  return require(path.join(process.cwd(), 'package.json')).version
}

/**
 * Exports
 */

module.exports = version
