// 함수 내부에서 필요한 부분만 받아옴으로써 외부 다른 객체의 의존도를 낮추면서 재사용성을 높일 수 있다.
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
/*
export function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
*/
