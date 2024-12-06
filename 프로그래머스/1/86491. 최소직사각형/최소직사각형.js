function solution(sizes) {
    // 가로와 세로 길이를 비교해 가로에 큰 값이 오도록 정렬
    sizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w])
    
    // 가로와 세로의 최대값 구하기
    const maxW = Math.max(...sizes.map(size => size[0]))
    const maxH = Math.max(...sizes.map(size => size[1]))
    
    // 가장 작은 지갑의 크기 반환
    return maxW * maxH
}