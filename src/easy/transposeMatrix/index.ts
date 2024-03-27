// [ [1,2,3], [4,5,6], [7,8,9] ]        ->       [ [1,4,7], [2,5,8], [3,6,9] ]
export function method(arr: number[][]): number[][] {
    const result: number[][] = []
    for (let i = 0; i < arr.length; i++) { // [1, 2, 3], [4, 5, 6], [7, 8, 9]
        let sumArray = []
        for (let j = 0; j < arr[i].length; j++) { //[1, 2, 3]
            sumArray.push(arr[j][i])
        }
        result.push(sumArray)
    }
    return result

}
