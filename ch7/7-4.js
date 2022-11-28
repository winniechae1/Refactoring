class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }
  get discountFactor() {
    return basePrice > 1000 ? 0.95 : 0.98;
    /*const discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;*/
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
}
