function solution(numbers) {
    var answer = [];
    
    for(let i = 0 ; i < numbers.length ; i++) {
        for(let j = i+1 ; j < numbers.length ; j++) {
            const num = numbers[i] + numbers[j]
            // answer에 없다면 추가
            if(!answer.includes(num)) answer.push(num)
        }
    }
    // 오름차순으로 정렬
    return answer.sort((a, b) => a - b)
}