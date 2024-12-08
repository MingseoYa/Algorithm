function solution(arr1, arr2) {
    let answer = []
    // arr1의 행 개수만큼
    for (let i = 0 ; i < arr1.length ; i++) {
        let arr = [] // 현재 행의 결과 저장할 배열
        // 현재 행의 열 개수만큼
        for (let j = 0 ; j < arr1[i].length ; j++) {
            // arr1과 arr2 요소 더하여 arr에 push
            arr.push(arr1[i][j] + arr2[i][j])
        }
        // 계산된 행을 결과 배열에 push
        answer.push(arr)
    }
    return answer 
}