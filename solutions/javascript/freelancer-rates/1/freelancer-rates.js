 
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let monthsComplete = Math.floor(numDays / 22) * 22;
  let ratePerDay = ratePerHour * 8;
  const priceNormal = ratePerDay * monthsComplete
  let clientDiscount = discount === 0 ? priceNormal : 
    priceNormal - (priceNormal * discount)
  let days = numDays % 22;
  return Math.ceil( clientDiscount + (days * ratePerDay))
}
