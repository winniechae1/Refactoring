import { strict as assert } from "node:assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    // 개발 단걔에서 실수를 방지하고자 하는 방식
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(0);
