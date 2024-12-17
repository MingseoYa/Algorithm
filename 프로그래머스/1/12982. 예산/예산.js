function solution(d, budget) {
    d.sort((a, b) => (a - b)) // 오름차순으로 정렬
    let count = 0 // 지원 가능한 부서 수
    let sum = 0 // 사용된 예산
    
    for(let amount of d) {
        if (amount + sum <= budget) {
            sum += amount
            count ++
        }
    }
    return count
    
}