function solution(numbers) {
    let sum = 0
    for (i=0; i <= 9; i++){
        // numbers 배열에 i가 포함되지 않으면 sum에 더해주기
        if(!numbers.includes(i)) sum = sum + i
    }
    return sum;
}