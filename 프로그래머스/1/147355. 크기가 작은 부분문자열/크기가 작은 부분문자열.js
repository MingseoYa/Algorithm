function solution(t, p) {
    const numArr = t.split("")
    let count = 0
    
    for(let i = 0 ; i <= t.length - p.length; i++) {
        // t.length - p.length까지 자르기
        const char = numArr.slice(i, i + p.length).join("")
        // char이 p보다 작거나 같으면 카운트 증가
        if(Number(char) <= Number(p)) count++
    }
    
    return count
}