// const numbers = [-4, -2, -1, 3, 5, 9, 10, 20]     [1, 4, 9, 16, 81, 100, 400]
export function sortedSquaredArray(arr: number[]): number[] {
    let smallerIdx = 0
    let largeIdx = arr.length - 1
    const result: number[] = new Array(arr.length).fill(0)
    for (let i = arr.length - 1; i >= 0; i--) {
        const largeValue = arr[largeIdx] * arr[largeIdx]
        const smallerValue = arr[smallerIdx] * arr[smallerIdx]

        if (largeValue >= smallerValue) {
            result[i] = largeValue
            largeIdx--
        } else {
            result[i] = smallerValue
            smallerIdx++
        }
    }
    return result
}
