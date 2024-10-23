function solution(seoul) {
    const index = seoul.findIndex(firstName => firstName === "Kim");
    return `김서방은 ${index}에 있다`;
}