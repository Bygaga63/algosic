// const numbers = [1, 3, 5, 9, 10, 20, 19]
// const subsiquence = [3, 10, 19]
export function action(arr: number[], subsiquence: number[]): boolean {
    let leftIndex = 0
    for (const num of arr) {
        if (leftIndex === subsiquence.length) {
            return true
        }
        if (num === subsiquence[leftIndex]) {
            leftIndex++
        }
    }

    return leftIndex === subsiquence.length
}
