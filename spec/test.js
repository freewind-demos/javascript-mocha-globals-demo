import hello from '../hello'
import {expect} from 'chai'

describe('mocha', function () {
    it('should work with ES6 import/export', function () {
        const words = hello('mocha')
        expect(words).to.eq('Hello, mocha!')
    })
})
