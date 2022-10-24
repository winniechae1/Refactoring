export class Order {
  #data; // _data 대신에 #data로 사용 (private data인 경우 사용)
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount() {
    Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
