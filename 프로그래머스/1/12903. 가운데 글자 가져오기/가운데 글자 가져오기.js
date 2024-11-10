function solution(s) {
    // 문자열 길이 계산
    const len = s.length
    // 중간 인덱스 구하기
    const mid = Math.floor(len / 2)
    
    if (len % 2 === 0) {
        return s[mid - 1] + s[mid]
    } else {
        return s[mid]
    }
}