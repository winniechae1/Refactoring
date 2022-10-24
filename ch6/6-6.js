// 참조값이 반환된다. 객체는 항상 reference 값으로 전달되기 때문에
// let defaultOwner = { firstName: "마틴", lastName: "파울러" };
// 1. 자바스크립트
//export function getDefaultOwner() {
//  return { ...defaultOwner }; // spread 연산자를 사용하면 얕은 복사가 되기 때문에 위험!
//}
// 2. 일반적인 방법: 클래스 생성
class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

export function getDefaultOwner() {
  return defaultOwner;
}

// 불변성
//export function getDefaultOwner() {
//  return defaultOwner;
//}
