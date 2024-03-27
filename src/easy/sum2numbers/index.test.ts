import {describe, expect, test} from 'vitest'
import {sum2Numbers, sum2NumbersWithPointers} from "./";


describe('sum2Numbers', () => {

    test('should found', () => {
        expect(sum2Numbers([1, 3, 5, 9, 10, 20, 19] , 21)).toStrictEqual([1, 20])
    })

    test('should not found', () => {
        expect(sum2Numbers([1, 3, 5, 9, 10, 20, 19] , 26)).toStrictEqual([])
    })
})

describe('sum2NumbersWithSort', () => {

    test('should found', () => {
        expect(sum2NumbersWithPointers([1, 3, 5, 9, 10, 20, 19] , 21)).toStrictEqual([1, 20])
    })

    test('should not found', () => {
        expect(sum2NumbersWithPointers([1, 3, 5, 9, 10, 20, 19] , 26)).toStrictEqual([])
    })
})