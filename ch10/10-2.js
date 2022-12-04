/* 
    동일한 동작을 수행하는 다양한 조건들이 있다면 그 조건들을 하나로 뭉친다음에 리팩토링 하자. 
*/

function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;

  function isNotEligibleForDisability(employee) {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  }
}
