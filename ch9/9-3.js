// 예제 1 질의함수로 만들기
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
    //this._discountedTotal += old - value; // 다른 필드도 업데이트 하고 있음
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
