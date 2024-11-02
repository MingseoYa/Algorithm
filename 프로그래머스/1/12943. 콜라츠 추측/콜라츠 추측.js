function solution(num) {
    if(num === 1) return 0
    let num1 = num
    for (i = 1; i <= 500; i++){
        if(num1 % 2 === 0) {
            num1 = num1 / 2
        }else {
            num1 = num1 * 3 + 1
        }
        if (num1 === 1) return i;
    }

    return -1;
}