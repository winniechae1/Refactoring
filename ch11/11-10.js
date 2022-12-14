export function charge(customer, usage, provider) {
  baseCharge = customer.baseRate * usage;
  return baseCahrge + provider.connectionCharge;
}
