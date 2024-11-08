function solution(phone_number) {
    // 뒤에 4자리 빼고 *로 채워주기
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  
}