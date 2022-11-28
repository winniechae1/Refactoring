// Replace Primitive with Object

/*class Telephone {
    const constructor(number, countryCode) {

    }
}
const telephone = "010-1234-1234";
const gTelephone = "+82" + "010-1234-1234";*/
export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    // return "high" === this.priority || "rush" === this.priority;
    return this.priority.higherThan("normal");
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error("${value} is invalid for Priority");
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

/*
const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority // 외부에서 필터링 하는 logic 자체가 잘못됨.
).length;
==>
*/

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
