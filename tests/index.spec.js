/* eslint no-undef:0 */

const expect = require('chai').expect;
const cv = require('../src/index');

describe('testing current-version', () => {
	it('should return 0.1.4 while checking', done => {
		expect(cv().version).to.equal('1.0.0');
		done();
	});
});
