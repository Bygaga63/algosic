import {describe, expect, test} from 'vitest'
import {tournamentWinner} from "./";


describe('sortedSquaredArray', () => {

    test('should found', () => {
        expect(tournamentWinner([['C#', 'HTML'], ['Python', 'C#'], ['Python', 'HTML']], [0, 1, 0])).toEqual('HTML')
    })

    // test('should not found', () => {
    //     expect(sortedSquaredArray([-4, -2, -1, 3, 5, 9, 10, 20])).not.toStrictEqual([1, 4,  16, 9, 25, 81, 100, 400])
    // })
})
