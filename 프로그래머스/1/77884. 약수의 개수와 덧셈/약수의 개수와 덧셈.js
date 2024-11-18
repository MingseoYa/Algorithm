function solution(left, right) {
    let totalSum = 0
    
    for (j = left ; j <= right ; j++) {
        let sum = 0;
        
        for (i = 1 ; i <= j ; i ++) {
            if (j % i === 0) sum += 1
        }
        
        if (sum % 2 === 0) totalSum = totalSum + j
        else totalSum = totalSum - j
    }
    
    return totalSum;
}