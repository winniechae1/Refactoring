class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = 
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
    #customers;

    constructor() {
        this.#customers = new Map();
    }

    registerCustomer(id) {
        if ()
    }
}