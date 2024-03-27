import {describe, expect, test} from 'vitest'
import {method} from "./";


describe('nonConstructibleChange', () => {

    test('should found', () => {
        expect(method([5, 7, 1, 1, 2, 3, 22])).toBe(20)
    })

    test('should not found', () => {
        expect(method([4, 2, 1, 3, 5, 9, 10, 20])).not.toBe(4)
    })
})
