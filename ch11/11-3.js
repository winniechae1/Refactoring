// 예제 1 인자가 두가지 들어와서 바뀌는 함수는 냄새가 난다.
function setWidth(value) {
    this._width = value;
}

function setHeight(value) {
    this._height = value;
}


// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer, isPremium) {}
}

// 예제 3 ch06 참고 
function switchOn();
function switchOff();
