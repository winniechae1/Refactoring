const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
  /*if (periodNumber < 0 || periodNumber >= values.length) {
    return 0;
  }
  return values[periodNumber];*/
}

getValueForPeriod(-10);
