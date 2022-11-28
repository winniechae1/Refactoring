/* 
const organization = { name: 'Acme Gooseberries', country: 'GB' }; // 객체를 불변성으로 설정해야함.
*/

class Organization {
  #name;
  #country;
  constructor(data) { // name, country : 보통 이렇게 사용 
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    // update 를 불가능하게 하고 싶다면 setter를 지우면 된다.
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return {...this.#data}; // 얕은 복사 
  }
}

const organization1 = new Organization({
"Acme Gooseberries",
"GB"
});

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
