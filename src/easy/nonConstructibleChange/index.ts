// const numbers = [5, 7, 1, 1, 2, 3, 22]    20
// 1 > 1 + 0 ? no
// res: 2
// 2 > 2 + 1 ? no
// res: 4
// 3 > 4 + 1 ? no
// res: 7
// 5 > 7 + 1 ? no
// res: 12
// 7 > 12 + 1? no
// res: 19
// 22 > 19 + 1? yes
// res: 20
export function method(arr: number[]): number {
    arr.sort((a, b) => a - b)
    let change = 0

    for (let coin of arr) {
        if (coin > change + 1) {
            return change + 1;
        }

        change += coin
    }
    return change + 1

}
