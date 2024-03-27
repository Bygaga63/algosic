import {describe, expect, test} from 'vitest'
import {method} from "./";


describe('nonConstructibleChange', () => {

    test('should found', () => {
        expect(method([ [1,2,3], [4,5,6], [7,8,9] ])).toStrictEqual([ [1,4,7], [2,5,8], [3,6,9] ])
    })

    // test('should not found', () => {
    //     expect(method([4, 2, 1, 3, 5, 9, 10, 20])).not.toBe(4)
    // })
})
