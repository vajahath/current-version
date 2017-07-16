/* eslint no-undef:0 */

const expect = require('chai').expect;
const cv = require('../src/index');

describe('testing current-version', () => {
    it('should return 1.1.0 while checking', done => {
        expect(cv()).to.equal('1.1.0');
        done();
    });
});