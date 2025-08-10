
export function timeToMixJuice(name) {
  switch (name) {
  case 'Pure Strawberry Joy':
      return 0.5;
    break;
  case 'Energizer': 
      return 1.5;
  case 'Green Garden':
      return 1.5;
    break;
  case 'Tropical Island':
      return 3;
    break;
  case 'All or Nothing' :
      return 5;
    break;
  default:
      return 2.5;
}
}

export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let limeCount = 0;
  for (let lime of limes) {
    if (count >= wedgesNeeded) {
      break; 
    }

    if (lime === 'small') {
      count += 6;
    } else if (lime === 'medium') {
      count += 8;
    } else if (lime === 'large') {
      count += 10;
    }

    limeCount++;
  }

  return limeCount; 
}

export function remainingOrders(timeLeft, orders) {
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const time = timeToMixJuice(order);

    if (time <= timeLeft) {
      timeLeft -= time;
    } else {
      if (timeLeft > 0) {
        return orders.slice(i + 1);
      } else {
        return orders.slice(i);
      }
    }
  }

  return [];
}

