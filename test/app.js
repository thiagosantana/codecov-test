"use strict";
const assert = require('chai').assert;
const app = require('../app');

describe('Calc', () => {
    it('test add', () => {
        let result = app.add(2, 2);
        assert.equal(result, 4);
    });
    it('test sub', () => {
        let result = app.sub(2, 2);
        assert.equal(result, 0);
    });
    it('test mul', () => {
        let result = app.mul(2, 2);
        assert.equal(result, 4);
    });
    it('test div', () => {
        let result = app.div(2, 2);
        assert.equal(result, 1);
    });
})
