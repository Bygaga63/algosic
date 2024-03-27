//[['C#', 'HTML'], ['Python', 'C#'], ['Python', 'HTML]]
// [0, 1, 0]
// HTML
const HOME_TEAM = 0
export function tournamentWinner(arr: Array<string[]>, results: number[]): string {
    let tournamentWinner = ''
    let scores: Record<string, number> = {  }

    for (let i = 0; i < arr.length; i++) {
       const result = results[i]

        const currentWinnerIndex = result === HOME_TEAM ? 1 : 0
        const currentWinner = arr[i][currentWinnerIndex]

        if (!scores[currentWinner]) {
            scores[currentWinner] = 0
        }

        scores[currentWinner]++


        if ( !tournamentWinner || scores[currentWinner] > scores[tournamentWinner] ) {
            tournamentWinner = currentWinner
        }
    }


    return tournamentWinner
}
