function solution(absolutes, signs) {
    let sum = 0
    for (i = 0; i < absolutes.length; i++) {
        // 양수일 땐 덧셈
        if (signs[i]) sum = sum + absolutes[i]
        // 음수일 땐 뺄셈
        else sum = sum - absolutes[i]
    }
    return sum;
}