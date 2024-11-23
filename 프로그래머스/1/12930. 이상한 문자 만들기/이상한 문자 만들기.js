function solution(s) {
    return s
        .split(' ') // 공백을 기준으로 단어 분리
        .map(word => {
            // 각 단어를 순회하면서 짝/홀 처리
            return [...word]
                .map((char, index) => {
                    if (index % 2 === 0) {
                        return char.toUpperCase(); // 짝수 인덱스는 대문자
                    } else {
                        return char.toLowerCase(); // 홀수 인덱스는 소문자
                    }
                })
                .join(''); // 변환된 글자를 단어로 합침
        })
        .join(' '); // 단어들을 공백으로 다시 합침
}

