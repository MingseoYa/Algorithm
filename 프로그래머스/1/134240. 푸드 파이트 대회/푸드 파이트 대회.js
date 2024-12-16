function solution(food) {
    let answer = ''
    for(let i = 1 ; i < food.length ; i ++) {
        const count = food[i] / 2 // 음식 양의 절반만큼
        answer += String(i).repeat(count) // i를 count만큼 추가
    }
    // answer에서 물(0번)을 더하고, 문자열을 뒤집어서 추가
    return answer + "0" + answer.split("").reverse().join("") 
}