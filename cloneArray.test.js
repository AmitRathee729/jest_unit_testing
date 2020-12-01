const { test, expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('properly clones array', () =>{
    const array = [1,2,3]
    // toBe is strickly equal but not toEqual
    expect(cloneArray(array)).toEqual(array)
    // .not.toBe is opposite to .toBe
    expect(cloneArray(array)).not.toBe(array)
})