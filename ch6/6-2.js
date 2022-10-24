// 언제 함수를 추출하고 인라인하는 방법
// 함수에 의미있는 이름을 부여함으로써 가독성과 재사용성을 높이고 추후에 유지보수성을 높임.

// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = []; // 함수에서 return하는 결과값을 갖고 있다면 lines 이름보다는 result로 사용
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
