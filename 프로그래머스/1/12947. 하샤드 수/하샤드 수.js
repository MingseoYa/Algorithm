function solution(x) {
    // 숫자를 문자열로 바꿔서 쪼개기
    const num = String(x).split("")
    // 문자열 배열 하나씩 꺼내서 숫자로 변환 후 더하기  
    const sum = num.reduce((acc, curr) => acc + Number(curr), 0);
    // x를 sum으로 나누어 떨어지면 true를 리턴, 아니면 false를 리턴
    if (x % sum === 0) return true
    else return false
}