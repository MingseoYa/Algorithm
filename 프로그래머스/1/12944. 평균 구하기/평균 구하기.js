function solution(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const avg = sum / arr.length
    
    return avg;
}