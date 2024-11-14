function solution(n) {
    var answer = '';
    for(i = 1 ; i <= n; i++){
        // 홀수이면
        if (i % 2 !== 0) answer = answer + "수"
        // 짝수이면
        else answer = answer + "박"
    }
    
    return answer;
}