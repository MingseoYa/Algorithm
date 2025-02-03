function solution(n) {
    if (n === 0) return 0
    // 10진법 -> 3진법 (역순)
    let reversedTernary = ""
    while(n > 0) {
        reversedTernary += (n % 3);
        n = Math.floor(n / 3);
    }
    // 3진법(역순) -> 10진법 
    let decimal = reversedTernary.split("").reverse().reduce((acc, digit, index) => acc + Number(digit) * Math.pow(3, index), 0)
    
    return decimal
}