targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}

/* 
    내부 클래스 안에서 응집도가 높은 상태에서는 내부적으로 매개변수로 전달받기보다는 
    서로 직접 데이터에 접근할 수 있는 질의함수 형태로 전달받는 것이 좋다.
*/
