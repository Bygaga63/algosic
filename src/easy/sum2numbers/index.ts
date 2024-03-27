// sum.js
// const numbers = [1, 3, 5, 9, 10, 20, 19] 21
export function sum2Numbers(arr: number[], result: number): number[] {
    const usedNumbers = new Set<number>()

    for (const newNum of arr) {
        const prevNum = result - newNum
        if (usedNumbers.has(prevNum)) {
            return [prevNum, newNum]
        } else {
            usedNumbers.add(newNum)
        }
    }

    return []
}

// const numbers = [1, 3, 5, 9, 10, 19, 20] 25
// 21
export function sum2NumbersWithPointers(arr: number[], targetSum: number) {
    arr.sort((a, b) => a - b);
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex < rightIndex) {
        const currentSum = arr[leftIndex] + arr[rightIndex]
        if (currentSum === targetSum) return [arr[leftIndex], arr[rightIndex]]
        else if (currentSum > targetSum) {
            rightIndex--
        } else {
            leftIndex++
        }
    }
    return []
}