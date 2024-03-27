import {describe, expect, test} from 'vitest'
import {sortedSquaredArray} from "./";


describe('sortedSquaredArray', () => {

    test('should found', () => {
        expect(sortedSquaredArray([-4, -2, -1, 3, 5, 9, 10, 20])).toStrictEqual([1, 4, 9, 16, 25, 81, 100, 400])
    })

    test('should not found', () => {
        expect(sortedSquaredArray([-4, -2, -1, 3, 5, 9, 10, 20])).not.toStrictEqual([1, 4,  16, 9, 25, 81, 100, 400])
    })
})
