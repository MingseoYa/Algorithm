function solution(n)
{   
    var answer = 0;
    answer = n.toString().split('').map(Number)
    answer = answer.reduce((acc, cur) => acc + cur, 0)

    return answer
}