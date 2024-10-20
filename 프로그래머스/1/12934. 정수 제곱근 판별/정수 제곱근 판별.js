function solution(n) {
    // 제곱근 구하기
    const sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)) {
        return (sqrt + 1) ** 2;
    } else {
        return -1
    }

}