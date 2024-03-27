import {describe, expect, test} from 'vitest'
import {action} from "./";


describe('validateSubsiquance', () => {

    test('should found', () => {
        expect(action([-1,1, 3, 5, 9, 15, 20, 19] , [1, 9, 20, 19])).toBe(true)
    })

    test('should not found subsequence', () => {
        expect(action([-19,12, 4, 8, 20, 11, 20, 19] , [4, 13])).toBe(false)
    })

})
