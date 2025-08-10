
export function totalBirdCount(birdsPerDay) {
  const suma = birdsPerDay.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return suma;
}

export function birdsInWeek(birdsPerDay, week) {
  let start = (week - 1) * 7;
  let end = start + 7;
  const result = birdsPerDay.slice(start, end);

  return result.reduce((acc, bird) => acc + bird, 0);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }
  return birdsPerDay;
}
