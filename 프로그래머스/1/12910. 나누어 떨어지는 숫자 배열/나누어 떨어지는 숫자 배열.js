function solution(arr, divisor) {

    var answer = [];
    answer = arr.filter(num => num % divisor === 0)
    if (answer.length === 0) {
        return [-1]
    }
    answer.sort((a, b) => a - b);
    return answer;
}