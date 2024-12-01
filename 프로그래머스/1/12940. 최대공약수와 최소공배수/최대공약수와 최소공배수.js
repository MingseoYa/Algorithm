function solution(n, m) {
    // 최대공약수 (유클리트 호제법)
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y))
    const resultGcd = gcd(n, m)
    
    // 최소공배수
    const resultLcm = (n * m) / resultGcd
    return [resultGcd, resultLcm]
}